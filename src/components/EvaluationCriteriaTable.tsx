import React from "react";

type Criteria = {
  name: string;
  percentage: number;
};

interface EvaluationCriteriaTableProps {
  criteria: Criteria[];
  onAdd?: () => void;
  onEdit?: (c: Criteria) => void;
  onDelete?: (c: Criteria) => void;
}

const EvaluationCriteriaTable: React.FC<EvaluationCriteriaTableProps> = ({
  criteria,
  onAdd,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-6">
      {/* Encabezado con título y botón */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Criterios de Evaluación
        </h2>
        <button
          onClick={onAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Añadir Criterio
        </button>
      </div>

      {/* Tabla */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <table className="min-w-full text-left text-sm text-gray-700">
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
            <tr>
              <th className="px-6 py-3">Criterio</th>
              <th className="px-6 py-3">Porcentaje</th>
              <th className="px-6 py-3 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {criteria.map((c, i) => (
              <tr
                key={i}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 font-medium">{c.name}</td>
                <td className="px-6 py-4">{c.percentage}%</td>
                <td className="px-6 py-4 text-right space-x-3">
                  <button
                    onClick={() => onEdit?.(c)}
                    className="text-blue-600 hover:underline"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete?.(c)}
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

export default EvaluationCriteriaTable;
