import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-4">Created by: Mirzaboyev Azamat</p>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm">
            Phone: <a href="tel:+998936048811" className="text-green-400 hover:underline">+998 93 604 88 11</a>
          </p>
          <p className="text-sm">
            Email: <a href="mailto:snake_klon_88@mail.ru" className="text-blue-400 hover:underline">snake_klon_88@mail.ru</a>
          </p>
          <p className="text-sm">
            GitHub: <a href="https://github.com/mirzaboyev" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">github.com/mirzaboyev</a>
          </p>
        </div>
        <p className="text-xs mt-4 text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
