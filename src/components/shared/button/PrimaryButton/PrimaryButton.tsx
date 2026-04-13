'use client';
import React, { useState } from "react";
import Modal from "@/components/shared/Modal/Modal";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  modalKey?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className = "",
  modalKey,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (modalKey) {
      setOpen(true);
    }
    if (props.onClick) props.onClick(e);
  };

  return (
    <>
      <button
        className={`px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        {...props}
        onClick={handleClick}
      >
        {children}
      </button>
      {open && modalKey === "searchUser" && (
        <Modal onClose={() => setOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Enter Customer&apos;s CIF Number</h2>
          <input
            type="number"
            placeholder="Enter Mobile No/ LAN Number/ Customer ID"
            className="border rounded px-3 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="mt-4 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full"
            onClick={() => setOpen(false)}
          >
            Submit
          </button>
        </Modal>
      )}
    </>
  );
};

export default PrimaryButton;
