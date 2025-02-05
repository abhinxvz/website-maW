import React from 'react';
import { monoFont } from '../styles/fonts/fonts';
import { Mail, Twitter, Github, Code, Youtube } from 'lucide-react'; 

const Hero = () => {
  return (
    <div className={`${monoFont.className}`}>
      {/* Main Heading */}
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Hey, I am Abhinav!
      </h1>

      {/* Smaller Description */}
      <p className="text-lg text-muted-foreground dark:text-gray-300 mb-4">
        A self-taught web developer who loves making things.
      </p>

      {/* Social Icons */}
      <div className="flex space-x-4">
        <a href="https://x.com/ishowr4ge" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
          <Twitter size={20} />
        </a>
        <a href="mailto:your-abhinxv18@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-red-500">
          <Mail size={20} />
        </a>
        <a href="https://github.com/abhinxvz" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black">
          <Github size={20} />
        </a>
        <a href="https://leetcode.com/u/abhinxvz/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">
          <Code size={20} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
