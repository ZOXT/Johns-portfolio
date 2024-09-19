import React from 'react'
import { socialLinks } from '../socialLinks'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
              >
                <span className="sr-only">{link.name}</span>
                <Icon className="h-6 w-6" />
              </a>
            );
          })}
        </div>
        <p className="text-center">&copy; 2024 John Lusch. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer