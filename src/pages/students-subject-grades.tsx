import { StrictMode } from 'react'
import '../index.css'
import  Sidebar  from '../components/Side-bar.tsx' 
import { MdOutlineDashboard } from "react-icons/md"
import { IoBookOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { HiClipboardList } from "react-icons/hi";
import FloatingButton from "../components/chat.tsx"
export default function StudentsSubjectGrades() {

return(
  <StrictMode>
        <Sidebar items={[
        { label: "Dashboard",href:"#", icon: <MdOutlineDashboard /> },
        { label: "Materias",href:"#",icon:<IoBookOutline />},
        { label: "Notas",href:"#",icon: <HiClipboardList /> },
        { label: "Configuracion",href:"#" ,icon: <CiSettings /> }
      ]}
      user={{
          name: "Juan Pérez",
            role: "Profesor",
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdinosaurland.es%2Fdinos%2Fstegosaurus%2F&psig=AOvVaw1GdTvCfwuObEBAI9DDg43v&ust=1762634949381000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCICMsYn14JADFQAAAAAdAAAAABAE", // ejemplo de avatar
            }}
       maxItems={4} />
        <FloatingButton />
    </StrictMode>
)
  
}
