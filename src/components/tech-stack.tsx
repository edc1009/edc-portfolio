"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Grid3X3, ArrowLeft } from "lucide-react";

interface TechStackProps {
  delay?: number;
}

interface TechItem {
  name: string;
  logo: string;
}

interface TechCategory {
  category: string;
  subcategories?: {
    name: string;
    items: TechItem[];
  }[];
  items?: TechItem[];
}

const techCategories: TechCategory[] = [
  {
    category: "Programming & Development",
    subcategories: [
      {
        name: "Languages",
        items: [
          { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
          { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
          { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
          { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        ]
      },
      {
        name: "Frameworks & Libraries",
        items: [
          { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" },
          { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
          { name: "Three.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
          { name: "shadcn/ui", logo: "https://ui.shadcn.com/favicon.ico" },
          { name: "Framer Motion", logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
        ]
      }
    ]
  },
  {
    category: "Data & Analytics",
    subcategories: [
      {
        name: "Analytics & BI Tools",
        items: [
          { name: "Tableau", logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
          { name: "DOMO", logo: "https://www.domo.com/assets/images/brand/domo-logo.svg" },
          { name: "Google Analytics", logo: "https://www.google.com/analytics/static/img/analytics-logo.svg" },
          { name: "Excel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
        ]
      },
      {
        name: "Data Platforms",
        items: [
          { name: "Snowflake", logo: "https://logos-world.net/wp-content/uploads/2022/11/Snowflake-Symbol.png" },
          { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
          { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
          { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
          { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        ]
      }
    ]
  },
  {
    category: "Product Management & Business Tools",
    subcategories: [
      {
        name: "Project Management",
        items: [
          { name: "JIRA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
          { name: "FocalPoint", logo: "https://www.planview.com/wp-content/uploads/2019/01/planview-logo.svg" },
          { name: "Workfront", logo: "https://workfront.azureedge.net/content/dam/one-workfront/logos/wf-header-logo.svg" },
        ]
      },
      {
        name: "CRM & Sales",
        items: [
          { name: "Salesforce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" },
          { name: "Veeva", logo: "https://www.veeva.com/wp-content/uploads/2019/01/veeva-logo.svg" },
        ]
      },
      {
        name: "Design & Productivity",
        items: [
          { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
          { name: "Microsoft Office", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
        ]
      }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" },
      { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ]
  }
];

// Flatten all items for the scrolling marquee
const allTechItems: TechItem[] = techCategories.flatMap(category => 
  category.subcategories 
    ? category.subcategories.flatMap(sub => sub.items)
    : category.items || []
);

const TechItem = ({ tech, showName = false }: { tech: TechItem; showName?: boolean }) => {
  return (
    <div className={`flex ${showName ? 'flex-col' : ''} items-center justify-center ${showName ? 'p-4' : 'mx-6'} group`}>
      <div className={`relative ${showName ? 'w-16 h-16' : 'w-12 h-12'} transition-all duration-300 group-hover:scale-110 opacity-70 hover:opacity-100`}>
        <Image
          src={tech.logo}
          alt={`${tech.name} logo`}
          fill
          className="object-contain filter transition-all duration-300"
          unoptimized
        />
      </div>
      {showName && (
        <span className="text-xs font-medium text-muted-foreground text-center mt-2 whitespace-nowrap">
          {tech.name}
        </span>
      )}
    </div>
  );
};

export const TechStack = ({ delay = 0 }: TechStackProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
      },
    },
  };

  // Duplicate the tech stack for seamless infinite scroll
  const duplicatedTechStack = [...allTechItems, ...allTechItems];

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="space-y-content-md"
    >
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Tech Stack.
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Technologies and tools I work with to build innovative solutions.
          </p>
        </div>
      </div>

      {!showAll ? (
        <>
          {/* Elegant scrolling logos */}
          <div className="relative w-full overflow-hidden py-8">
            {/* Subtle gradient overlays */}
            <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background via-background/80 to-transparent" />
            <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background via-background/80 to-transparent" />
            
            {/* Floating logos */}
            <motion.div
              className="flex items-center"
              animate={{
                x: [0, -50 + "%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 45,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTechStack.map((tech, index) => (
                <TechItem key={`${tech.name}-${index}`} tech={tech} />
              ))}
            </motion.div>
          </div>
          
          {/* Icon-only Show All Button */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowAll(true)}
              className="h-10 w-10"
              title="Show all technologies"
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
          </div>
        </>
      ) : (
        <>
          {/* Organized category view */}
          <div className="max-w-6xl mx-auto py-8 space-y-12">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-center text-foreground">
                  {category.category}
                </h3>
                
                {category.subcategories ? (
                  <div className="space-y-8">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <div key={subcategory.name} className="space-y-4">
                        <h4 className="text-lg font-semibold text-muted-foreground text-center">
                          {subcategory.name}
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                          {subcategory.items.map((tech, techIndex) => (
                            <motion.div
                              key={tech.name}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: (categoryIndex * 0.1) + (subIndex * 0.05) + (techIndex * 0.03) }}
                            >
                              <TechItem tech={tech} showName={true} />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                    {category.items?.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (categoryIndex * 0.1) + (techIndex * 0.03) }}
                      >
                        <TechItem tech={tech} showName={true} />
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Icon-only Back Button */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowAll(false)}
              className="h-10 w-10"
              title="Back to scrolling view"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </div>
        </>
      )}
    </motion.div>
  );
};