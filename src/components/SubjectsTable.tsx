import React from "react";
import { FaEdit, FaRegTrashAlt, FaPlus } from "react-icons/fa";

interface Subject {
  name: string;
  teacher: string;
}

interface SubjectsTableProps {
  subjects: Subject[];
  onAdd: () => void;
  onEdit: (subject: Subject) => void;
  onDelete: (subject: Subject) => void;
}

const SubjectsTable: React.FC<SubjectsTableProps> = ({
  subjects,
  onAdd,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="min-h-screen min-w-screen p-6 bg-white shadow-md rounded-lg flex justify-center items-start p-8">
      <div className=" p-6 w-full max-w-6xl flex flex-col">
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Gestión de Materias
          </h2>
          <button
            onClick={onAdd}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
          >
            <FaPlus size={14} />
            Crear Materia
          </button>
        </div>

        <div className="overflow-y-auto max-h-[70vh] border rounded-lg">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 uppercase text-xs">
                <th className="px-6 py-3 font-medium">Nombre de Materia</th>
                <th className="px-6 py-3 font-medium">Profesor Asignado</th>
                <th className="px-6 py-3 font-medium text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, idx) => (
                <tr
                  key={idx}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-3 text-gray-800">{subject.name}</td>
                  <td className="px-6 py-3 text-gray-700">{subject.teacher}</td>
                  <td className="px-6 py-3 text-center">
                    <div className="flex justify-center items-center gap-3">
                      <button
                        onClick={() => onEdit(subject)}
                        className="text-gray-500 hover:text-blue-600 transition"
                      >
                        <FaEdit size={16} />
                      </button>
                      <button
                        onClick={() => onDelete(subject)}
                        className="text-gray-500 hover:text-red-600 transition"
                      >
                        <FaRegTrashAlt size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubjectsTable;
