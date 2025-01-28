import { Container } from "../../../../shared/helpers"
import arrow from "../../../../shared/assets/svg/order.svg"
import { ProductsByCategory } from "../../../../utils/index"

export const ProductByCategory = () => {
    return (
        <div className="bg-[#FAF5F1] mt-10 md:mt-20 py-7">
            <Container>
                <div className="text-[28px] md:text-[56px] font-bold">
                    <p>Просмотр товаров</p>
                    <span className="flex gap-4">
                        <span>по</span>
                        <span className="text-[#B89776]">категориям</span>
                    </span>
                </div>
                <div className="flex flex-wrap justify-between gap-3 md:gap-4 mt-5">
                    {ProductsByCategory.map((item) => (
                        <div
                            key={item.id}
                            className="relative w-[48%] md:w-[290px] h-[195px] md:h-[400px] bg-cover bg-center p-2 md:p-5 rounded-[16px] transition-transform duration-300 hover:scale-105 flex flex-col justify-end"
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundPosition: "center center",
                                backgroundSize: "cover",
                            }}
                        >
                            <div className="flex flex-col gap-5">
                                <p className="text-white text-[16px] md:text-[20px] font-bold">{item.title}</p>
                                <div className="flex justify-between items-center p-1 rounded-[20px] w-[100%] bg-white cursor-pointer transition-all duration-300 hover:bg-[#f3f3f3]">
                                    <p className="ml-3">Подробнее</p>
                                    <img
                                        src={arrow}
                                        alt="order"
                                        className="rounded-full w-[24px] h-[24px] md:w-[40px] md:h-[40px] hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
