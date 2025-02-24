import { Github, Mail, User, Linkedin } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Portfolio</h1>
        
        <div className="flex gap-6">
          <a href="#about" className="text-white hover:text-teal-400 transition-colors">
            <User className="w-6 h-6" />
          </a>
          <a href="https://github.com/bharat3645" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/bharat-singh-parihar/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:bharat3645@gmail.com" className="text-white hover:text-rose-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
}