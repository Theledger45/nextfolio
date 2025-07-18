import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { TbMessages } from 'react-icons/tb';


export default function About() {
    return (
      <section id="about" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0A0D12] to-[#151921] pb-5">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-400/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-green-400/5 rounded-full blur-[100px] animate-pulse delay-1000" />
          <div className="absolute w-full h-32 bg-gradient-to-b from-[#0A0D12] to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Hero Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-20 lg:pt-32 mb-32">
            
            {/* Left Column - Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
              {/* Name and Title */} 
              <div className="space-y-4">
                <div className="inline-block">
                <h1 className="transition-all duration-1000 hover:tracking-wide text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight">
                    Dontre Quarles
                  </h1>
                  <div className="h-1.5 w-1/3 bg-gradient-to-r from-green-400 to-green-400/0 mt-2" />
                </div>
                <div className="relative inline-block">
                  <div className="text-xl lg:text-2xl text-gray-300 font-light">
                    Computer Science Student
                    <span className="block text-lg lg:text-xl text-gray-400">
                      at the University of Louisville
                    </span>
                  </div>
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-12 bg-green-400/20" />
                </div>
              </div>

              {/* Brief Introduction */}
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Passionate about creating impactful web experiences and solving real-world 
                problems through innovative technology solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                <a 
                  href="/resume.pdf"
                  className="group flex items-center gap-2 px-8 py-3 bg-green-400 hover:bg-green-500 text-black font-medium rounded-full transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  <span>View Resume</span>
                  <HiDownload className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                </a>
                <a 
                  href="#contact"
                  className="group flex items-center gap-2 px-8 py-3 border-2 border-green-400/50 hover:border-green-400 text-green-400 font-medium rounded-full transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  <span>Connect</span>
                  <TbMessages className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 justify-center lg:justify-start pt-2">
                <a 
                  href="https://www.linkedin.com/in/dontre-quarles-a549b924b/" 
                  className="group relative p-3 bg-[#151921] rounded-full hover:bg-[#1A1F28] transition-colors"
                >
                  <FaLinkedin className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" />
                  <span className="absolute inset-0 rounded-full border border-gray-700 group-hover:border-green-400/50 transition-colors" />
                </a>
                <a 
                  href="https://github.com/Theledger45" 
                  className="group relative p-3 bg-[#151921] rounded-full hover:bg-[#1A1F28] transition-colors"
                >
                  <FaGithub className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" />
                  <span className="absolute inset-0 rounded-full border border-gray-700 group-hover:border-green-400/50 transition-colors" />
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative w-64 h-64 lg:w-[340px] lg:h-[340px]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/20 to-transparent animate-pulse" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-green-400/20 p-1">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/assets/headshot.jpeg"
                        alt="Dontre Quarles"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        priority
                      />
                    </div>
                  </div>
                </div>
                
                {/* Status Indicator */}
                <div className="absolute bottom-4 -right-2 bg-[#151921] px-4 py-2 rounded-full border border-green-400/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400 animate-bounce" />
                    <span className="text-sm text-gray-300">Building startup, be right back.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Section with Creative Layout */}
          <div className="grid md:grid-cols-2 gap-16 items-center relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent blur-xl" />
            
            {/* Content Container */}
            <div className="space-y-10 relative">
              <div className="relative p-6 bg-[#151921]/50 rounded-xl border border-green-400/10 hover:border-green-400/30 transition-colors duration-300 backdrop-blur-sm">
                <h3 className="text-3xl font-semibold relative inline-block">
                  <span className="text-white">Hi, I&apos;m </span>
                  <span className="text-green-400">Dontre Quarles</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400/50" />
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mt-4">
                    I&apos;m a Computer Science student at the University of Louisville with a passion for creating dynamic web experiences. 
                    With a focus on front-end development, I specialize in tools such as React, Next.js, and WordPress. Previously, I worked as 
                     a Web Developer for BrandSurge, where I help clients bring their digital visions to life. Outside of coding, 
                    I&apos;m deeply involved in my community. I serve as the Services Vice President for the University&apos;s Student Government 
                    Association and as a member of the J.B. Speed School of Engineering Student Council. My leadership extends into Greek life, 
                    where I am a proud member of Phi Kappa Tau, holding the position of Head of Risk Management.
                    <br /><br />
                    When I&apos;m not coding or engaging in student activities, I enjoy staying fit, whether it&apos;s hitting the gym or 
                    participating in sports. I&apos;m also passionate about leveraging technology to solve real-world problems, as shown by 
                    my independent projects like developing a Twitter bot and designing this portfolio site from scratch.
                </p>

              </div>

              <div className="space-y-6 p-6 bg-[#151921]/50 rounded-xl border border-green-400/10 hover:border-green-400/30 transition-colors duration-300 backdrop-blur-sm">
  <h4 className="text-xl font-semibold text-white relative inline-block">
    A bit more about me
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400/50" />
  </h4>
  
  <p className="text-gray-300 text-lg leading-relaxed">
    Outside of coding, I&apos;m deeply involved in my community. I serve as the Services Vice President for the 
    University&apos;s Student Government Association and as a member of the J.B. Speed School of Engineering Student Council. 
    My leadership extends into Greek life, where I am a proud member of Phi Kappa Tau, holding the position of Head of Risk Management.
  </p>

  <p className="text-gray-300 text-lg leading-relaxed">
    My career aspirations center around leadership roles in the tech industry, particularly in the fields of software development 
    and project management. I aspire to become a Scrum Master or Product Manager in computer science-related fields, where I can utilize 
    my skills in organizing teams and driving projects to success. I am also passionate about artificial intelligence and aim to incorporate 
    this cutting-edge technology into my work, leveraging its potential to solve complex problems.
  </p>
  
  <p className="text-gray-300 text-lg leading-relaxed">
    After graduating in Fall 2025, I plan to further my education by pursuing a Master&apos;s in Computer Science and an MBA. 
    These degrees will provide me with the advanced technical skills and business acumen needed to excel in leadership positions within 
    the tech industry.
  </p>
  
  <p className="text-gray-300 text-lg leading-relaxed">
    Outside of my professional aspirations, fitness plays an important role in my life. I enjoy hitting the gym regularly to stay healthy, 
    and I&apos;m also actively involved in my fraternity, Phi Kappa Tau. These interests, along with my involvement in student government, 
    have helped me develop leadership skills that I look forward to applying in my future career.
  </p>
</div>

            </div>

            {/* Skills Section with Hover Effects */}
            <div className="space-y-10">
              <div className="p-6 bg-[#151921]/50 rounded-xl border border-green-400/10 hover:border-green-400/30 transition-colors duration-300 backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-white mb-3 relative inline-block">
                  Languages
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400/50" />
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['Python', 'HTML', 'CSS', 'C/C++', 'Javascript', 'TypeScript'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-[#151921] text-green-400 rounded-full border border-green-400/20 hover:border-green-400 hover:shadow-[0_0_15px_rgba(74,222,128,0.2)] transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
  
              <div className="p-6 bg-[#151921]/50 rounded-xl border border-green-400/10 hover:border-green-400/30 transition-colors duration-300 backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-white mb-3 relative inline-block">
                  Web Technologies
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400/50" />
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'React Native', 'Expo', 'Tailwind CSS', 'NativeWind', 'WordPress', 'Wix', 'Supabase', 'OpenAI API', 'Stripe API', 'Upstash Redis', 'Vercel'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-[#151921] text-green-400 rounded-full border border-green-400/20 hover:border-green-400 hover:shadow-[0_0_15px_rgba(74,222,128,0.2)] transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
  
              <div className="p-6 bg-[#151921]/50 rounded-xl border border-green-400/10 hover:border-green-400/30 transition-colors duration-300 backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-white mb-3 relative inline-block">
                  Database
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400/50" />
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['PostgreSQL', 'Prisma'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-[#151921] text-green-400 rounded-full border border-green-400/20 hover:border-green-400 hover:shadow-[0_0_15px_rgba(74,222,128,0.2)] transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}