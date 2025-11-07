import "../index.css";
import { RiGraduationCapLine } from "react-icons/ri";

type SidebarItem = {
  label: string;
  icon?: React.ReactNode;
  href: string;
};

interface UserInfo {
  name: string;
  role: "Profesor" | "Estudiante" | "Admin";
  image?: string;
}

interface SidebarProps {
  items: SidebarItem[];
  maxItems?: number;
  user: UserInfo; 
}

const Sidebar: React.FC<SidebarProps> = ({ items, maxItems, user }) => {
  const displayItems = maxItems ? items.slice(0, maxItems) : items;

  return (
    <div className="fixed left-0 top-0 h-screen bg-customBlue p-4 w-[360px] z-50">
      <aside className="flex flex-col h-full justify-between">
       
        <div>
          <div className="flex items-center gap-3 mb-6">
            <RiGraduationCapLine className="text-4xl text-blue-500" />
            <span className="text-3xl font-bold text-black">EAM</span>
          </div>

          <nav className="flex flex-col space-y-1">
            {displayItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center w-80 px-2 py-1 font-medium text-black
                           rounded-2xl hover:bg-darkBlue hover:text-white 
                           transition-all transform hover:scale-105 duration-200"
              >
                {item.icon && <span className="text-xl p-2">{item.icon}</span>}
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-gray-300 mt-6 pt-4 flex items-center gap-3">
          <img
            src={user.image || "https://via.placeholder.com/50"}
            alt="User Avatar"
            className="w-12 h-12 rounded-full object-cover border border-gray-400"
          />
          <div>
            <p className="font-semibold text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-700">{user.role}</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
