
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import API from "../axios";
import { AssideBlock, BlockStyleds } from "./LeftAsside";

export default function AssideRight() {
    const locationChange = useNavigate()
    const news = useSelector((state: any) => state.news.news)
    const [archive, setArchive] = useState<any>(null)

    useEffect(() => {
        API.get("archives/")
            .then((res: any) => setArchive(res.data))
    }, [])

    const handle__Search = (e: any) => {
        if (e.keyCode == 13) {
            locationChange(`/news/search/${e.target.value}`)
        }
    }

    return (
        <div className="max-w-[300px] 1024px:max-w-[100%] min-w-[250px] w-[100%] flex flex-col gap-[20px]">
            <div className="bg-white p-5 w-[100%]">
                <div className="flex items-center gap-2.5 border border-solid border-milk_color p-1 px-2">
                    <input type="text" placeholder="Поиск..." onKeyDown={handle__Search} className="font-normal text-base font-roboto text-black_text placeholder:text-black_text outline-none w-full" />
                    <button className="w-5 h-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
                            <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="fill-white stroke-black" />
                        </svg>
                    </button>
                </div>
            </div>
            <BlockStyleds title={<span className="text-[#111111]">Свежие записи</span>}>
                {
                    news.data?.results?.slice(0, 4).map((item: any, index: any) => (
                        <Link to={`/news/${item.id}`} key={index} className="text-[#111111] block font-roboto text-[14px] leading-[18px] font-[600] border-b border-solid border-b-[#dedede] pb-[13px] mb-[13px]">{item.name}</Link>
                    ))
                }
            </BlockStyleds>
            <BlockStyleds title={<span className="text-[#111111]">Архивы</span>}>
                {
                    !!archive
                    &&
                    archive.map((item: any, index: number) => (
                        <Link to={`/archive`} className="text-[#111111] font-[600] font-roboto text-[14px] leading-[18px] block mt-[12px] limit_the_text">{item.date}</Link>
                    ))
                }
            </BlockStyleds>
            <BlockStyleds title={<span className="text-[#111111]">Популярные поиски</span>}>
                <hr className="mb-[20px] bg-[#ececec] h-[1px] border-none" />
                <Link to={`/news/search/Датка`} className="mb-[13px] flex items-center justify-between cursor-pointer hover:text-base_blue text-[#111111] duration-200">
                    <p className="text-inherit font-roboto text-[14px] leading-[18px] font-[600]">Датка</p>
                </Link>
                <Link to={`/news/search/Новость`} className="mb-[13px] flex items-center justify-between cursor-pointer hover:text-base_blue text-[#111111] duration-200">
                    <p className="text-inherit font-roboto text-[14px] leading-[18px] font-[600]">Новость</p>
                </Link>
                <Link to={`/news/search/Паспорт`} className="mb-[13px] flex items-center justify-between cursor-pointer hover:text-base_blue text-[#111111] duration-200">
                    <p className="text-inherit font-roboto text-[14px] leading-[18px] font-[600]">Паспорт</p>
                </Link>
                <Link to={`/news/search/Постановления`} className="mb-[13px] flex items-center justify-between cursor-pointer hover:text-base_blue text-[#111111] duration-200">
                    <p className="text-inherit font-roboto text-[14px] leading-[18px] font-[600]">Постановления</p>
                </Link>
            </BlockStyleds>
            <BlockStyleds title={<span className="text-[#111111]">Свежие записи</span>}>
                <div className="grid grid-cols-2 gap-[10px]">
                    {
                        news.data?.results?.slice(0, 5).map((item: any, index: number) => {
                            if (index == 0) {
                                return (
                                    <AssideBlock
                                        img={item.images[0].image}
                                        title={item.name}
                                        count={5}
                                        titleLink={`/news/${item.id}`}
                                        column={true}
                                        className="col-[1_/_3]"
                                    />
                                )
                            } else {
                                return (
                                    <div key={index}>
                                        <img src={item.images[0].image} className="h-[78px] object-cover w-[100%]" />
                                        <Link to={`/news/${item.id}`} className="text-[#111111] font-[600] font-roboto text-[14px] leading-[18px] block mt-[12px] limit_the_text">{item.name}</Link>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </BlockStyleds>
            <BlockStyleds title={<span className="text-[#111111]">Популярные поиски</span>}>
                <hr className="mb-[20px] bg-[#ececec] h-[1px] border-none" />
                <Link to={`/news/search/Датка`} className="mb-[13px] flex items-center justify-between cursor-pointer hover:text-base_blue text-[#111111] duration-200">
                    <p className="text-inherit font-roboto text-[14px] leading-[18px] font-[600]">Датка</p>
                </Link>
                <Link to={`/news/search/Новость`} className="mb-[13px] flex items-center justify-between cursor-pointer hover:text-base_blue text-[#111111] duration-200">
                    <p className="text-inherit font-roboto text-[14px] leading-[18px] font-[600]">Новость</p>
                </Link>
                <Link to={`/news/search/Паспорт`} className="mb-[13px] flex items-center justify-between cursor-pointer hover:text-base_blue text-[#111111] duration-200">
                    <p className="text-inherit font-roboto text-[14px] leading-[18px] font-[600]">Паспорт</p>
                </Link>
                <Link to={`/news/search/Постановления`} className="mb-[13px] flex items-center justify-between cursor-pointer hover:text-base_blue text-[#111111] duration-200">
                    <p className="text-inherit font-roboto text-[14px] leading-[18px] font-[600]">Постановления</p>
                </Link>
            </BlockStyleds>
        </div>
    )
}
