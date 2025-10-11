import { useState } from "react";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import Message from "./message";
import TextArea from "./textArea";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "ia" }[]>([]);
  const [input, setInput] = useState("");
  const handleSend = () => {
    if (!input.trim()) return;

    // Agregar mensaje del usuario
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");

    // Simulación: Respuesta de la IA
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "Soy la IA respondiendo 🤖", sender: "ia" }]);
    }, 500);
  };

  return (
    <div>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 w-14 h-14 rounded-full
                   bg-blue-600 text-white flex items-center justify-center text-3xl shadow-lg hover:bg-blue-700 transition"
      >
        <IoChatbubbleOutline />
      </button>

     {isOpen && (
  <div className="fixed bottom-28 right-5 w-1/4 h-1/2 shadow-2xl rounded-xl border flex flex-col bg-white">
    
    {/* Header completo */}
    <div className="flex justify-between items-center px-4 py-4 bg-lightGray rounded-t-xl">
      <h2 className="text-lg font-bold">Asistente de Notas</h2>
      <button
        onClick={() => setIsOpen(false)}
        className="font-bold hover:text-red-500"        
      >
        ✕
      </button>
    </div>

    {/* Contenido mensajes */}
<div className="flex flex-col flex-1 overflow-y-auto p-2 text-darkBlue space-y-2">
  <Message text="Hola, ¿en qué puedo ayudarte?" sender="ia" />
  
  {messages.map((msg, index) => (
    <Message key={index} text={msg.text} sender={msg.sender} />
  ))}
</div>

    <hr className="w-full mb-1 border-gray-400" />

    {/* Input */}
    <div className="flex items-center p-4 bg-white rounded-lg shadow">
      <TextArea value={input} onChange={setInput} rows={1} disabled={false}/>
      <button className="bg-blue-600 text-white p-5 ml-2 rounded-xl hover:bg-blue-700" onClick={handleSend}>
        <FiSend/>
      </button>
    </div>
  </div>
)}

    </div>
  );
}
