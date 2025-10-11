interface InputProps {
    value: string;
    onChange: (newValue: string) => void;
    disabled?: boolean;
}

const InputText: React.FC<InputProps> = ({ value, onChange, disabled }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}            
            disabled={disabled}
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
        />
    );
}

export default InputText;