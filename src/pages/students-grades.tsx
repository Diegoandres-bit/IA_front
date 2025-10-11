import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { Sidebar } from '../components/Side-bar.tsx' 
import { MdOutlineDashboard } from "react-icons/md"
import { IoBookOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { HiClipboardList } from "react-icons/hi";
import FloatingButton from "../components/chat.tsx"
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Sidebar items={[
        { label: "Dashboard", icon: <MdOutlineDashboard /> },
        { label: "Materias",icon:<IoBookOutline />},
        { label: "Notas",icon: <HiClipboardList /> },
        { label: "Configuracion" ,icon: <CiSettings /> }
      ]}
       maxItems={4} />
        <FloatingButton />
    </StrictMode>
)