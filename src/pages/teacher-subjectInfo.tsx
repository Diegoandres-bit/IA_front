import { StrictMode, useEffect, useState } from "react";
import { CiLogout } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import Sidebar from "../components/Side-bar.tsx";
import SearchBar from "../components/searchBAR.tsx";
import StudentTable from "../components/table.tsx";
import ReactDom from "react-dom/client";
import EvaluationCriteriaTable from "../components/EvaluationCriteriaTable.tsx";
import GradesTable from "../components/gradesTable.tsx";
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
        const response = await fetch(
          `http://localhost:9010/api/teacher/subjects/${subjectId}`
        );
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
            {
              label: "Información de la Materia",
              href: "#",
              icon: <IoBookOutline />,
            },
            { label: "Perfil", href: "#", icon: <GoPerson /> },
            { label: "Cerrar Sesión", href: "/", icon: <CiLogout /> },
          ]}
          user={{
            name: "Juan Pérez",
            role: "Profesor",
            image:
              "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdinosaurland.es%2Fdinos%2Fstegosaurus%2F&psig=AOvVaw1GdTvCfwuObEBAI9DDg43v&ust=1762634949381000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCICMsYn14JADFQAAAAAdAAAAABAE", // ejemplo de avatar
          }}
          maxItems={3}
        />

        <main className="flex-1 min-h-screen bg-color-backgroundColor ml-[360px]">
          <div className="p-8 mx-auto max-w-6xl">
            <h1 className="text-4xl font-semibold mb-4 text-left text-gray-800">
              {subjectInfo ? subjectInfo.subject : "Información de la Materia"}
            </h1>
            <hr className="border-1 border-gray-400 my-4 " />
            <SearchBar
              tabs={[
                {
                  label: "Estudiantes Inscritos",
                  onClick: () => {
                    ReactDom.createRoot(
                      document.getElementById("table")!
                    ).render(
                      <StudentTable
                        students={[
                          { name: "Ana García", email: "ana.garcia@eam.com" },
                          {
                            name: "Luis Fernández",
                            email: "luis.fernandez@eam.com",
                          },
                          {
                            name: "Sofía Martínez",
                            email: "sofia.martinez@eam.com",
                          },
                          { name: "Diego López", email: "diego.lopez@eam.com" },
                        ]}
                      />
                    );
                  },
                },
                {
                  label: "criterios de evaluacion",
                  onClick: () => {
                    ReactDom.createRoot(
                      document.getElementById("table")!
                    ).render(
                      <EvaluationCriteriaTable
                        criteria={[
                          { name: "Criterio 1", percentage: 30 },
                          { name: "Criterio 2", percentage: 40 },
                          { name: "Criterio 3", percentage: 30 },
                        ]}
                      />
                    );
                  },
                },

                {
                  label: "Notas",
                  onClick: () => {
                    ReactDom.createRoot(
                      document.getElementById("table")!
                    ).render(
                      <GradesTable
                        grades={[
                          {
                            student: "Ana García",
                            criterion: "Examen Parcial 1",
                            grade: 4.5,
                          },
                          {
                            student: "Luis Fernández",
                            criterion: "Trabajo en Grupo",
                            grade: 4.0,
                          },
                          {
                            student: "Sofía Martínez",
                            criterion: "Participación en Clase",
                            grade: 5.0,
                          },
                          {
                            student: "Diego López",
                            criterion: "Examen Final",
                            grade: 3.8,
                          },
                        ]}
                        onAdd={() => console.log("Añadir nota")}
                        onEdit={(g) => console.log("Editar:", g)}
                        onDelete={(g) => console.log("Eliminar:", g)}
                      />
                    );
                  },
                },
              ]}
            />
            <div id="table">
              <StudentTable
                students={[
                  { name: "Ana García", email: "ana.garcia@eam.com" },
                  { name: "Luis Fernández", email: "luis.fernandez@eam.com" },
                  { name: "Sofía Martínez", email: "sofia.martinez@eam.com" },
                  { name: "Diego López", email: "diego.lopez@eam.com" },
                ]}
              />
            </div>
          </div>
        </main>
      </div>
    </StrictMode>
  );
}
