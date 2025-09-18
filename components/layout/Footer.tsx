import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row md:justify-between">
        <div>
          <div className="font-bold">ALXListings</div>
          <div className="mt-2">
            © {new Date().getFullYear()} ALXListings. All rights reserved.
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
