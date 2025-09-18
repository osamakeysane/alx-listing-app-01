// components/common/Pill.tsx
import React from "react";

type PillProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 border rounded-full text-sm whitespace-nowrap ${
        active
          ? "bg-indigo-600 text-white border-indigo-600"
          : "bg-white text-gray-700 border-gray-200"
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;
