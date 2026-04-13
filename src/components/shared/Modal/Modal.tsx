import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export default function Modal(props: ModalProps) {
    const { children, onClose } = props;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
            <div className="bg-white p-6 rounded shadow-lg relative min-w-[300px]">
                {onClose && (
                  <button
                    type="button"
                    className="absolute top-2 right-2 text-gray-500 text-2xl font-bold hover:text-gray-700 focus:outline-none"
                    onClick={onClose}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                )}
                {children}
            </div>
        </div>
    );
}