const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Nov 3 - Nov 28 ",
    title:
      "Artifical Intelligence Intern in Entrans.inc Technologies",
    image: "/images/entrans1.png",
    link: "https://github.com/Ebenezer-03/Entrans-Internship"
    },
  {
    id: 2,
    date: "Jun 06 2025",
    title: "AWS Cloud Practioneer Essentials Certification",
    image: "/images/aws1.png",
    link: "https://drive.google.com/file/d/1asYsbeMgWIQjLHnZ0wigveyK6-EQkDMk/view?usp=sharing",
  },
  {
    id: 3,
    date: "May 05 2025",
    title: "Mongo DB Basics for Students",
    image: "/images/mongo.png",
    link: "https://drive.google.com/file/d/1e1DHtdIi18qZhG37R9kyrJjDKJMsGHJq/view?usp=sharing",
  },
  {
    id: 4,
    date: "August 18 2024",
    title: "Leetcode Problems Solved",
    image: "/images/leetcode.png",
    link: "https://leetcode.com/u/Ebenezer_03/",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Firebase", "Django"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"],
  },
   {
    category: "Programming Languages",
    items: ["JavaScript", "Python","C++"],
  },
  {
    category: "Artifical Intelligence",
    items: ["Machine Learning","Computer Vision","Natural Language Processing"]
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker",],
  },
  
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Ebenezer-03",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https:/localhost:5173",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/jsmasterypro",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/ebenezer-s-/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "SmartSlot AI Hospital Queue System",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "SmartSlot AI Hospital Queue System.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "SmartSlot AI Hospital Queue System is an AI-driven solution to manage hospital queues efficiently.",
            "Automatically allocates appointment slots to reduce waiting time.",
            "Provides real-time queue updates for patients and staff.",
            "Built using React, Firebase, and cloud-based notifications.",
            "Improves hospital workflow through smart scheduling.",
          ],
        },
        {
          id: 2,
          name: "smart-slot.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://smart-slot-two.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "SmartSlot.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Outpass Generation System",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Outpass Generation System.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Outpass Generation System is a digital platform for managing student outpass requests.",
            "Supports student, staff, and warden roles with approval flow.",
            "Generates QR-based outpasses for secure gate verification.",
            "Shows real-time request status and notifications.",
            "Ideal for colleges, hostels, and institutional management.",
          ],
        },
        {
          id: 2,
          name: "Outpass.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://outpass-01.vercel.app",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Outpass.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Wildlife Monitoring System",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Wildlife Monitoring System.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Wildlife Monitoring System is a wildlife identification and monitoring platform using ML.",
            "Users upload images to detect species instantly.",
            "Highlights endangered animals with conservation alerts.",
            "Displays species information and habitat details.",
            "Useful for researchers, forest departments, and NGOs.",

          ],
        },
        {
          id: 2,
          name: "Wildlife Monitoring System.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: " https://studio.firebase.google.com/studio-686221333",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Wildlife Monitoring System.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpeg",
    },
    {
      id: 2,
      name: "Ebenezer.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/me2.jpeg",
    },
    
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/me2.jpeg",
      description: [
        "I am a CSE student passionate about web development, AI, and full-stack projects. ⚙️",
        "I love combining creativity with technology to build meaningful digital solutions. 💡",
        "Learning new tools and frameworks is something I enjoy every single day. 📚",
        "I focus on solving real-world problems through practical, user-friendly applications.",
        "My work reflects dedication, consistent effort, and attention to detail. 🔍",
        "I enjoy experimenting with React, Firebase, Python, and modern AI technologies.",
        "Building projects helps me grow as a developer and expand my technical knowledge.",
        "I believe in writing clean, scalable, and purpose-driven code. 🧩",
        "Every project I create brings me closer to becoming a skilled software developer.",
        "My goal is to continue learning, innovating, and contributing to impactful solutions. 🚀",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Ideas",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "AI Based Text Summarizer",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/nlp.png",
    },
    {
      id: 2,
      name: "NGO Crowd Funding App",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/impactone.jpeg",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };