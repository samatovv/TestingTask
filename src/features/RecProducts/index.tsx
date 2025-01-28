import { useState } from "react";
import arrow from "../../shared/assets/svg/order.svg";
import left from "../../shared/assets/svg/left.svg";
import right from "../../shared/assets/svg/right.svg";
import { RecProds } from "../../utils";
import { Pagination, PaginationItem } from "@mui/material";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export const RecProducts = () => {
    const [page, setPage] = useState(1);
    const [counts, setCounts] = useState<{ [key: number]: number }>({});

    const itemsPerPage = 4;

    const handleChange = (_e: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const handleAdd = (id: number) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 0) + 1,
        }));
    };
    const handleAddToCart = () => {
        toast.success("добавлен в корзину", {
            style: {
                backgroundColor: "#93A27C", 
                color: "#ffffff",
                fontWeight: "semibold",
            },
        });;
    }

    const handleRemove = (id: number) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [id]: Math.max((prevCounts[id] || 0) - 1, 0),
        }));
    };

    const startIndex = (page - 1) * itemsPerPage;
    const currentItems = RecProds.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div>
            <div className="grid grid-cols-4 gap-3 lg:gap-14">
                {currentItems.map((item) => (
                    <div key={item.id} className="p-5 rounded-3xl w-[100%] h-[420px] bg-white flex flex-col justify-between">
                        <img src={item.image} alt="" className="w-full h-[170px] lg:h-[205px] object-cover rounded-xl" />
                        <div className="flex flex-col gap-4">
                            <p className="font-semibold mt-3 text-[16px]">{item.title}</p>
                            <span className="text-[12px] font-normal text-gray-500">вес: {item.weight} кг</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-[20px] font-bold">{item.price} c</p>
                            <div className="border border-[#F0F0F0] rounded-3xl flex justify-between items-center gap-3 p-1">
                                <div
                                    onClick={() => handleRemove(item.id)}
                                    className="bg-[#ECECEC] rounded-full w-[24px] h-[24px] flex justify-center items-center cursor-pointer"
                                >
                                    -
                                </div>
                                <p>{counts[item.id] || 0}</p>
                                <div
                                    onClick={() => handleAdd(item.id)}
                                    className="bg-[#ECECEC] rounded-full w-[24px] h-[24px] flex justify-center items-center cursor-pointer"
                                >
                                    +
                                </div>
                            </div>
                        </div>
                        <div onClick={handleAddToCart} className="flex justify-between items-center p-1 rounded-[22px] w-full bg-white mt-4 border border-[#F0F0F0] cursor-pointer hover:bg-[#f3f3f3] transition-all duration-300">
                            <p className="ml-3">В корзину</p>
                            <img src={arrow} alt="order" className="rounded-full w-[40px] h-[40px] hover:scale-110 transition-transform duration-300" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-6">
                <Pagination
                    count={Math.ceil(RecProds.length / itemsPerPage)}
                    page={page}
                    onChange={handleChange}
                    renderItem={(item) => (
                        <PaginationItem
                            {...item}
                            sx={{
                                "&.Mui-selected": {
                                    backgroundColor: "#93A27C",
                                    color: "#ffffff",
                                },
                                backgroundColor: "#ffffff",
                                color: "#93A27C",
                                borderRadius: "50%",
                                margin: "0 4px",
                            }}
                            components={{
                                previous: () => (
                                    <img src={left} alt="previous" className="w-6 h-6" />
                                ),
                                next: () => (
                                    <img src={right} alt="next" className="w-6 h-6" />
                                ),
                            }}
                        />
                    )}
                />
            </div>
            <ToastContainer/>
        </div>
    );
};
