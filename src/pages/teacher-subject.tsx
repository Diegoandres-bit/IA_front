import { StrictMode, useEffect, useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import Sidebar from "../components/Side-bar.tsx";
import { GoPerson } from "react-icons/go";
import { CiLogout } from "react-icons/ci";
import { SubjectCard } from "../components/teacher-subject-card.tsx";

// Definimos el tipo de datos que viene del backend
interface TeacherSubject {
  id: number;
  subject: string;
  code: string;
  students: number;
}

export default function StudentsSubjectGrades() {
  const [subjects, setSubjects] = useState<TeacherSubject[]>([]);

  // Llamada al backend
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch(
          "http://localhost:9010/api/teacher/subjects"
        ); // <-- Cambia por tu endpoint real
        const data = await response.json();
        setSubjects(data);
      } catch (error) {
        console.error("Error al obtener las materias:", error);
      }
    };

    fetchSubjects();
  }, []);

  return (
    <StrictMode>
      <div className="flex min-h-screen">
        <Sidebar
          items={[
            { label: "Mis Materias", href: "#", icon: <IoBookOutline /> },
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
              Mis Materias
            </h1>

            <div className="grid grid-cols-2 gap-6">
              {subjects.length > 0 ? (
                subjects.map((subj) => (
                  <SubjectCard
                    key={subj.id}
                    subject={subj.subject}
                    code={subj.code}
                    Students={subj.students}
                    onSelect={() => {}}
                  />
                ))
              ) : (
                <p className="col-span-2 text-center text-gray-600">
                  Cargando materias...
                </p>
              )}
            </div>
          </div>
        </main>
      </div>
    </StrictMode>
  );
}
