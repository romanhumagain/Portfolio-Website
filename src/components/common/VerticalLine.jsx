const VerticalLine = ({ icon: Icon }) => {
  return (
    <div className="relative flex items-center justify-center">
      
      <div className="w-[2px] h-14 bg-gray-400 dark:bg-neutral-700 rounded-xl relative overflow-visible"></div>
      
      <div className="absolute p-1 overflow-visible bg-white rounded-full dark:bg-neutral-900 top-2">
        <Icon className="text-2xl text-gray-600 dark:text-gray-300" />
      </div>
    </div>
  );
};

export default VerticalLine;
