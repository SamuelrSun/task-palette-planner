
import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Factory, 
  User, 
  Settings,
  AlertCircle,
  LogOut
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-60 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <span className="ml-2 text-xl font-bold">batchr</span>
        </div>
      </div>
      
      <div className="p-4">
        <button className="w-full flex items-center justify-between p-2">
          <span className="font-medium">Menu</span>
          <span className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </span>
        </button>
      </div>
      
      <nav className="flex-grow">
        <ul className="px-2">
          <NavItem icon={<LayoutDashboard />} label="Dashboard" to="/" />
          <NavItem icon={<Users />} label="Team Management" to="/team" />
          <NavItem icon={<Factory />} label="Production" to="/production" active />
          <NavItem icon={<User />} label="Profile" to="/profile" />
          <NavItem icon={<Settings />} label="Settings" to="/settings" />
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <h2 className="text-lg font-semibold mb-2">Notices</h2>
        <div className="space-y-2">
          <NoticeItem 
            title="Closing Checklist Late"
            tags={["Team", "Tasks"]}
          />
          <NoticeItem 
            title="5 Ingredients Below Par"
            tags={["Dashboard", "Inventory"]}
          />
          <NoticeItem 
            title="Partial Inventory Count"
            tags={["Team", "Tasks"]}
          />
        </div>
      </div>

      <div className="p-4 mt-auto border-t border-gray-200">
        <button className="w-full flex items-center justify-center py-2 px-4 border border-purple-300 text-purple-500 rounded-md hover:bg-purple-50">
          <LogOut className="w-4 h-4 mr-2" />
          Log Out
        </button>
        <div className="mt-2 text-xs text-center text-gray-500">Terms & Conditions</div>
      </div>
    </div>
  );
};

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to, active }) => {
  return (
    <li className="mb-1">
      <Link
        to={to}
        className={`flex items-center px-4 py-2 rounded-md ${active ? 'bg-gray-100 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
      >
        <span className="w-5 h-5 mr-3">{icon}</span>
        {label}
      </Link>
    </li>
  );
};

type NoticeItemProps = {
  title: string;
  tags: string[];
}

const NoticeItem: React.FC<NoticeItemProps> = ({ title, tags }) => {
  return (
    <div className="p-3 bg-white rounded-md border border-gray-200 hover:bg-gray-50 cursor-pointer">
      <div className="text-sm font-medium">{title}</div>
      <div className="text-xs text-gray-500">{tags.join(" • ")}</div>
    </div>
  );
};

export default Sidebar;
