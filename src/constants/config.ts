type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'Muhammad Zidane',
    fullName: 'Zidane',
    email: 'muhammadzidane633@mail.com',
  },
  hero: {
    name: 'Zidane',
    p: ['I develop Mobile application,', 'and web applications'],
  },
  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      name: {
        span: 'Email',
        placeholder: 'mailto:muhammadzidane633@gmail.com',
      },
      email: { span: 'Linkedin', placeholder: 'https://www.linkedin.com/in/muhammadzidane05/' },
      message: {
        span: 'Github',
        placeholder: 'https://github.com/mhmddzidane',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `I develop innovative mobile and web applications using cutting-edge technologies, seamlessly bridging front-end elegance with back-end efficiency. As a meticulous, organized, and forward-thinking individual, I thrive in multitasking environments and am driven by an insatiable passion for learning. My deep-rooted fascination with programming, especially in mobile & web development, fuels my commitment to creating impactful digital experiences.`,
    },
    experience: {
      p: 'What I have done so far',
      h2: 'Work Experience.',
    },
    feedbacks: {
      p: 'What others say',
      h2: 'Testimonials.',
    },
    works: {
      p: 'My work',
      h2: 'Projects.',
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
