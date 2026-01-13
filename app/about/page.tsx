'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-white">About Me</h1>
          <p className="text-2xl text-zinc-400">
            UX/UI Designer passionate about creating meaningful digital experiences
          </p>
        </div>

        {/* Bio Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6 text-white">Hi, I'm Zeamanuel</h2>
          <div className="space-y-4 text-lg text-zinc-300 leading-relaxed">
            <p>
              I'm a UX/UI Designer based in Addis Ababa, Ethiopia, with a passion for creating
              intuitive and beautiful digital experiences. I specialize in designing products
              that solve real problems for users across Africa and beyond.
            </p>
            <p>
              With expertise in user research, interaction design, and visual design, I help
              businesses transform complex challenges into simple, elegant solutions. My work
              spans from enterprise dashboards to consumer mobile applications.
            </p>
            <p>
              Currently, I'm teaching UX/UI design at Addis Ababa University while also taking
              on select freelance projects. I'm particularly interested in working on products
              that have social impact and improve people's lives.
            </p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6 text-white">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent-teal">Design</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• User Research & Testing</li>
                <li>• Wireframing & Prototyping</li>
                <li>• Interface Design</li>
                <li>• Design Systems</li>
                <li>• Interaction Design</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent-purple">Tools</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Figma</li>
                <li>• Adobe XD</li>
                <li>• Sketch</li>
                <li>• Principle</li>
                <li>• HTML/CSS (Basic)</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6 text-white">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-accent-teal pl-6">
              <h3 className="text-xl font-semibold text-white">UX/UI Design Instructor</h3>
              <p className="text-accent-teal mb-2">Addis Ababa University • 2023 - Present</p>
              <p className="text-zinc-300">
                Teaching user experience and interface design principles to undergraduate students.
                Developing curriculum and mentoring the next generation of Ethiopian designers.
              </p>
            </div>

            <div className="border-l-2 border-accent-purple pl-6">
              <h3 className="text-xl font-semibold text-white">Freelance UX/UI Designer</h3>
              <p className="text-accent-purple mb-2">Self-Employed • 2020 - Present</p>
              <p className="text-zinc-300">
                Working with startups and established businesses to design digital products.
                Projects include e-commerce platforms, financial apps, and SaaS dashboards.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-zinc-800 pt-12"
        >
          <h2 className="text-3xl font-semibold mb-6 text-white">Get in Touch</h2>
          <p className="text-lg text-zinc-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be
            part of your vision. Feel free to reach out!
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:zeamanuel@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-accent-teal text-white rounded-lg hover:bg-accent-teal/80 transition-colors"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          <div className="flex gap-6 mt-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-accent-blue transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
