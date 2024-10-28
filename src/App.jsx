import { useState } from 'react';
import { Sun, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Skinform",
    description: "Live application for users to search products to determine if the product ingredients contain pore-clogging ingredients",
    tech: "Python • Flask • React • MongoDB • Webscraping • OpenAI API",
    image: "https://placehold.co/400x300/1a1a1a/ffffff" 
  },
  {
    title: "Automation System",
    description: "System automating product management and image generation for Lakeline Design",
    tech: "Python • Shopify API • Automation",
    image: "https://placehold.co/400x300/1a1a1a/ffffff"
  },
  {
    title: "StyleSyncAI",
    description: "Sophisticated AI-powered system that provides personalized beauty and fashion recommendations through computer vision and ML techniques",
    tech: "Python • Tensorflow • OpenCV • React",
    image: "https://placehold.co/400x300/1a1a1a/ffffff"
  },
  {
    title: "AuroraAlert",
    description: "Live application for users to search products to determine if the product ingredients contain pore-clogging ingredients",
    tech: "Python • Flask • React • MongoDB • Webscraping • OpenAI API",
    image: "https://placehold.co/400x300/1a1a1a/ffffff"
  },
  {
    title: "Automation System",
    description: "System automating product management and image generation for Lakeline Design",
    tech: "Python • Shopify API • Automation",
    image: "https://placehold.co/400x300/1a1a1a/ffffff"
  },
  {
    title: "Analysis of Sorting Algorithms",
    description: "Comparative analysis of various sorting algorithm efficiency in C++, Java, and Python",
    tech: "Research • C++ • Java • Python",
    image: "https://placehold.co/400x300/1a1a1a/ffffff"
  }
];

// Custom Icons Components remain the same
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

const SocialButton = ({ text, color, icon }) => (
  <button 
    className="flex items-center justify-center gap-3 px-8 py-3 rounded-lg border-2 font-medium text-white w-full"
    style={{ 
      borderColor: color,
    }}
  >
    {icon}
    <span className="text-lg text-white">{text}</span>
  </button>
);

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-24 py-20 max-w-7xl mx-auto">
        <span className="text-xl">EH</span>
        <div className="flex items-center gap-12">
          <a href="#experience" className="text-white hover:text-gray-300">Experience</a>
          <a href="#education" className="text-white hover:text-gray-300">Education</a>
          <a href="#projects" className="text-white hover:text-gray-300">Projects</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hover:opacity-80"
          >
            <Sun className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Hero/Landing Section with Fixed Gradient */}
      <section className="px-6 md:px-24 py-20 max-w-7xl mx-auto">
        <p className="text-xl mb-4">Hi, I'm</p>
        <h1 
          className="text-7xl font-bold mb-4"
          style={{
            background: 'linear-gradient(to right, #88EDFF, #006C80)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Emma Hoffmann
        </h1>
        <h2 className="text-2xl mb-6">
          Computer Science Student • Business Owner & Digital Artist
        </h2>
        <p className="text-lg max-w-3xl mb-12 text-gray-300">
          I'm a business owner, artist, designer, and technical lead at Lakeline Design, 
          and also a computer science student at St. Cloud State University. I enjoy 
          creating things that live on the internet, whether that be websites, 
          applications, or anything in between.
        </p>
        
        {/* Contact Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
          <SocialButton 
            text="Email" 
            color="#88EDFF"
            icon={<EmailIcon />}
          />
          <SocialButton 
            text="LinkedIn" 
            color="#55BDCF"
            icon={<LinkedInIcon />}
          />
          <SocialButton 
            text="Resume" 
            color="#329CAE"
            icon={<ResumeIcon />}
          />
          <SocialButton 
            text="Github" 
            color="#0C788B"
            icon={<GithubIcon />}
          />
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 md:px-24 py-20 max-w-7xl mx-auto border-t border-gray-800">
        <h2 className="text-2xl mb-8">EXPERIENCE</h2>
        <div className="space-y-12">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="text-2xl font-normal">Business Owner, Digital Artist, Designer, Technical Lead</h3>
              <h4 className="text-2xl font-normal italic">Lakeline Design</h4>
              <p style={{ color: '#55BDCF' }}>Cambridge, Minnesota</p>
              <ul className="space-y-2 mt-4 text-gray-300">
                <li>- Executed entire business operations: artwork creation, e-commerce platform administration, order fulfillment, and customer support, achieving over 3,000 sales, 300+ custom orders, and over 400 positive reviews</li>
                <li>- Developed customized e-commerce features that combined technical improvements with design enhancements to elevate user experience, reducing bounce rate by 40%.</li>
                <li>- Reduced bounce rate by 40% through extensive code development and e-commerce enhancements</li>
              </ul>
            </div>
            <span className="text-gray-400">March 2020 - Present</span>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-6 md:px-24 py-20 max-w-7xl mx-auto border-t border-gray-800">
        <h2 className="text-2xl mb-8">EDUCATION</h2>
        <div className="space-y-12">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="text-2xl font-normal">St. Cloud State University</h3>
              <p style={{ color: '#55BDCF' }}>St. Cloud, Minnesota</p>
              <p className="text-gray-300">Bachelor of Science in Computer Science</p>
              <ul className="space-y-2 mt-4 text-gray-300">
                <li>- 4.0 GPA | Dean's List</li>
                <li>- Awarded $8,000+ scholarships by SCSU for academic excellence and leadership</li>
                <li>- SCSU Computer Science Club</li>
              </ul>
            </div>
            <span className="text-gray-400">2023 - 2025</span>
          </div>

          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="text-2xl font-normal">Anoka-Ramsey Community College</h3>
              <p style={{ color: '#55BDCF' }}>Coon Rapids, Minnesota</p>
              <p className="text-gray-300">Associate of Science in Computer Science</p>
            </div>
            <span className="text-gray-400">2021 - 2023</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 md:px-24 py-20 max-w-7xl mx-auto border-t border-gray-800">
        <h2 className="text-2xl mb-12">TECHNICAL PROJECTS</h2>
        <div className="grid grid-cols-3 gap-8 mb-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              buttonColor={
                index % 3 === 0 ? '#88EDFF' : 
                index % 3 === 1 ? '#38A2B4' : 
                '#026E81'
              }
              techColor={
                index % 3 === 0 ? '#88EDFF' : 
                index % 3 === 1 ? '#38A2B4' : 
                '#026E81'
              }
            />
          ))}
        </div>

        {/* See All Projects Button */}
        <div className="flex justify-center mt-12">
          <button 
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg border-2 font-medium w-full max-w-md"
            style={{
              background: 'black',
              border: '2px solid transparent',
              borderRadius: '8px',
              backgroundImage: 'linear-gradient(black, black), linear-gradient(to right, #56BED0, #339DAF, #127E91)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
          >
            <GithubIcon className="text-white" /> 
            <span className="text-white">SEE ALL PROJECTS</span>
          </button>
        </div>
      </section>
    </div>
  );
}

const ProjectCard = ({ title, description, tech, image, buttonColor, techColor }) => (
  <div className="space-y-4">
    <img src={image} alt={title} className="w-full rounded-lg" />
    <h3 className="text-2xl font-normal mt-4">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    <p className="text-white text-sm">{tech}</p>
    <button 
      className="flex items-center gap-2 px-6 py-2 rounded-lg border-2 hover:bg-opacity-10 transition-all font-medium text-white"
      style={{ 
        borderColor: buttonColor
      }}
    >
      <ExternalLink size={16} /> Live demo
    </button>
  </div>
);