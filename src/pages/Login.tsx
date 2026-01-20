import { StrictMode, useState } from "react";
import { RiGraduationCapLine } from "react-icons/ri";
import "../index.css";
import { InputText } from "../components/inputText";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="border border-gray-300 p-12 rounded-lg bg-white shadow-md">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <RiGraduationCapLine className="text-6xl text-blue-500" />
          <span className="text-3xl font-bold text-gray-700">EAM</span>
        </div>
        <h1 className="text-4xl font-semibold mb-6 text-center text-gray-800">
          Iniciar Sesión
        </h1>
        <h2 className="text-lg mb-4 text-gray-500 text-center">
          Accede a tu cuenta para continuar
        </h2>
        <InputText
          value={username}
          onChange={setUsername}
          type="text"
          placeholder="Correo Electrónico"
        />
        <br></br>
        <br></br>

        <InputText
          value={password}
          onChange={setPassword}
          type="password"
          placeholder="Contraseña"
        />
        <button className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          Iniciar Sesion
        </button>
        <a
          href="#"
          className="text-blue-500 hover:text-blue-700 font-medium transition-colors"
        >
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </div>
  );
}
