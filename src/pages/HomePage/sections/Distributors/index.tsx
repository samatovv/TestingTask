import { Margues } from "../../../../utils";

export const Distributors = () => {
    return (
        <div className="mx-auto text-center mt-20">
            <p className="text-[28px] md:text-[56px] font-extrabold">Официальные дистрибьюторы</p>
            <div className="overflow-hidden mt-15 relative">
                <div className="hidden md:flex animate-marquee gap-8 whitespace-nowrap">
                    {Margues.map((item, index) => (
                        <img
                            key={index}
                            src={item.image}
                            alt="margue"
                            className="h-24"
                        />
                    ))}
                    {Margues.map((item, index) => (
                        <img
                            key={`clone-${index}`}
                            src={item.image}
                            alt="margue"
                            className="h-24"
                        />
                    ))}
                </div>
                <div className="flex flex-wrap gap-4 md:hidden">
                    <div className="flex animate-marquee-reverse gap-4 w-full whitespace-nowrap mt-2">
                        {Margues.map((item, index) => (
                            <img
                                key={index}
                                src={item.image}
                                alt="margue"
                                className="h-16"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};