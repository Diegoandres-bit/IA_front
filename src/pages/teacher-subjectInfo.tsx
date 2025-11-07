import { StrictMode, useEffect, useState } from "react";
import { CiLogout } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import Sidebar from "../components/Side-bar.tsx";

interface SubjectInfo {
  id: number;
  subject: string;
  teacher: string;
  description: string;
  credits: number;
  schedule: string;
}

export default function TeacherSubjectInfo() {
  const [subjectInfo, setSubjectInfo] = useState<SubjectInfo | null>(null);

  useEffect(() => {

    const subjectId = 1;

    const fetchSubjectInfo = async () => {
      try {
        const response = await fetch(`http://localhost:9010/api/teacher/subjects/${subjectId}`); 
        const data = await response.json();
        setSubjectInfo(data);
      } catch (error) {
        console.error("Error al obtener la información de la materia:", error);
      }
    };

    fetchSubjectInfo();
  }, []);

  return (
    <StrictMode>
      <div className="flex min-h-screen">
        <Sidebar
          items={[
            { label: "Información de la Materia", href: "#", icon: <IoBookOutline /> },
            { label: "Perfil", href: "#", icon: <GoPerson /> },
            { label: "Cerrar Sesión", href: "/", icon: <CiLogout /> },
          ]}
          user={{
          name: "Juan Pérez",
            role: "Profesor",
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdinosaurland.es%2Fdinos%2Fstegosaurus%2F&psig=AOvVaw1GdTvCfwuObEBAI9DDg43v&ust=1762634949381000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCICMsYn14JADFQAAAAAdAAAAABAE", // ejemplo de avatar
            }}
          maxItems={3}
        />

        <main className="flex-1 min-h-screen bg-color-backgroundColor ml-[360px]">
          <div className="p-8 mx-auto max-w-6xl">
            <h1 className="text-4xl font-semibold mb-4 text-left text-gray-800">
              {subjectInfo ? subjectInfo.subject : "Información de la Materia"}
            </h1>
            <hr className="border-1 border-gray-400 my-4 " />
            


            {subjectInfo ? (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  {subjectInfo.subject}
                </h2>
                
                <p className="text-gray-600 mb-2">
                  <strong>Descripción:</strong> {subjectInfo.description}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Créditos:</strong> {subjectInfo.credits}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Horario:</strong> {subjectInfo.schedule}
                </p>
              </div>
            ) : (
              <p className="text-gray-600 text-center">Cargando información...</p>
            )}
          </div>
        </main>
      </div>
    </StrictMode>
  );
}
