import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../shared/assets/svg/logo.svg";
import cart from "../../shared/assets/svg/cart.svg";
import user from "../../shared/assets/svg/user.svg";
import { Menu, X } from "lucide-react"; 
import { SideBar } from "../SideBar";

export const Header = () => {
    const location = useLocation();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const isActive = (path: string) => location.pathname === path;

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <>
            <div className="flex justify-between w-full items-center px-5 md:px-10 py-3 ">
                <div className="flex justify-center items-center rounded-[16px] bg-white py-3 px-5 cursor-pointer">
                    <img src={logo} alt="logo" />
                </div>

                <div className="hidden md:flex justify-between items-center gap-12 bg-white py-3 px-6 rounded-[14px]">
                    <Link to="/">
                        <p
                            className={`cursor-pointer ${
                                isActive("/") ? "text-[#93A27C] font-bold" : "text-black"
                            }`}
                        >
                            Главная
                        </p>
                    </Link>
                    <Link to="/about">
                        <p
                            className={`cursor-pointer ${
                                isActive("/about") ? "text-[#93A27C] font-bold" : "text-black"
                            }`}
                        >
                            О нас
                        </p>
                    </Link>
                    <Link to="/news">
                        <p
                            className={`cursor-pointer ${
                                isActive("/news") ? "text-[#93A27C] font-bold" : "text-black"
                            }`}
                        >
                            Новости
                        </p>
                    </Link>
                    <Link to="/catalog">
                        <p
                            className={`cursor-pointer ${
                                isActive("/catalog") ? "text-[#93A27C] font-bold" : "text-black"
                            }`}
                        >
                            Каталог
                        </p>
                    </Link>
                </div>

                <div className="flex gap-3 md:gap-5 items-center">
                    <div className="flex justify-center items-center rounded-full bg-white w-14 h-14 p-3 cursor-pointer">
                        <img src={cart} alt="cart" />
                    </div>
                    <div className="flex justify-center items-center rounded-full bg-white w-14 h-14 p-3 cursor-pointer">
                        <img src={user} alt="user" />
                    </div>
                    <div
                        className="flex justify-center items-center rounded-full bg-white w-14 h-14 p-3 cursor-pointer md:hidden"
                        onClick={toggleSidebar}
                    >
                        {isSidebarOpen ? (
                            <X className="w-8 h-8 text-black" />
                        ) : (
                            <Menu className="w-8 h-8 text-black" />
                        )}
                    </div>
                </div>
            </div>

            {isSidebarOpen && (
                <SideBar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} isActive={isActive}/>
            )}
        </>
    );
};
