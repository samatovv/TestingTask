import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import arrow from "../../assets/svg/order.svg";
import { toast } from "react-toastify";
import { RecProds } from "../../../utils";

export const RecProductsCenteredScroll = () => {
    const [centerIndex, setCenterIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleAddToCart = () => {
        toast.success("добавлен в корзину", {
            style: {
                backgroundColor: "#93A27C",
                color: "#ffffff",
                fontWeight: "semibold",
            },
        });
    };

    const handleScroll = () => {
        if (containerRef.current) {
            const { scrollLeft, offsetWidth } = containerRef.current;
            const centerPosition = scrollLeft + offsetWidth / 2;

            const closestIndex = RecProds.reduce((closest, _, index) => {
                const element = containerRef.current!.children[index] as HTMLDivElement;
                const elementCenter =
                    element.offsetLeft + element.offsetWidth / 2;
                const distance = Math.abs(centerPosition - elementCenter);
                return distance < closest.distance
                    ? { index, distance }
                    : closest;
            }, { index: 0, distance: Infinity }).index;

            setCenterIndex(closestIndex);
        }
    };

    useEffect(() => {
        if (containerRef.current) {
            handleScroll(); 
            containerRef.current.addEventListener("scroll", handleScroll);

            return () =>
                // eslint-disable-next-line react-hooks/exhaustive-deps
                containerRef.current?.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="overflow-x-scroll h-[380px] pt-3 px-3 flex gap-4 snap-x snap-mandatory"
            style={{ scrollBehavior: "smooth" }}
        >
            {RecProds.map((item, index) => (
                <motion.div
                    key={item.id}
                    className={`p-3 rounded-2xl w-[200px] h-[300px] bg-white snap-center flex-shrink-0 mt-3`}
                    style={{
                        transformOrigin: "center",
                        scale: centerIndex === index ? 1.1 : 1,
                        transition: "transform 0.3s ease",
                    }}
                >
                        <img
                            src={item.image}
                            alt=""
                            className="w-full h-[140px] object-cover rounded-xl"
                        />
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold mt-2 text-[14px] truncate">
                                {item.title}
                            </p>
                            <span className="text-[10px] font-normal text-gray-500">
                                вес: {item.weight} кг
                            </span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <p className="text-[16px] font-bold">{item.price} c</p>
                        </div>
                        <motion.div
                            whileHover={{
                                backgroundColor: "#f3f3f3",
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleAddToCart}
                            className="flex justify-between items-center p-1 rounded-[16px] w-full bg-white mt-2 border border-[#F0F0F0] cursor-pointer transition-all duration-300"
                        >
                            <p className="ml-2 text-[12px]">В корзину</p>
                            <motion.img
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                src={arrow}
                                alt="order"
                                className="rounded-full w-[30px] h-[30px] transition-transform duration-300"
                            />
                        </motion.div>
                </motion.div>
            ))}
        </div>
    );
};
