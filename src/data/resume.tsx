import { Icons } from "@/components/icons";
import { HomeIcon, SparklesIcon } from "lucide-react";

export const DATA = {
  name: "Edward Chen",
  initials: "EC",
  url: "https://edc1009.github.io",
  location: "Los Angeles (Willing to relocate)",
  locationLink: "https://www.google.com/maps/place/los+angeles",
  description:
    "Product Manager with expertise in logistics, Web3, and UX design. Experienced in leading cross-functional teams, driving product innovation, and delivering scalable solutions that improve operational efficiency and user experience.",
  summary:
    "I'm a Product Manager with a passion for building products that solve real-world problems. My journey has taken me from the fast-paced world of Web3 exchanges in Taiwan to logistics innovation in Los Angeles.\n\nAt ACE Exchange, Taiwan's largest Web3 platform, I led an 11-member squad to revamp the app deposit journey, increasing conversion rates by 30% and doubling deposit rates. I built comprehensive data tracking systems and created dashboards that provided crucial insights into user behavior and product performance.\n\nCurrently at Pioneer Global Logistics, I'm redesigning booking management systems and engineering scalable 3PL integration frameworks. I've reduced manual processes by 40-70% through automation and created real-time KPI dashboards that increased operational capacity by 20%.\n\nI believe in data-driven decision making, user-centric design, and the power of cross-functional collaboration to deliver exceptional products.",
  avatarUrl: "/me.jpeg",

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/showcase", icon: SparklesIcon, label: "Showcase" },
  ],
  contact: {
    email: "chen.i1@northeastern.edu",
    tel: "857 364 7113",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/edc1009",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chen-i/",
        icon: Icons.linkedin,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:chen.i1@northeastern.edu",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  technicalExperience: [
    {
      company: "Pioneer Global Logistics",
      href: "#",
      badges: [],
      location: "Los Angeles, CA",
      title: "Product Manager",
      logoUrl: "/pioneer-logo.webp",
      start: "Oct 2024",
      end: "Present",
      bullets: [
        "Redesigned the booking management module using React and RESTful APIs, reducing manual booking entry time by 40%, measured by average time OP spent per booking",
        "Engineered a scalable 3PL integration framework by collaborating with carrier vendors and internal engineers, cutting coordination time by 45% through EDI/API automation",
        "Led cross-functional initiative to automate carrier notice processing using AWS tools, resulting in 70% reduction in operations team's manual email handling time",
        "Created internal OP KPI dashboard using Power BI, enabling real-time visibility of daily processed shipments, which increased order handling capacity by 20%, measured by daily shipment volume per OP",
        "Facilitated user validation testing with SMEs, created UAT scripts and supported hypercare post-deployment, achieving a <5% issue rate in the first 3 weeks after launch"
      ],
    },
    {
      company: "Phase",
      badges: [],
      href: "#",
      location: "Boston, MA",
      title: "Technical Product Manager",
      logoUrl: "/phase_software_logo.jpeg",
      start: "May 2023",
      end: "Nov 2023",
      bullets: [
        "Led the app's user onboarding redesign, increasing new user retention by 30% and satisfaction rate to 82%",
        "Conducted market research on animation software trends, driving a UI revamp that boosted engagement by 35%",
        "Prioritized 20 product features through power-user interviews, streamlining development and aligning with user needs"
      ],
    },
    {
      company: "ACE Exchange",
      href: "#",
      badges: [],
      location: "Taipei, Taiwan",
      title: "Product Manager",
      logoUrl: "/leadtech_innovations_logo.jpeg",
      start: "Aug 2020",
      end: "Aug 2022",
      bullets: [
        "Led an 11-member squad, including a designer, developers, and QA, to revamp the app deposit journey, increase the funnel conversion rate by 30%, and double the deposit rate",
        "Build up the App data tracking rules and create dashboards on key performance indicators related to conversion rates, user engagement, and acquisition metrics to generate App product insights",
        "Reduced user disputes by 18% by streamlining cross-functional team collaboration processes and providing self-service solutions to users"
      ],
    },
  ],
  education: [
    {
      school: "Northeastern University",
      href: "https://www.northeastern.edu",
      degree: "Master of Science in Information System",
      logoUrl: "/northeastern_university.png",
      start: "Sep 2022",
      end: "May 2024",
    },
  ],
  projects: [
    {
      title: "AI Freight Track",
      href: "https://github.com/edc1009/ai-freight-track",
      dates: "2024 - Present",
      active: true,
      description:
        "An intelligent freight tracking system that uses AI to predict delivery times, optimize routes, and provide real-time shipment visibility for logistics operations.",
      technologies: [
        "Python",
        "Machine Learning",
        "React",
        "Node.js",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/edc1009/ai-freight-track",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Financial Chatbot BCG",
      href: "https://github.com/edc1009/financial-chatbot-bcg",
      dates: "2024 - Present",
      active: true,
      description:
        "A certified project on Forage developing an intelligent financial chatbot for BCG, providing automated financial advisory services.",
      technologies: [
        "Python",
        "Natural Language Processing",
        "Financial Data",
        "HTML",
        "Web Interface",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/edc1009/financial-chatbot-bcg",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Mail Fashion Board",
      href: "https://github.com/edc1009/mail-fashion-kanban",
      dates: "2024 - Present",
      active: true,
      description:
        "An email management kanban board system designed for freight coloaders to organize and manage distributed email tools efficiently.",
      technologies: [
        "React",
        "TypeScript",
        "Drag & Drop",
        "Email Integration",
        "Fashion Retail",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/edc1009/mail-fashion-kanban",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Pioneer Global Logistics",
      href: "#",
      dates: "2024 - Present",
      active: true,
      description:
        "A comprehensive logistics management platform featuring booking management, 3PL integration, automated carrier processing, and real-time KPI dashboards for operational efficiency.",
      technologies: [
        "React",
        "RESTful APIs",
        "Power BI",
        "AWS",
        "EDI Integration",
      ],
      links: [
        {
          type: "Coming Soon",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  books: [
    {
      theme: "Political Philosophy & Social Theory",
      books: [
        {
          title: "The Social Contract",
          author: "Jean-Jacques Rousseau",
          number: 1,
        },
        {
          title: "On Liberty",
          author: "John Stuart Mill",
          number: 2,
        },
        {
          title: "Distinction: A Social Critique of the Judgement of Taste",
          author: "Pierre Bourdieu",
          number: 3,
        },
        {
          title: "The Spirit of the Laws",
          author: "Montesquieu",
          number: 4,
        },
      ],
    },
    {
      theme: "Contemporary Philosophy",
      books: [
        {
          title: "Agonie des Eros",
          author: "Byung-Chul Han",
          number: 5,
        },
        {
          title: "Thus Spoke Zarathustra",
          author: "Friedrich Nietzsche",
          number: 6,
        },
      ],
    },
    {
      theme: "History & Global Affairs",
      books: [
        {
          title: "A Concise History of Hong Kong",
          author: "John M. Carroll",
          number: 7,
        },
        {
          title: "Understanding Global Conflict and Cooperation",
          author: "David A. Welch and Joseph S. Nye, Jr.",
          number: 8,
        },
      ],
    },
    {
      theme: "Digital Life & Privacy",
      books: [
        {
          title: "The Art of Invisibility",
          author: "Kevin Mitnick",
          number: 9,
        },
        {
          title: "Digital Minimalism",
          author: "Cal Newport",
          number: 10,
        },
      ],
    },
    {
      theme: "Memoir & Personal Reflections",
      books: [
        {
          title: "The Watching Brief",
          author: "Margaret Ng Ngoi Yee",
          number: 11,
        },
      ],
    },
  ],
} as const;
