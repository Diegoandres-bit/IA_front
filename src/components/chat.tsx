import { useState } from "react";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { Message } from "./message";
import { TextArea } from "./TextArea";
import api from "../api/api";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "ia" }[]
  >([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const res = await api.post(
      "/query",
      { consulta: input },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(res);

    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");
    if (res.data.data.tool === "GetAllStudents") {
      const respuesta = formatearEstudiantes(
        res?.data?.data.result.data?.result
      );
      setMessages((prev) => [...prev, { text: respuesta, sender: "ia" }]);
      return;
    } else if (res.data.data.tool === "CheckSubjectStatus") {
      const respuesta = formatearResultadoEstado(res?.data?.data.result);
      setMessages((prev) => [...prev, { text: respuesta, sender: "ia" }]);
      return;
    } else {
      setMessages((prev) => [
        ...prev,
        { text: res?.data?.data?.result?.data, sender: "ia" },
      ]);
    }
  };

  function formatearEstudiantes(data: any) {
    let resultado = "";

    data.forEach((estudiante: any) => {
      resultado += `👩‍🎓 *${estudiante.estudiante}* (${estudiante.codigo_estudiante})\n`;
      resultado += `🏫 Facultad: ${estudiante.facultad}\n`;

      estudiante.semestres.forEach((sem: any) => {
        resultado += `\n📚 *Semestre ${sem.semestre}*\n`;

        sem.materias.forEach((mat: any) => {
          resultado += `- Materia: *${mat.nombre}*\n`;
          resultado += `  Nota final materia: ${mat.nota_final_materia}\n`;

          mat.cortes.forEach((corte: any) => {
            resultado += `  🧮 Corte ${corte.corte} (${corte.ponderacion_corte}%): ${corte.nota_final_corte}\n`;

            if (corte.notas && corte.notas.length > 0) {
              corte.notas.forEach((nota: any) => {
                resultado += `     - ${nota.tipo}: ${nota.valor} (${nota.ponderacion}%)\n`;
              });
            }
          });

          resultado += "\n";
        });
      });

      resultado += `\n${"=".repeat(40)}\n\n`;
    });

    return resultado.trim();
  }
  function formatearResultadoEstado(data: any) {
    if (!data) {
      return "No se encontraron resultados para mostrar.";
    }

    const obtenerConsejo = (nota: any) => {
      if (nota >= 90)
        return "🌟 ¡Excelente trabajo! Sigue así, tu esfuerzo está dando grandes resultados.";
      if (nota >= 80)
        return "💪 Muy buen desempeño, solo un poco más de práctica y alcanzarás la excelencia.";
      if (nota >= 70)
        return "👍 Vas bien, pero aún puedes mejorar. Revisa los temas donde obtuviste menor puntuación.";
      if (nota >= 60)
        return "⚠ Necesitas reforzar algunos conceptos. Dedica más tiempo al estudio y pide apoyo si lo necesitas.";
      return "❌ No lograste el resultado esperado. No te desanimes, repasa el material y busca orientación para mejorar.";
    };

    let resultado = "📋 Resultados académicos\n\n";

    data.forEach((item: any) => {
      resultado += `👩‍🎓 *Código:* ${item.codigo_estudiante}\n`;
      resultado += `📘 *Materia:* ${item.materia}\n`;
      resultado += `🧾 *Nota final:* ${item.nota_final}\n`;
      resultado += ` 📊 *Estado:* ${item.estado}\n`;
      resultado += `💬 ${item.mensaje}\n`;
      resultado += `💡 Consejo: ${obtenerConsejo(item.nota_final)}\n`;
      resultado += `\n${"=".repeat(40)}\n\n`;
    });

    return resultado.trim();
  }

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
            <TextArea
              value={input}
              onChange={setInput}
              rows={1}
              disabled={false}
            />
            <button
              className="bg-blue-600 text-white p-5 ml-2 rounded-xl hover:bg-blue-700"
              onClick={handleSend}
            >
              <FiSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
