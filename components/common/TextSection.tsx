import React from "react";

const colors = [
  "bg-red-500 hover:bg-red-400",
  "bg-yellow-500 hover:bg-yellow-400",
  "bg-green-500 hover:bg-green-400",
];

const TextSection: React.FC<{
  title: string;
  subtitle: string;
  content: string;
}> = ({ title, subtitle, content }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-9xl mb-8">{title}</h1>
      <p className="text-2xl text-gray-300 mb-8">{subtitle}</p>
      <div className="border border-bar shadow-2xl max-w-2xl rounded-md bg-bar overflow-hidden">
        <nav className="bg-bar flex items-center py-1 px-2 rounded-t-md">
          {colors.map((color) => (
            <span
              key={color}
              className={`w-4 h-4 ${color} inline-block rounded-full mr-1 transition-colors duration-300`}
            />
          ))}
        </nav>
        <div className="p-6 italic bg-light-gray">{content}</div>
      </div>
    </div>
  );
};

export default TextSection;
