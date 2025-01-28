import { Container } from "../../../../shared/helpers";
import card from "../../../../shared/assets/img/card.png"
import card2 from "../../../../shared/assets/img/card2.png"
import star from "../../../../shared/assets/svg/star.svg"
import security from "../../../../shared/assets/svg/security.svg"
import app from "../../../../shared/assets/svg/app.svg"

export const WhyWe = () => {
    return (
        <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:p-6 mt-10 md:mt-20">
            {/* Первый блок, занимает 2 колонки */}
            <div className="md:col-span-2 bg-white flex items-center h-[100px] md:h-[350px] pr-10">
                <h2 className="text-xl mb-4 text-[28px] md:text-[56px] font-bold">Почему выбирают нас?</h2>
            </div>

            {/* Второй блок */}
            <div className="rounded-[10px] p-7 h-[220px] md:h-[350px] bg-[#FCFCF1] border border-[#E6E6E6] flex flex-col justify-between">
                <div className="flex flex-col gap-5">
                    <h3 className="mb-2 text-[20px] md:text-[32px] font-semibold">Нам можно доверять.</h3>
                    <p className="text-[13px] text-[#707070]">
                        Мы выстраиваем долгосрочные отношения. Развиваемся, чтоб помочь нашим клиентам становиться ещё лучше
                    </p> 
                </div>
                <div className="bg-[#93A27C] w-[33px] h-[33px] rounded-xl flex justify-center items-center">
                    <img src={star} alt="star" />
                </div>
            </div>

            {/* Третий блок */}
            <div className="bg-white rounded-[10px] p-7 h-[220px] md:h-[350px] border border-[#E6E6E6]">
                <div
                    className="relative w-full h-full bg-cover bg-center p-5"
                    style={{
                      backgroundImage: `url(${card})`,
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                    }}
                >
                    <div className="bg-[#93A27C] w-[45%] rounded-2xl py-2 flex justify-center items-center text-white">
                        c 2018 года
                    </div>
                </div>
            </div>

            {/* Четвёртый блок */}
            <div className="bg-white h-[220px] md:h-[350px] hidden md:flex"></div>
            <div className="bg-white p-6 rounded-[10px] h-[220px] md:h-[350px] border border-[#E6E6E6]">
                <div
                    className="relative w-full h-full bg-cover bg-center p-5"
                    style={{
                      backgroundImage: `url(${card2})`,
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                    }}
                >
                    <div className="bg-[#93A27C] py-2 px-5 flex justify-center items-center w-[60%] rounded-2xl">
                        200+  товаров
                    </div>
                </div>
            </div>
            <div className="rounded-[10px] p-7 h-[220px] md:h-[350px] bg-[#FFF5E8] border border-[#E6E6E6]  flex flex-col justify-between">
                <div className="flex flex-col gap-5">
                    <h3 className="mb-2 text-[20px] md:text-[32px] font-semibold">Экспертность</h3>
                    <p className="text-[13px] text-[#707070]">
                    Наша экспертность в сфере применения кондитерского сырья. Возможность предоставления технологической поддержки.
                    </p>
                </div>
                <div className="bg-[#93A27C] w-[33px] h-[33px] rounded-xl flex justify-center items-center">
                    <img src={security} alt="security" />
                </div>
            </div>
            <div className="rounded-[10px] h-h-[220px] md:[350px] p-7 bg-[#FFFBEE] border border-[#E6E6E6] flex flex-col justify-between">
                <div className="flex flex-col gap-3 md:gap-5">
                    <h3 className="mb-2 text-[20px] md:text-[32px] font-semibold">Гарантия качества</h3>
                    <p className="text-[13px] text-[#707070]">
                        Высокий уровень поставляемых услуг
                    </p>
                    <p className="text-[13px] text-[#707070]">Большой опыт работы с международными поставщиками. Закрываем все вопросы по бесперебойному обеспечению производств сырьевой базой.</p>
                </div>
                <div className="bg-[#93A27C] w-[33px] h-[33px] rounded-xl flex justify-center items-center">
                    <img src={app} alt="security" />
                </div>
            </div>
        </div>
        </Container>
    );
};

