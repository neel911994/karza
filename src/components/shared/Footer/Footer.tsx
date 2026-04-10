import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="w-full h-16 text-center py-4 mt-auto"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <span className="text-gray-700">Copyright @ GFL {year}</span>
    </footer>
  );
};

export default Footer;
