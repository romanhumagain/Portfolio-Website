import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, addDoc, query, where, getDocs, collection, onSnapshot } from 'firebase/firestore';

export const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

const ChatContextProvider = ({ children }) => {
  const [userRole, setUserRole] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [adminId, setAdminId] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [roomId, setRoomId] = useState(null);
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userRef = doc(db, 'users', currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          setUserRole(userData.role);
          setUser(userData);
          setIsAuthenticated(true);
          setCurrentUserId(currentUser.uid);

          if (userData.role === "admin") {
            setAdminId(currentUser.uid);
          }
        }
      } else {
        setIsAuthenticated(false);
        setUser(null);
        setUserRole("");
        setAdminId(null);
        setCurrentUserId(null);
      }
    });

    const fetchAdminId = async () => {
      const adminQuery = query(collection(db, 'users'), where("role", "==", "admin"));
      const querySnapshot = await getDocs(adminQuery);
      let adminId = null;

      querySnapshot.forEach((doc) => {
        adminId = doc.id;
      });

      setAdminId(adminId);
    };

    fetchAdminId();

    return () => unsubscribe();
  }, []);

  const createChatRoom = async () => {
    if (!currentUserId || !adminId) return;

    const roomsRef = collection(db, "rooms");
    const q = query(
      roomsRef,
      where("userId", "==", currentUserId),
      where("adminId", "==", adminId)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      const newRoom = {
        userId: currentUserId,
        adminId: adminId,
        messages: []
      };

      const roomDoc = await addDoc(roomsRef, newRoom);
      setRoomId(roomDoc.id);
    } else {
      setRoomId(querySnapshot.docs[0].id);
    }
  };

  const sendMessage = async (text) => {
    if (!roomId || !currentUserId || !adminId) return;

    const messagesRef = collection(db, "messages");
    const newMessage = {
      senderId: currentUserId,
      receiverId: adminId,
      roomId: roomId,
      text: text,
      timestamp: new Date().toISOString()
    };

    await addDoc(messagesRef, newMessage);
    console.log("Message sent:", newMessage);
  };

  const logoutUser = async()=>{
    setIsAuthenticated(false),
    setRoomId(null),
    setUser(null)
    setCurrentUserId(null)
  }

  useEffect(() => {
    if (roomId) {
      const messagesRef = collection(db, "messages");
      const q = query(messagesRef, where("roomId", "==", roomId));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const messagesArray = [];
        querySnapshot.forEach((doc) => {
          messagesArray.push({ id: doc.id, ...doc.data() });
        });
        setMessages(messagesArray);
      });

      return () => unsubscribe();
    }
  }, [roomId]);

  useEffect(() => {
    createChatRoom();
  }, [currentUserId]);

  const context = {
    userRole,
    setUserRole,
    isAuthenticated,
    setIsAuthenticated,
    setUser,
    adminId,
    currentUserId,
    createChatRoom,
    roomId,
    sendMessage,
    messages,
    logoutUser
  };

  return (
    <ChatContext.Provider value={context}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
