
import roommateImage from './images/roommate-tracker.png';
import findNewMusicImage from './images/find-new-music.png';
import technicianAssistImage from './images/technician-assist.png';
import nodeLogo from './images/node-0fc14864.jpg';

const aboutMeStuffConvertToJson = () => {
  return {
    contactInfo: {
      email: 'sretundijr@gmail.com',
      phone: '720-883-6585',
    },
    firstName: 'Steve',
    lastName: 'Retundi Jr.',
    title: 'Full Stack Developer',
    bio: 'I am a former Automotive Technician with a passion for computer programming.  Many years ago while attending college I took my first computer science class and immediately fell in love.  I really enjoy technically work which was what initially brought me to the automotive industry.  After many years in the industry I decided it was time to make a change.  Which brought me back to computer programming.  I decided to attended Front Range Community college to learn the core computer science fundamentals.  These fundamentals were taught using C++ and covered Object Oriented Programming, data structures, algorithms and the Standard template library.  After completion of the computer programming certificate offered by Front Range, I decided it was time to learn a framework.  I have always been curious about the web so I joined Thinkful.  While at Thinkful, I learned full stack JavaScript programming and built three portfolio pieces that demonstrate these skills.  It’s been an amazing journey so far and I am ready to take these skills to the next level by joining a team of Software Engineers.',
    about: 'I am a Full Stack JavaScript Developer living in the Denver Area.  I enjoy writing business logic and building tools that solve the day to day issues companies of different backgrounds may face.  In addition to being a passionate Developer, I love cars!  Over the last several years I have had the pleasure to build several high performance cars for myself and many others.  I have recently purchased quite possible the most exciting performance car platform and look forward to future track days and modifications.  I also love spending time with friends and family, traveling and music from the 90’s.  To learn more about me please browse my site and don’t hesitate to reach out, I’d love to speak with you about future opportunities in software.',
    skills: [
      'Html',
      'Css',
      'Bootstrap 3',
      'Pug/Jade',
      'jQuery',
      'Ajax',
      'JavaScript',
      'Es6',
      'React',
      'Next.js',
      'Gatsby.js',
      'Netlify',
      'Heroku',
      'Webpack',
      'Babel',
      'Node',
      'Express',
      'Mongo Db',
      'Mongoose',
      'Auth0',
      'Mailgun',
      'mLab',
      'GitHub',
      'Travis Ci',
    ],
    projects: [
      {
        title: 'Technician Assist',
        description: 'Technician Assist is an automotive service department tool designed to increase the customer experience through accurate diagnostics and repairs.',
        appLink: 'https://www.technician-assist.com/',
        gitHubLink: 'https://github.com/sretundijr/final-capstone',
        image: technicianAssistImage,
        technologies: [
          {
            type: 'Next.js',
            image: '',
          },
          {
            type: 'Es6',
            image: '',
          },
          {
            type: 'Node js',
            image: nodeLogo,
          },
          {
            type: 'React',
            image: '',
          },
          {
            type: 'Netlify',
            image: '',
          },
          {
            type: 'Heroku',
            image: '',
          },
          {
            type: 'Mailgun',
            image: '',
          },
          {
            type: 'Auth0',
            image: '',
          },
          {
            type: 'Mongo Db',
            image: '',
          },
          {
            type: 'Mongoose',
            image: '',
          },
          {
            type: 'Express',
            image: '',
          },
        ],
      },
      {
        title: 'Roommate Bill Tracker',
        description: 'The Roommate Bill Tracker is an app that allows a user and their roommates to enter shared expenses.  The app then stores and automatically splits the bills equally.  Roommates and bills can added and reomved easliy.  The mobile app is coming soon for both Iphone and Android!',
        appLink: 'https://secure-coast-72425.herokuapp.com/',
        gitHubLink: 'https://github.com/sretundijr/second-capstone-bill-tracker',
        image: roommateImage,
        technologies: [
          {
            type: 'Es6',
            image: '',
          },
          {
            type: 'Boostrap 3',
            image: '',
          },
          {
            type: 'Pug/Jade',
            image: '',
          },
          {
            type: 'Node js',
            image: nodeLogo,
          },
          {
            type: 'Heroku',
            image: '',
          },
          {
            type: 'Mongo Db',
            image: '',
          },
          {
            type: 'Mongoose',
            image: '',
          },
          {
            type: 'Express',
            image: '',
          },
          {
            type: 'Webpack',
            image: '',
          },
          {
            type: 'Babel',
            image: '',
          },
        ],
      },
      {
        title: 'New Music Finder',
        description: 'This app allows a user to enter book titles, bands, movies and TV shows to find suggested music.',
        appLink: 'https://sretundijr.github.io/first-capstone/',
        gitHubLink: 'https://github.com/sretundijr/first-capstone',
        image: findNewMusicImage,
        technologies: [
          {
            type: 'JavaScript',
            image: '',
          },
          {
            type: 'jQuery',
            image: '',
          },
          {
            type: 'Ajax',
            image: '',
          },
          {
            type: 'Html',
            image: '',
          },
          {
            type: 'CSS',
            image: '',
          },
        ],
      },
    ],
  };
};

export default aboutMeStuffConvertToJson;
