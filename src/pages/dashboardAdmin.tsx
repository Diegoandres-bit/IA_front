import Sidebar from "../components/Side-bar";
import { CiLogout } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import UsersTable from "../components/AdminUsersTable";
import SubjectsTable from "../components/SubjectsTable";



export default function DashboardAdmin() {
  return  <div className="flex min-h-screen">
        <Sidebar
          items={[
            { label: "Dashboard", href: "#", icon: <MdOutlineDashboard /> },
            { label: "Perfil", href: "#", icon: <GoPerson /> },
            { label: "Cerrar Sesion", href: "/", icon: <CiLogout /> },
          ]}
           user={{
          name: "Juan Pérez",
            role: "Profesor",
            image: "https://dinosaurland.es/wp-content/uploads/elementor/thumbs/dinosaurio-stegosaurus-dinosaurland-r1n5jvppvyq7ahgc8fksp9wkzqen5sq9cnu2l3cav4.jpg", 
            }}
          maxItems={3}
        />

        <main className="flex-1 min-h-screen bg-color-backgroundColor ml-[360px]">
          <div className="p-4 mx-auto max-w-6xl">
            <h1 className="text-4xl font-semibold mb-4 text-left text-gray-800">
              Dashboard
            </h1>

            <div className="grid gap-6 overflow-y-auto w-full mt-8 h-[calc(100vh-8rem)] p-4">
              <UsersTable />
            </div>
<div className="grid gap-6 w-full mt-8 h-[calc(100vh-8rem)] p-2">
  <SubjectsTable
    subjects={[
      { name: "Matemáticas I", teacher: "Ana López" },
      { name: "Historia Universal", teacher: "Pedro Gómez" },
      { name: "Programación Avanzada", teacher: "Laura Fernández" },
    ]}
    onAdd={() => console.log("Añadir materia")}
    onEdit={(s) => console.log("Editar materia:", s)}
    onDelete={(s) => console.log("Eliminar materia:", s)}
  />
            </div>

            </div>
        </main>
        </div>;
}