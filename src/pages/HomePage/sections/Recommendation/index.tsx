import { Container } from "../../../../shared/helpers";
import arrow from "../../../../shared/assets/svg/order.svg";
import { RecProducts } from "../../../../features/RecProducts";
import { RecProductsCenteredScroll } from "../../../../shared/ui/RecProductSmallScreen";

export const Recommendation = () => {
    return (
        <div className="mt-20 bg-[#F4F4F4] py-10">
            <Container>
                    <p className="text-[16px] md:text-[18px] text-[#93A27C]">Вам могут понравиться</p>
                    <div>
                        <div className="flex justify-between items-center">
                            <p className="text-[28px] md:text-[56px] font-bold">Рекомендуемые товары</p>
                            <div className="hidden md:flex justify-between items-center p-1 rounded-[22px] w-[20%] bg-white cursor-pointer">
                                <p className="ml-3">Все товары</p>
                                <img src={arrow} alt="order" className="rounded-full w-[40px] h-[40px] hover:scale-110 transition-transform duration-300" />
                            </div>  
                        </div>  
                        <div className="mt-5">
                            <div className="hidden md:flex">
                                <RecProducts /> 
                            </div>
                            <div className="md:hidden" >
                                <RecProductsCenteredScroll/>
                            </div>
                        </div>
                        <div className="flex justify-between items-center p-1 rounded-[22px] w-[100%] bg-white cursor-pointer md:hidden hover:bg-[#e6e4e4] transition-all duration-300">
                            <p className="ml-3">Все товары</p>
                            <img src={arrow} alt="order" className="rounded-full w-[40px] h-[40px] hover:scale-110 transition-transform duration-300" />
                        </div>  
                    </div>
            </Container>
        </div>
    );
};
