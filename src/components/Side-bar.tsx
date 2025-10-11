
import "../index.css"
type SidebarItem = {
  label: string;
  icon?: React.ReactNode;
};
interface SidebarProps {
  items: SidebarItem[];
  maxItems?: number;
}


export const Sidebar: React.FC<SidebarProps> = ({ items, maxItems }) => {
  const displayItems = maxItems ? items.slice(0, maxItems) : items;
 return (
   <div className="flex bg-customBlue p-4 w-90  h-screen fixed">
    <aside className="h-full">
      <h1 className="text-xl font-bold text-black mb-6 p-2">EAM</h1>
      <nav className="flex flex-col space-y-1">
        {displayItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center w-80 px-2 py-1 font-medium text-black
                      rounded-2xl
                      hover:bg-darkBlue
                      hover:text-white transition-colors 
                      transition-all transform hover:scale-105 duration-200"
          ><br></br>

          {item.icon && <span className="text-xl p-2">{item.icon}</span>}
            {item.label}
          </a>
        ))}
      </nav>
      <hr className="w-full"></hr>
    </aside>

    </div>
  );
};
