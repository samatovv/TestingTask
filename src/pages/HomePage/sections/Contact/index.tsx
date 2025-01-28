import { motion } from "framer-motion";
import orderSVG from "../../../../shared/assets/svg/order.svg";
import { toast } from "react-toastify";

export const Contact = () => {

    const handleAddToCart = () => {
        toast.success("Заявка успешно отправлена!", {
            style: {
                backgroundColor: "#93A27C", 
                color: "#ffffff",
                fontWeight: "semibold",
            },
        });;
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-[100%] md:w-[40%] mt-[20%] flex flex-col gap-[100px]"
        >
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-center md:text-start text-[30px] md:text-[52px] font-extrabold text-white"
            >
                Ваш путеводитель в области сырья
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex flex-col gap-5 md:flex-row md:justify-between w-full"
            >
                <motion.input
                    whileFocus={{ scale: 1.05 }}
                    className="w-[100%] md:w-[50%] bg-white outline-none rounded-[20px] px-4 py-4 md:py-2"
                    type="text"
                    placeholder="Найти..."
                />
                <motion.div
                    onClick={handleAddToCart}
                    whileHover={{ scale: 1.03, backgroundColor: "#d7d5d5" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex justify-between items-center w-[100%] md:w-[43%] bg-white rounded-[20px] p-1 cursor-pointer transition-all duration-300"
                >
                    <p className="ml-3">Заказать звонок</p>
                    <motion.img
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        src={orderSVG}
                        alt="order"
                        className="rounded-full w-[40px] h-[40px] transition-transform duration-300"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
