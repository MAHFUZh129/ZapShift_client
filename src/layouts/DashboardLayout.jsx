import React, { useState } from "react";
import {
    
    Settings,
    KeyRound,
    HelpCircle,
    LogOut,
    Bell,
    Search,   
    User,
    ChevronDown,
    Package,
} from "lucide-react";
import MyParcels from "../pages/dashboard/MyParcels";
import { NavLink, Outlet } from "react-router";
import Logo from "../components/Logo";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {

    const { user } = useAuth();
    const [open, setOpen] = useState(false);


    const navLinkClass = ({ isActive }) =>
        `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${isActive
            ? "bg-primary text-black font-bold"
            : "text-gray-600 hover:bg-gray-100 hover:text-black hover:font-bold"
        }`;

    return (
        <div className="min-h-screen ">
            <div className="mx-auto flex min-h-[95vh] max-w-7xl overflow-hidden rounded-sm bg-[#efefef] shadow-2xl">
                {/* Sidebar */}
                <aside className="w-[250px] bg-white border-r border-gray-200 px-5 py-6">
                    <div className="mb-5 hover:bg-gray-50 rounded-md">
                        <NavLink  to={'/'}><Logo></Logo></NavLink>
                        <div className="border-t-1 border-gray-200 mt-5" />
                    </div>

                    {/* Dashboard Menu */}
                    <div className="mb-3 text-xs font-semibold uppercase text-gray-400">
                        Menu
                    </div>

                    <nav className="space-y-2">
                        <NavLink
                            className={navLinkClass}
                            to="my-parcels"

                        ><Package size={18} />
                            My parcels
                        </NavLink>
                        <NavLink
                            to="my"
                            className={navLinkClass}
                        >
                            My parcels
                        </NavLink>


                    </nav>

                    <div className="mt-8 mb-3 text-xs font-semibold uppercase text-gray-400">
                        General
                    </div>

                    <nav className="space-y-2">
                        <NavLink className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100"
                            to={''}><Settings size={18} /> Settings</NavLink>
                        <NavLink className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100"
                            to={''}><KeyRound size={18} /> Change Password</NavLink>

                        <NavLink className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100"
                            to={''}><HelpCircle size={18} /> Help</NavLink>

                        <NavLink className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100"
                            to={''}><LogOut size={18} /> Logout</NavLink>

                    </nav>

                </aside>

                {/* Main */}
                <main className="flex-1 p-2">
                    {/* Topbar */}
                    <div className="mb-6 flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm">
                        <div className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-2 w-[280px]">
                            <Search size={18} className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-transparent text-sm outline-none"
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="relative rounded-full bg-gray-100 p-2">
                                <Bell size={18} className="text-gray-700" />
                                <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-primary"></span>
                            </button>

                            <div onClick={()=>setOpen(!open)} className="flex relative  items-center gap-3 rounded-lg border border-gray-200 px-3 py-2">
                                <img
                                    src={user?.photoURL}
                                    alt="user"
                                    className="h-9 w-9 rounded-full"
                                />
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-800">
                                        {user?.displayName || 'User'}
                                    </h3>
                                    
                                    {/* <p className="text-xs text-gray-500">Admin</p> */}
                                </div>
                                <ChevronDown size={16}className="text-gray-500" />
                                 
                                {open && (
        <div className="absolute right-0 top-12 mt-2 w-52 rounded-xl border border-gray-200 bg-white p-4 shadow-lg z-50">
          <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-primary">
            <User size={16} />
            Profile
          </button>

          <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-primary">
            <Settings size={16} />
            Settings
          </button>

          <button
            // onClick={logOut}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-500 hover:bg-primary/80"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      )}
                            </div>
                        </div>
                    </div>

                    {/* Outlet */}
                    <div className="">
                        <Outlet></Outlet>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;