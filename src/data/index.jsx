import { SiDiscord, SiMongodb, SiNextdotjs, SiAliexpress, SiAdobephotoshop, SiCanva, SiAdobeillustrator, SiInstagram } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import { CiLinkedin } from 'react-icons/ci'
import {
   FaHtml5, FaCss3Alt, FaBootstrap,
  FaNodeJs, FaPhp, FaPython, FaFigma, FaJava
} from 'react-icons/fa'
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReact, TbBrandVue, TbBrandMysql, TbBrandReactNative } from "react-icons/tb";
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import {
  profile2, profile3, profile4, profile5,
  amazon, facebook, google,
  linkedin, microsoft, netflix, paypal, samsung,
  skype, whatsapp,
} from '../assets/images'


export const menus = [
  { name: "Home" },
  { name: "About" },
  { name: "Education" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Clients" },
  { name: "Contact" },
];


export const partners = [
  {
    name: "Amazon",
    logo: amazon,
  },
  {
    name: "Facebook",
    logo: facebook,
  },
  {
    name: "Google",
    logo: google,
  },
  {
    name: "LinkedIn",
    logo: linkedin,
  },
  {
    name: "Microsoft",
    logo: microsoft,
  },
  {
    name: "Netflix",
    logo: netflix,
  },
  {
    name: "PayPal",
    logo: paypal,
  },
  {
    name: "Samsung",
    logo: samsung,
  },
  {
    name: "Skipe",
    logo: skype,
  },
  {
    name: "Whatsapp",
    logo: whatsapp,
  },
]


export const education = [
  {
    schoolName: "Rwanda Coding Academy",
    dateRange: "2023 - 2024",
    certification: "DevOps",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum qui veniam ut molestiae dignissimos aliquid voluptates nesciunt saepe dicta similique natus, velit et explicabo dolor, laudantium hic odit ad. Molestiae!",
  },
  {
    schoolName: "Rwanda Coding Academy",
    dateRange: "2023 - 2024",
    certification: "Mobile Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum qui veniam ut molestiae dignissimos aliquid voluptates nesciunt saepe dicta similique natus, velit et explicabo dolor, laudantium hic odit ad. Molestiae!",
  },
  {
    schoolName: "Rwanda Coding Academy",
    dateRange: "2022 - 2023",
    certification: "Web Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum qui veniam ut molestiae dignissimos aliquid voluptates nesciunt saepe dicta similique natus, velit et explicabo dolor, laudantium hic odit ad. Molestiae!",
  },
  {
    schoolName: "Rwanda Coding Academy",
    dateRange: "2022 - 2023",
    certification: "Graphic Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum qui veniam ut molestiae dignissimos aliquid voluptates nesciunt saepe dicta similique natus, velit et explicabo dolor, laudantium hic odit ad. Molestiae!",
  },

]

export const skills = [
  {
    category: "UI/UX",
    data: [
      { skill: "Figma", progress: 80, icon: <FaFigma /> },
      { skill: "Photoshop", progress: 75, icon: <SiAdobephotoshop /> },
      { skill: "Canva", progress: 80, icon: <SiCanva /> },
      { skill: "Illustrator", progress: 75, icon: <SiAdobeillustrator /> },

    ]
  },
  {
    category: "Frontend Development",
    data: [
      { skill: "HTML", progress: 90, icon: <FaHtml5 /> },
      { skill: "CSS", progress: 85, icon: <FaCss3Alt /> },
      { skill: "JavaScript", progress: 80, icon: <RiJavascriptFill /> },
      { skill: "Tailwind", progress: 90, icon: <RiTailwindCssFill /> },
      { skill: "Bootstrap", progress: 85, icon: <FaBootstrap /> },
      { skill: "React", progress: 85, icon: <TbBrandReact /> },
      { skill: "Next Js", progress: 85, icon: <SiNextdotjs /> },
      { skill: "Vue", progress: 85, icon: <TbBrandVue /> },
      { skill: "React Native", progress: 80, icon: <TbBrandReactNative /> },

    ]
  },
  {
    category: "Backend Development",
    data: [
      { skill: "Node JS", progress: 85, icon: <FaNodeJs /> },
      { skill: "Express JS", progress: 90, icon: <SiAliexpress /> },
      { skill: "MongoDB", progress: 80, icon: <SiMongodb /> },
      { skill: "PHP", progress: 80, icon: <FaPhp /> },
      { skill: "Python", progress: 75, icon: <FaPython /> },
      { skill: "MySQL", progress: 70, icon: <TbBrandMysql /> },
      { skill: "Java", progress: 70, icon: <FaJava /> },

    ]
  },
]


export const projects = [
  {
    name: 'Sort Node Package',
    description: `EEffortlessly organize Node packages and sort arrays. Boost productivity.`,
    image: "https://colorlib.com/wp/wp-content/uploads/sites/2/nodejs-frameworks.png",
    url: 'https://github.com/rutaganda-salim/sortnpm',
  },

  {
    name: 'RealTime Chat app',
    description: `Connect instantly. Experience real-time communication like never before.`,
    image: "https://files.ably.io/ghost/prod/2023/01/build-a-realtime-chat-app-from-scratch--1-.png",
    url: 'https://github.com/rutaganda-salim/chat_room-chat_engine',
  },

  {
    name: 'Gemini Clone',
    description: `
    Built with React.js and a versatile API, our clone empowers you to prompt with no authentication.`,
    image: "https://i.gadgets360cdn.com/large/gemini_ai_google_1701928139717.jpg",
    url: 'https://github.com/rutaganda-salim/Gemini-Clone',
  },
  {
    name: 'Figma Clone',
    description: `Experience design excellence with our Figma Clone. 
    Built with the power of Next.JS`,
    image: "https://f.hellowork.com/bdmtools/2021/05/Figma.jpg",
    url: 'https://github.com/rutaganda-salim/figma_clone_1',
  },
  {
    name: 'Market Place',
    description: `Revolutionize online shopping. Integrated with React.js, Google Authentication, and Map API.`,
    image: "https://infostride.com/wp-content/uploads/2023/10/cost-to-create-a-marketlace-website.png?w=1024",
    url: 'https://github.com/rutaganda-salim/marketplace-master',
  },
];


export const clients = [
  {
    image: profile2,
    name: ' Jessica Mary',
    review: ` It was an absolute delight collaborating with Salim. His exemplary professionalism and unwavering dedication led to remarkable outcomes that went beyond my expectations. I enthusiastically endorse his services.`
  },
  {
    image: profile3,
    name: 'Mugabe Joseph',
    review: `Collaborating with Salim was truly delightful. 
    His unwavering professionalism and commitment led to outstanding results, surpassing all my expectations. 
    I wholeheartedly endorse his services.`
  },
  {
    image: profile4,
    name: 'Lucia Janet',
    review: ` It was truly delightful to collaborate with Salim. His unwavering professionalism and dedication yielded exceptional results that surpassed all my expectations. I wholeheartedly endorse his services and look forward to future collaborations.
    `
  },
  {
    image: profile5,
    name: 'Jacob Richardison',
    review: ` 
    It was a pleasure collaborating with Salim. His professionalism and dedication yielded exceptional results, surpassing all my expectations. I wholeheartedly endorse his services and look forward to future collaborations.`
  }

];


export const socialHandles = [
  {
    name: "Discord",
    icon: <SiDiscord />,
    link: "https://discord.com/users/salim_008_73292",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/rutaganda-salim",
  },
  {
    name: "LinkedIn",
    icon: <CiLinkedin />,
    link: "",
  },
  {
    name: "Instagram",
    icon: <SiInstagram />,
    link: "https://www.instagram.com/salimnunez01",
  },
];


export const contactInfo = [
  {
    name: "Email",
    icon: <MdOutlineAlternateEmail />,
    value: "rutagandasalim@gmail.com",
  },
  {
    name: "Phone",
    icon: <IoCallOutline />,
    value: "+250788574365",
  },
  {
    name: "Address",
    icon: <IoLocationOutline />,
    value: "Kigali, Rwanda",
  },
]

export const footer = [
  {
    group: "Hot Links",
    routes: [
      { name: "Home" },
      { name: "About" },
      { name: "Education" },
      { name: "Skills" },
      { name: "Projects" },
      { name: "Clients" },
      { name: "Contact" },
    ]
  },
  {
    group: "Others",
    routes: [
      { name: "Privacy Policy" },
      { name: "Terms and Conditions" },
      { name: "Cookie Policy" },
    ]
  },
  {
    group: "Contacts",
    routes: [
      {
        name: "rutagandasalim@gmail.com",
        icon: <MdOutlineAlternateEmail />,
      },
      {
        name: "+250788574365",
        icon: <IoCallOutline />,
      },
      {
        name: "Kigali, Rwanda",
        icon: <IoLocationOutline />,
      },
    ]
  },
]