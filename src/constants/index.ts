import type { TExperience, TNavLink, TProject, TService, TTechnology } from '../types';

import {
  ambivers,
  bountie,
  css,
  erajaya,
  git,
  html,
  javascript,
  medeasyweb,
  bountielogo,
  mobile,
  nodejs,
  oxone,
  qbit,
  qleap,
  reactjs,
  redux,
  ambiverslogo,
  kemendagri,
  tailwind,
  typescript,
  web,
  flutter,
  mysql,
  postgre,
  firebase,
  boostrap,
  bloc,
  php,
  codeigniter,
  nestjs,
  nextjs,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Fullstack Web Developer',
    icon: web,
  },
  {
    title: 'Mobile Developer',
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'bootstrp',
    icon: boostrap,
  },

  {
    name: 'next',
    icon: nextjs,
  },
  {
    name: 'nest',
    icon: nestjs,
  },
  {
    name: 'Flutter',
    icon: flutter,
  },

  {
    name: 'Firebase',
    icon: firebase,
  },
  {
    name: 'php',
    icon: php,
  },
  {
    name: 'codeigniter',
    icon: codeigniter,
  },

  {
    name: 'PostgreSql',
    icon: postgre,
  },
  {
    name: 'My SQL',
    icon: mysql,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Web Developer Intern',
    companyName: 'Kementerian Dalam Negeri',
    icon: kemendagri,
    iconBg: '#ffffff',
    date: 'Oct 2021 - Nov 2021',
    points: [
      'Assisting to develop a CPNS exam practice website using PHP Codeigniter 3 & MySQL',
      'Learn website development from database design,UI design, and code implementation',
    ],
  },
  {
    title: 'Frontend Developer Intern',
    companyName: 'Ambivers.id',
    icon: ambiverslogo,
    iconBg: '#ffffff',
    date: 'Feb 2022 - Jun 2022',
    points: [
      'Worked as main frontend developer to build Ambivers.id Exam website using React JS and Bootstrap',
      'Collaborate with UI/UX and Backend developer to ensure proper integration between frontend and backend',
      'Conducting comprehensive web testing to ensure optimal performance and minimal errors',
    ],
  },
  {
    title: 'Frontend Developer Intern',
    companyName: 'Bountie',
    icon: bountielogo,
    iconBg: '#000000',
    date: 'Sep 2022 - Dec 2022',
    points: [
      'Asssting and contributing on the revamp/redesign of bountie.io and bountie.vn website',
      'Implemented website pages from design and concept using Nextjs, Typescript, Tailwind, React Context, and API integration',
      'Work closely with development team to identifying and resolving bugs to ensure website is functioning effectively',
      'Learn to write Reusable and Clean Code and apply Scrum Methodology',
    ],
  },

  {
    title: 'Fullstack Developer Intern',
    companyName: 'Qbit',
    icon: qbit,
    iconBg: '#FFFFFF',
    date: 'May 2023 - Nov 2023',
    points: [
      'Worked on various client project ( Medeasy & Oxone)',
      'Maintain and develop applications (CMS, Web, and Mobile app) using Next JS, React JS, React Native, integrate functionality and consume RESfFul API.',
      'Maintain and Provide RESTful API using Nest JS and PostgreSQL for Development Needs.',
      'Collaborate with the UI/UX to turn the design into code.',
      'Collaborate with QA to ensure the application performance runs Smoothly and Bug-Free.',
      'Learn to write Reusable and Clean Code and apply Scrum Methodology',
    ],
  },
  {
    title: 'Mobile & Web Developer',
    companyName: 'Erajaya',
    icon: erajaya,
    iconBg: '#ffffff',
    date: 'Nov 2023 - Present',
    points: [
      'Spearheaded the development, deployment, and maintenance of Qleap Mobile, an internal HRIS app utilized by all Erajaya employees.',
      'Developed the mobile app using Flutter, ensuring seamless functionality across both Android and iOS platforms.',
      'Successfully launched Qleap Mobile on the App Store for the first time and achieving over 10,000 downloads on Play store and significantly enhancing the user experience.',
      'Implement Clean Architecture with BLoC for state management, ensuring a scalable and maintainable codebase.',
      'Integrate Firebase Cloud Messaging (FCM) for real-time push notifications, enhancing user engagement.',
      'Leverage Firestore as a supporting database to enable efficient data storage and retrieval.',
      'Provided dedicated customer support for Qleap web and mobile, addressing user inquiries and resolving issues to ensure smooth operation.',
      'Extended support for the Qleap Web version, leveraging React.js to maintain and improve its functionality.',
    ],
  },
];

const projects: TProject[] = [
  {
    name: 'Qleap',
    description:
      "Qleap is an innovative internal HRIS application designed for all Erajaya employees. Packed with a wide range of features, Qleap empowers employees to thrive in their roles. One standout feature is the *E-University*, which challenges and sharpens employees' knowledge about products and their respective roles. Additionally, Qleap offers seamless access to employee services such as employee loan, status promotions, and approvals for various employee submissions. In this project i mainly focused on developing the mobile app and provide support for developing web version",
    tags: [
      {
        name: 'flutter',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'orange-text-gradient',
      },
      {
        name: 'react',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: qleap,
    sourceCodeLink: 'https://play.google.com/store/apps/details?id=hcdigital.erajaya.qleap&hl=id',
  },
  {
    name: 'Medeasy',
    description:
      'a web-based and mobile platform that allows users to consult with doctors via chat and video calls. The platform also enables users to receive prescriptions, medical certificates, clearances, and other essential documents. Doctors can create prescriptions directly from consultations. In this project, I take on the role of a full-stack developer, using Next.js for the public web and CMS, React native for the mobile app and NestJS with PostgreSQL for the backend to build a scalable and efficient system',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'reactnative',
        color: 'blue-text-gradient',
      },
      {
        name: 'antdesign',
        color: 'green-text-gradient',
      },
      {
        name: 'nestjs',
        color: 'pink-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'orange-text-gradient',
      },
    ],
    image: medeasyweb,
    sourceCodeLink: 'https://medeasy.ph/',
  },

  {
    name: 'Oxone',
    description:
      "A mobile app that serves as a dedicated marketplace for Oxone products, allowing users to explore and purchase items while earning reward points with every transaction. The platform also features a loyalty program, enabling users to access exclusive pricing based on their loyalty level. In this project, my primary focus is on developing the CMS and backend, ensuring seamless functionality and robust support for the mobile app's features",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'antdesign',
        color: 'green-text-gradient',
      },
      {
        name: 'nestjs',
        color: 'pink-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'orange-text-gradient',
      },
    ],
    image: oxone,
    sourceCodeLink: 'https://opa.oxone-online.com/',
  },

  {
    name: 'Bountie',
    description:
      'Bountie is a web-based platform that allows users to participate in e-sports tournaments, compete in various game titles, and win prizes. The platform features a live leaderboard where teams can track their rankings based on tournament performance. Users can also watch live streams of matches, follow top teams, and engage with content creators. The system supports team management, match scheduling, and creating a seamless experience for players, organizers, and viewers. In this project a worked as Frontend Developer',
    tags: [
      {
        name: 'Nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'orange-text-gradient',
      },
    ],
    image: bountie,
    sourceCodeLink: 'https://www.linkedin.com/company/bountiegaming/',
  },
  {
    name: 'Ambivers',
    description:
      'Ambivers is a web-based platform designed to help users prepare for university entrance exams through realistic practice tests. It offers features such as real-time exams, ranking systems, and educational articles to support learning. In this project, I worked as a Frontend Developer, contributing to the development of an interactive and user-friendly interface.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: ambivers,
    sourceCodeLink: 'https://www.linkedin.com/company/ambivers-id/posts/?feedView=all',
  },
];

export { experiences, projects, services, technologies };
