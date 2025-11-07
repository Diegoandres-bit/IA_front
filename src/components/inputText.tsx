interface InputProps {
    value: string;
    onChange: (newValue: string) => void;
    disabled?: boolean;
    placeholder?: string;
    type?: string;
}

export const InputText: React.FC<InputProps> = ({ value, onChange, disabled,placeholder,type }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}            
            disabled={disabled}
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={placeholder}
        />
    );
}
