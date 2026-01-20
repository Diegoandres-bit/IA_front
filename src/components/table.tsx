import React from "react";

type Student = {
  name: string;
  email: string;
};

interface StudentTableProps {
  students: Student[];
  onEdit?: (student: Student) => void;
  onDelete?: (student: Student) => void;
}

const StudentTable: React.FC<StudentTableProps> = ({ students, onEdit, onDelete }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <table className="min-w-full text-left text-sm text-gray-700">
        <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
          <tr>
            <th className="px-6 py-3">Nombre del Estudiante</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3 text-right">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr
              key={index}
              className="border-t hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-4 font-medium">{student.name}</td>
              <td className="px-6 py-4">{student.email}</td>
              <td className="px-6 py-4 text-right space-x-3">
                <button
                  onClick={() => onEdit?.(student)}
                  className="text-blue-600 hover:underline"
                >
                  Editar
                </button>
                <button
                  onClick={() => onDelete?.(student)}
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
  );
};

export default StudentTable;
