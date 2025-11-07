import React from "react";

interface textAreaProps {
    value: string;
    onChange: (newValue: string) => void;
    disabled?: boolean;
    rows?: number;
}

export const TextArea: React.FC<textAreaProps> = ({ value, onChange, disabled,rows }) => {
    return (
        <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}            
            disabled={disabled}
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Type your message..."
            rows={rows}
        />
    );
}
