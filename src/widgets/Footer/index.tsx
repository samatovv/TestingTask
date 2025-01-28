import insta from "../../shared/assets/svg/insta.svg";
import facebook from "../../shared/assets/svg/faceBook.svg";
import twitter from "../../shared/assets/svg/twitter.svg";
import logo from "../../shared/assets/svg/logo.svg";
import { Container } from "../../shared/helpers";

export const Footer = () => {
    return (
        <div className="bg-[#F4F4F4] py-6 md:py-10">
            <Container>
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
                    <div className="flex flex-col gap-6 md:gap-8">
                        <div>
                            <img src={logo} alt="Logo" className="w-36 md:w-44" />
                            <p className="text-[14px] md:text-[16px] text-gray-700 mt-2">
                                Ваш путеводитель в области сырья и ингредиентов для пищевой промышленности
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[16px] md:text-[18px] font-semibold mb-2 text-[#333]">
                                Контакты
                            </h3>
                            <div className="flex flex-col gap-1 text-[14px] text-gray-700">
                                <p>Г.Бишкек ул. Матросова 1а/21</p>
                                <p>+996 0550 114 477</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                        <div>
                            <h3 className="text-[16px] md:text-[18px] font-semibold mb-2 text-[#333]">
                                Навигация
                            </h3>
                            <div className="flex flex-col gap-2 text-[14px] text-gray-700">
                                <p>Главная</p>
                                <p>Каталог</p>
                                <p>Новости</p>
                                <p>Личный кабинет</p>
                                <p>Корзина</p>
                                <p>О нас</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[16px] md:text-[18px] font-semibold mb-2 text-[#333]">
                                Каталог
                            </h3>
                            <div className="flex flex-col gap-2 text-[14px] text-gray-700">
                                <p>Шоколад</p>
                                <p>Сливки</p>
                                <p>Сыр</p>
                                <p>Декор</p>
                                <p>Орехи</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[16px] md:text-[18px] font-semibold mb-2 text-[#333]">
                            Мы в соцсетях
                        </h3>
                        <div className="flex gap-3">
                            <div className="w-[32px] h-[32px] rounded-full bg-[#93A27C] flex justify-center items-center">
                                <img src={insta} alt="Instagram" />
                            </div>
                            <div className="w-[32px] h-[32px] rounded-full bg-[#93A27C] flex justify-center items-center">
                                <img src={facebook} alt="Facebook" />
                            </div>
                            <div className="w-[32px] h-[32px] rounded-full bg-[#93A27C] flex justify-center items-center">
                                <img src={twitter} alt="Twitter" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="w-full bg-[#93A27C] h-[56px] flex justify-center items-center text-center text-white text-[12px] md:text-[14px] mt-5">
                <p>@FoodLand - 2024</p>
            </div>
        </div>
    );
};
