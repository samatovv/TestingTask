import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import image from "../../../../shared/assets/img/cook.png";
import arrow from "../../../../shared/assets/svg/order.svg";
import { Container } from "../../../../shared/helpers";

export const HelpUs = () => {
    const ref = useRef(null); // Ссылка на компонент
    const isInView = useInView(ref, { once: true, margin: "-100px" }); // Анимация запускается при попадании в видимость

    return (
        <Container>
            <div
                ref={ref} // Привязка ссылки
                className="mt-10 md:mt-20 flex flex-col gap-15"
            >
                {isInView && ( // Анимация срабатывает только если компонент в зоне видимости
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[28px] md:text-[50px] font-bold"
                    >
                        Мы помогаем местным кондитерам и шеф-поварам претворять в жизнь свои самые смелые кулинарные задумки
                    </motion.p>
                )}
                <div className="gap-5 w-full flex flex-col md:flex-row md:justify-between md:h-[500px]">
                    {isInView && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-[#93A27C] rounded-[15px] w-[100%] md:w-[38%] h-[275px] md:h-full p-5 md:p-10 flex flex-col justify-end text-[16px] font-medium text-white"
                        >
                            Мы предлагаем вам не просто сырье, а экспертность и индивидуальный подход: всегда готовы помочь найти альтернативу, закрыть срочную потребность или предложить уникальное решение.
                        </motion.div>
                    )}
                    {isInView && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="relative w-[100%] md:w-[60%] h-[275px] md:h-full bg-cover bg-center rounded-[15px] p-5 md:p-10 flex justify-end items-end"
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundPosition: "center center",
                                backgroundSize: "cover",
                            }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.03, backgroundColor: "#dedddd" }}
                                whileTap={{ scale: 0.95 }}
                                className="flex justify-between items-center p-1 rounded-[20px] w-[100%] md:w-[27%] bg-white cursor-pointer transition-all duration-300"
                            >
                                <p className="ml-3">Читать далее</p>
                                <motion.img
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    src={arrow}
                                    alt="order"
                                    className="rounded-full w-[40px] h-[40px]"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </div>
            </div>
        </Container>
    );
};
