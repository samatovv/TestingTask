import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const SideBar = ({
    toggleSidebar,
    isOpen,
    isActive,
}: {
    toggleSidebar: () => void;
    isOpen: boolean;
    isActive: (path: string) => boolean;
}) => {
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                toggleSidebar();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, toggleSidebar]);

    return (
        <motion.div
            ref={sidebarRef}
            initial={{ x: "-100%", opacity: 0 }}
            animate={isOpen ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50"
        >
            <div className="flex justify-end p-4">
                <X
                    className="w-8 h-8 cursor-pointer text-black"
                    onClick={toggleSidebar}
                />
            </div>
            <nav className="flex flex-col gap-4 px-4">
                <Link to="/" onClick={toggleSidebar}>
                    <p
                        className={`text-lg font-medium text-[#93A27C] hover:text-[#93A27C] ${
                            isActive("/") ? "text-[#93A27C] font-bold" : "text-black"
                        }`}
                    >
                        Главная
                    </p>
                </Link>
                <Link to="/about" onClick={toggleSidebar}>
                    <p
                        className={`text-lg font-medium text-black hover:text-[#93A27C] ${
                            isActive("/about") ? "text-[#93A27C] font-bold" : "text-black"
                        }`}
                    >
                        О нас
                    </p>
                </Link>
                <Link to="/news" onClick={toggleSidebar}>
                    <p className="text-lg font-medium text-black hover:text-[#93A27C]">
                        Новости
                    </p>
                </Link>
                <Link to="/catalog" onClick={toggleSidebar}>
                    <p className="text-lg font-medium text-black hover:text-[#93A27C]">
                        Каталог
                    </p>
                </Link>
            </nav>
        </motion.div>
    );
};
