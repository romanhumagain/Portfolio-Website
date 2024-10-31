import { FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap, FaGithub, FaFigma } from 'react-icons/fa';
import { SiCsharp, SiTypescript, SiDjango , SiExpress, SiFlutter, SiTailwindcss, SiMysql, SiMongodb, SiOracle, SiDart, SiPostman, SiGit } from 'react-icons/si';


const skills = [
  {
    category: 'languages',
    details: [
      {
        name: 'Python',
        icon: FaPython,
        brand_color: '#3776AB'
      },
      {
        name: 'Java',
        icon: FaJava,
        brand_color: '#007396'
      },
      {
        name: 'C#',
        icon: SiCsharp,
        brand_color: '#239120'
      },
      {
        name: 'JavaScript',
        icon: FaJs,
        brand_color: '#F7DF1E'
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        brand_color: '#3178C6'
      },
      {
        name: 'Dart',
        icon: SiDart,
        brand_color: '#00B4AB'
      },
      {
        name: 'HTML5',
        icon: FaHtml5,
        brand_color: '#E34F26'
      },
      {
        name: 'CSS3',
        icon: FaCss3Alt,
        brand_color: '#1572B6'
      }
    ]
  },

  {
    category: 'frameworks',
    details: [
      {
        name: 'Django',
        icon: SiDjango,
        brand_color: '#092E20'
      },
      {
        name: 'DRF',
        icon: SiDjango,
        brand_color: '#FF5722'
      },
      {
        name: 'React',
        icon: FaReact,
        brand_color: '#61DAFB'
      },
      {
        name: 'Node.js',
        icon: FaNodeJs,
        brand_color: '#339933'
      },
      {
        name: 'Express',
        icon: SiExpress,
        brand_color: '#000000'
      },
      {
        name: 'Flutter',
        icon: SiFlutter,
        brand_color: '#02569B'
      },
      {
        name: 'Tailwind',
        icon: SiTailwindcss,
        brand_color: '#38B2AC'
      },
      {
        name: 'Bootstrap',
        icon: FaBootstrap,
        brand_color: '#7952B3'
      }
    ]
  },

  {
    category: 'database',
    details: [
      {
        name: 'MySQL',
        icon: SiMysql,
        brand_color: '#4479A1'
      },
      {
        name: 'MongoDB',
        icon: SiMongodb,
        brand_color: '#47A248'
      },
      {
        name: 'Oracle',
        icon: SiOracle,
        brand_color: '#F80000'
      },
      
    ],
  },

  {
    category: 'tools',
    details: [      
      {
        name: 'Figma',
        icon: FaFigma,
        brand_color: '#F24E1E'
      },
      {
        name: 'Git', 
        icon: SiGit, 
        brand_color: '#F05032'
      }
    ]
  }
]

export default skills;
