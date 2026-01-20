import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const UsersTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9010/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar usuarios:", err);
        setLoading(false);
      });
  }, []);

  const handleAdd = () => {
    console.log("Crear usuario");
  };

  const handleEdit = (user: User) => {
    console.log("Editar:", user);
  };

  const handleDelete = (user: User) => {
    console.log("Eliminar:", user);
  };

  if (loading) {
    return <div className="p-4">Cargando usuarios...</div>;
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Gestión de Usuarios</h2>

        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
        >
          <FaPlus size={14} />
          Crear Usuario
        </button>
      </div>

      <table className="min-w-full border-gray-300 overflow-y-auto max-h-[70vh] border rounded-lg">
        <thead className="min-w-full text-sm text-left border-collapse">
          <tr className="bg-gray-50 text-gray-600 uppercase text-xs">
            <th className="border px-4 py-2 text-left">NOMBRE</th>
            <th className="border px-4 py-2 text-left">EMAIL</th>
            <th className="border px-4 py-2 text-left">ROL</th>
            <th className="border px-4 py-2 text-center">ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{u.name}</td>
              <td className="border px-4 py-2">{u.email}</td>
              <td className="border px-4 py-2">{u.role}</td>
              <td className="border px-4 py-2 text-center space-x-2">
                <button
                  onClick={() => handleEdit(u)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaEdit className="inline w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(u)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaRegTrashAlt className="inline w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
