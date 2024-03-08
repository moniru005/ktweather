import { FaHome, FaUser, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DashboardMenus = () => {
  return (
    <div className="flex flex-col gap-2">
      <NavLink to="/dashboard" className={`flex items-center hover:bg-slate-500 gap-2`}>
        <FaHome className="text-white text-2xl"/>
        <button className="w-full text-lg text-left p-2 rounded-lg hover:rounded-lg">
          Home
        </button>
      </NavLink>
      <NavLink to="/dashboard/addUser" className={`flex items-center hover:bg-slate-500 gap-2`}>
        <FaUser className="text-white text-2xl"/>
        <button className="w-full text-lg text-left p-2 rounded-lg hover:rounded-lg">
          Add User
        </button>
      </NavLink>
      <NavLink to="/dashboard/allUsers" className={`flex items-center hover:bg-slate-500 gap-2`}>
        <FaUsers className="text-white text-3xl"/>
        <button className="w-full text-lg text-left p-2 rounded-lg hover:rounded-lg">
          Users List
        </button>
      </NavLink>
    </div>
  );
};

export default DashboardMenus;
