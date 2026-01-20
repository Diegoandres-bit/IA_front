import React from "react";

type Grade = {
  student: string;
  criterion: string;
  grade: number;
};

interface GradesTableProps {
  grades: Grade[];
  onAdd?: () => void;
  onEdit?: (g: Grade) => void;
  onDelete?: (g: Grade) => void;
}

const GradesTable: React.FC<GradesTableProps> = ({
  grades,
  onAdd,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-6">
      {/* Encabezado con título y botón */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Notas</h2>
        <button
          onClick={onAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Añadir Nota
        </button>
      </div>

      {/* Tabla */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <table className="min-w-full text-left text-sm text-gray-700">
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
            <tr>
              <th className="px-6 py-3">Estudiante</th>
              <th className="px-6 py-3">Criterio</th>
              <th className="px-6 py-3">Nota</th>
              <th className="px-6 py-3 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((g, i) => (
              <tr
                key={i}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 font-medium">{g.student}</td>
                <td className="px-6 py-4">{g.criterion}</td>
                <td className="px-6 py-4">{g.grade}</td>
                <td className="px-6 py-4 text-right space-x-3">
                  <button
                    onClick={() => onEdit?.(g)}
                    className="text-blue-600 hover:underline"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete?.(g)}
                    className="text-red-600 hover:underline"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradesTable;
