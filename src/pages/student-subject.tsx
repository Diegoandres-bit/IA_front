import { StrictMode, useEffect, useState } from 'react'
import { IoBookOutline } from "react-icons/io5";
import Sidebar from '../components/Side-bar.tsx'
import { GoPerson } from "react-icons/go";
import { CiLogout } from "react-icons/ci";
import { SubjectCard } from '../components/subject-card.tsx';

interface Subject {
  id: number;
  subject: string;
  teacher: string;
  criteria: number;
  finalGrade: number;
}

export default function StudentsSubjectGrades() {
  const [subjects, setSubjects] = useState<Subject[]>([]);

  // Simula la llamada al backend (puedes reemplazar la URL por la tuya)
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch("http://localhost:9010/api/subjects"); // <-- tu endpoint
        const data = await response.json();
        setSubjects(data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
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
                    teacher={subj.teacher}
                    criteria={subj.criteria}
                    finalGrade={subj.finalGrade}
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
