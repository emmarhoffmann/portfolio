import { useState } from 'react';
import { Sun, ExternalLink } from 'lucide-react';

// Color sets for dark and light modes
const colors = {
  dark: {
    primary: '#88EDFF',
    secondary: '#55BDCF',
    tertiary: '#38A2B4',
    quaternary: '#026E81'
  },
  light: {
    primary: '#55BDCF',
    secondary: '#329CAE',
    tertiary: '#0C788B',
    quaternary: '#006C80'
  }
};

const projects = [
  {
    title: "Skinform",
    description: "Live application for users to search products to determine if the product ingredients contain pore-clogging ingredients",
    tech: "Python • Flask • React • MongoDB • Webscraping • OpenAI API",
    image: "/skinform.jpg", 
    liveDemo: "https://skinform.vercel.app/",
    github: "https://github.com/emmarhoffmann/skinform"
  },
  {
    title: "Automation System",
    description: "Co-developed by Emma Hoffmann and Blake Norman, this system automates product management and image processing for Lakeline Design on Etsy and Shopify",
    tech: "Python • Shopify API • Automation • Image Processing",
    image: "/AutomationSystem.jpg",
    github: "https://github.com/emmarhoffmann/Lakeline-Design-Automation-System"
  },
  {
    title: "StyleSyncAI",
    description: "Sophisticated AI-powered system that provides personalized beauty and fashion recommendations through computer vision and ML techniques",
    tech: "Python • Tensorflow • OpenCV • React",
    image: "/StyleSyncAI.JPG",
    github: "https://github.com/emmarhoffmann/StyleSyncAI"
  },
  {
    title: "Aurora Alert",
    description: "Automated Python application that monitors and alerts users to potential aurora borealis sightings based on real-time geomagnetic activity",
    tech: "Python • Webscraping • API Integration • Automation",
    image: "/AuroraAlert.png",
    github: "https://github.com/emmarhoffmann/AuroraAlert"
  },
  {
    title: "Star Sort",
    description: "A multi-model machine learning project achieving up to 100% accuracy in classifying star types based on their attributes using five different algorithms.",
    tech: "Python • scikit-learn • Machine Learning • Data Analysis • Modeling",
    image: "/StarSort.jpg",
    github: "https://github.com/emmarhoffmann/StarSort"
  },
  {
    title: "Sorting Algorithms Analysis",
    description: "Comparative analysis of the efficiency of five sorting algorithms tested in C++, Java, and Python to evaluate performance",
    tech: "C++ • Java • Python • Algorithm Efficiency • Research",
    image: "/SortingAlgorithmsAnalysis.png",
    github: "https://github.com/emmarhoffmann/Comparative-Analysis-of-Sorting-Algorithm-Efficiency"
  }
];

const LinkIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
  </svg>
);

const ResumeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2A10 10 0 0 0 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
  </svg>
);

const SocialButton = ({ text, color, icon, textColor, onClick }) => (
  <button 
    onClick={onClick}
    className="flex items-center justify-center gap-3 px-8 py-3 rounded-lg border-2 font-medium"
    style={{ 
      borderColor: color,
      color: textColor
    }}
  >
    {icon}
    <span className="text-lg">{text}</span>
  </button>
);

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const currentColors = darkMode ? colors.dark : colors.light;

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-24 py-10 max-w-7xl mx-auto">
        <span className="text-xl">EH</span>
        <div className="flex items-center gap-12">
          <a href="#experience" className={`${darkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}>Experience</a>
          <a href="#education" className={`${darkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}>Education</a>
          <a href="#projects" className={`${darkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}>Projects</a>
          <a href="#contact" className={`${darkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}>Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hover:opacity-80"
          >
            <Sun className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Hero/Landing Section */}
      <section className="px-6 md:px-24 py-20 max-w-7xl mx-auto">
        <p className="text-2xl mb-6">Hi, I'm</p>
        <h1 
          className="text-[120px] font-bold mb-12 tracking-wide"
          style={{
            background: 'linear-gradient(to right, #6FD5E7, #006C80)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.1'
          }}
        >
          Emma Hoffmann
        </h1>
        <h2 className="text-4xl font-light mb-12 tracking-wide max-w-7xl">
          Computer Science Student • Business Owner & Digital Artist
        </h2>
        <p className={`text-xl font-light mb-16 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          I'm a business owner, artist, designer, and technical lead at Lakeline Design, 
          and also a computer science student at St. Cloud State University. I love bringing creative and technical 
          concepts to life in the digital space, from innovative tools to practical solutions, where I can 
          continuously learn, tackle complex challenges, and make a real impact.
        </p>
        
        {/* Contact Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
          <SocialButton 
            text="Email" 
            color={currentColors.primary}
            icon={<EmailIcon />}
            textColor={darkMode ? "white" : "black"}
            onClick={() => window.location.href = 'mailto:erhoffmann@gmail.com'}
          />
          <SocialButton 
            text="LinkedIn" 
            color={currentColors.secondary}
            icon={<LinkedInIcon />}
            textColor={darkMode ? "white" : "black"}
            onClick={() => window.open('https://www.linkedin.com/in/emmarhoffmann/', '_blank')}
          />
          <SocialButton 
            text="Resume" 
            color={currentColors.tertiary}
            icon={<ResumeIcon />}
            textColor={darkMode ? "white" : "black"}
            onClick={() => window.open('/portfolio/assets/Emma-Hoffmann-Resume.pdf', '_blank')}
          />
          <SocialButton 
            text="Github" 
            color={currentColors.quaternary}
            icon={<GithubIcon />}
            textColor={darkMode ? "white" : "black"}
            onClick={() => window.open('https://github.com/emmarhoffmann', '_blank')}
          />
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className={`px-6 md:px-24 py-20 max-w-7xl mx-auto border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <h2 className={`text-2xl mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>EXPERIENCE</h2>
        <div className="space-y-12">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className={`text-2xl font-normal ${darkMode ? 'text-white' : 'text-black'}`}>
                Business Owner, Digital Artist, Designer, Technical Lead
              </h3>
              <h4 className={`text-2xl font-normal italic ${darkMode ? 'text-white' : 'text-black'}`}>
                Lakeline Design
              </h4>
              <p style={{ color: currentColors.secondary }}>Cambridge, Minnesota</p>
              <ul className={`space-y-2 mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>- Executed entire business operations: artwork creation, e-commerce platform administration, order fulfillment, and customer support, achieving over 3,000 sales, 300+ custom orders, and over 400 positive reviews</li>
                <li>- Developed customized e-commerce features that combined technical improvements with design enhancements to elevate user experience, reducing bounce rate by 40%.</li>
                <li>- Reduced bounce rate by 40% through extensive code development and e-commerce enhancements</li>
              </ul>
            </div>
            <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>2020 - Present</span>
          </div>
        </div>
      </section>

{/* Education Section */}
<section id="education" className={`px-6 md:px-24 py-20 max-w-7xl mx-auto border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
       <h2 className={`text-2xl mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>EDUCATION</h2>
       <div className="space-y-12">
         <div className="flex justify-between items-start">
           <div className="space-y-1">
             <h3 className={`text-2xl font-normal ${darkMode ? 'text-white' : 'text-black'}`}>
               St. Cloud State University
             </h3>
             <p style={{ color: currentColors.secondary }}>St. Cloud, Minnesota</p>
             <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
               Bachelor of Science in Computer Science
             </p>
             <ul className={`space-y-2 mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
               <li>- 4.0 GPA | Dean's List</li>
               <li>- Awarded $8,000+ scholarships by SCSU for academic excellence and leadership</li>
               <li>- SCSU Computer Science Club</li>
             </ul>
           </div>
           <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>2023 - 2025</span>
         </div>

         <div className="flex justify-between items-start">
           <div className="space-y-1">
             <h3 className={`text-2xl font-normal ${darkMode ? 'text-white' : 'text-black'}`}>
               Anoka-Ramsey Community College
             </h3>
             <p style={{ color: currentColors.secondary }}>Coon Rapids, Minnesota</p>
             <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
               Associate of Science in Computer Science
             </p>
           </div>
           <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>2021 - 2023</span>
         </div>
       </div>
     </section>

     {/* Projects Section */}
     <section id="projects" className={`px-6 md:px-24 py-20 max-w-7xl mx-auto border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
       <h2 className={`text-2xl mb-12 ${darkMode ? 'text-white' : 'text-black'}`}>TECHNICAL PROJECTS</h2>
       <div className="grid grid-cols-3 gap-8 mb-8">
         {projects.map((project, index) => {
           const columnColor = darkMode ?
             (index % 3 === 0 ? colors.dark.primary : 
              index % 3 === 1 ? colors.dark.tertiary : 
              colors.dark.quaternary) :
             (index % 3 === 0 ? colors.light.primary : 
              index % 3 === 1 ? colors.light.tertiary : 
              colors.light.quaternary);
           
           return (
             <ProjectCard 
               key={index} 
               {...project} 
               buttonColor={columnColor}
               techColor={columnColor}
               darkMode={darkMode}
             />
           );
         })}
       </div>

       {/* See All Projects Button */}
       <div className="flex justify-center mt-12">
         <a 
           href="https://github.com/emmarhoffmann?tab=repositories"
           target="_blank"
           rel="noopener noreferrer"
           className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg border-2 font-medium w-full max-w-md"
           style={{
             border: '2px solid transparent',
             borderRadius: '8px',
             backgroundImage: darkMode 
               ? `linear-gradient(black, black), linear-gradient(to right, ${colors.dark.secondary}, ${colors.dark.tertiary}, ${colors.dark.quaternary})` 
               : `linear-gradient(white, white), linear-gradient(to right, ${colors.light.secondary}, ${colors.light.tertiary}, ${colors.light.quaternary})`,
             backgroundOrigin: 'border-box',
             backgroundClip: 'padding-box, border-box'
           }}
         >
           <GithubIcon className={darkMode ? "text-white" : "text-black"} /> 
           <span className={darkMode ? "text-white" : "text-black"}>SEE ALL PROJECTS</span>
         </a>
       </div>
     </section>

     {/* Contact Section */}
     <section id="contact" className={`px-6 md:px-24 py-20 max-w-7xl mx-auto border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
       <h2 className={`text-2xl mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>CONTACT</h2>
       <div className="max-w-2xl">
         <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
           Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
         </p>
         <div className="flex flex-col md:flex-row gap-4">
           <a href="mailto:erhoffmann@gmail.com">
             <SocialButton 
               text="Send me an email" 
               color={currentColors.primary}
               icon={<EmailIcon />}
               textColor={darkMode ? "white" : "black"}
             />
           </a>
           <a href="https://www.linkedin.com/in/emmarhoffmann/" target="_blank" rel="noopener noreferrer">
             <SocialButton 
               text="Connect with me on LinkedIn" 
               color={currentColors.secondary}
               icon={<LinkedInIcon />}
               textColor={darkMode ? "white" : "black"}
             />
           </a>
         </div>
       </div>
     </section>
   </div>
 );
}

const ProjectCard = ({ title, description, tech, image, buttonColor, techColor, darkMode, liveDemo, github }) => (
 <div className="space-y-4">
   <img 
     src={image} 
     alt={title} 
     className="w-full rounded-lg" 
     style={{
       border: `1px solid ${darkMode ? '#4a4a4a' : '#d1d1d1'}`
     }}
   />
   <h3 className={`text-2xl font-normal mt-4 ${darkMode ? 'text-white' : 'text-black'}`}>
     {title}
   </h3>
   <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
     {description}
   </p>
   <p style={{ color: techColor }} className="text-sm">
     {tech}
   </p>
   <div className="flex flex-col space-y-2">
     {liveDemo && (
       <a 
         href={liveDemo}
         target="_blank"
         rel="noopener noreferrer"
         className={`inline-flex items-center gap-2 px-6 py-2 rounded-lg border-2 hover:bg-opacity-10 transition-all font-medium ${darkMode ? 'text-white' : 'text-black'} w-fit`}
         style={{ borderColor: buttonColor }}
       >
         <LinkIcon /> Live Demo
       </a>
     )}
     {github && (
       <a 
         href={github}
         target="_blank"
         rel="noopener noreferrer"
         className={`inline-flex items-center gap-2 px-6 py-2 rounded-lg border-2 hover:bg-opacity-10 transition-all font-medium ${darkMode ? 'text-white' : 'text-black'} w-fit`}
         style={{ borderColor: buttonColor }}
       >
         <GithubIcon /> View Project
       </a>
     )}
   </div>
 </div>
);