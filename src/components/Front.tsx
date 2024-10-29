
import axios from "axios"
import { Link } from "react-router-dom"
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

const linksBtn: any = [
    { href: "/", src: "/assets/svg/file.svg" },
    { href: "/", src: "/assets/svg/file.svg" },
    { href: "/", src: "/assets/svg/file.svg" },
    { href: "/", src: "/assets/svg/file.svg" },
    { href: "/", src: "/assets/svg/file.svg" },
    { href: "/", src: "/assets/svg/file.svg" },
    { href: "/", src: "/assets/svg/file.svg" },
    { href: "/", src: "/assets/svg/file.svg" },
    { href: "/", src: "/assets/svg/file.svg" }
]

export default function Front() {
    const [tags, setTags] = useState<any>(null)
    const news = useSelector((state: any) => state.news.news)

    useEffect(() => {
        axios.get(`https://aodatka.pythonanywhere.com/api/v1/tags/`)
            .then(res => {
                setTags(res)
            })
    }, [])

    return (
        <div className="px-4 py-[20px]">
            <div className="flex justify-between 800px:flex-col gap-[20px]">
                <div className="relative w-[100%] max-w-[77%] 800px:max-w-[100%]">
                    <Swiper
                        navigation={{
                            nextEl: ".next-slide-button",
                            prevEl: ".prev-slide-button"
                        }}
                        modules={[Navigation]}
                        className="mySwiper h-[600px] 600px:h-[290px] group duration-200"
                    >
                        {
                            !!news.data
                            &&
                            news?.data?.results.map((item: any, index: number) => (
                                <SwiperSlide key={index}>
                                    <SwiperBlock
                                        img={item.images[0].image}
                                        title={item.name}
                                        view={item.views}
                                        count={0}
                                        newsLink="/"
                                        date={(() => {
                                            let a = item?.created_at.split("-").reverse()
                                            let b = a[0].split("T")[0]
                                            let d = [a[1], a[2]]
                                            let c = [b, ...d]
                                            return c.join(".")
                                        })()}
                                        titleLink={`/news/${item.id}`}
                                    />
                                </SwiperSlide>
                            ))
                        }
                        <div>
                            <button className="prev-slide-button slider_btn left-[3%] group-hover:opacity-[100%]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="15px" height="15px" viewBox="0 0 32 32" version="1.1">
                                    <path d="M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z" fill="#FFFF" />
                                </svg>
                            </button>
                            <button className="next-slide-button slider_btn right-[3%] group-hover:opacity-[100%]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="15px" height="15px" viewBox="0 0 32 32">
                                    <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z" fill="#FFFF" />
                                </svg>
                            </button>
                        </div>
                    </Swiper>
                </div>
                <div className="max-w-[300px] 800px:max-w-[100%] w-[100%] flex flex-col gap-[5px]">
                    {
                        !!tags
                        &&
                        tags?.data.map((item: any, index: number) => (
                            <AssideBtns key={index} href={linksBtn[index].href} text={item.name} src={linksBtn[index].src} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

function SwiperBlock({ img, title, view, count, newsLink, titleLink, date }: { img: string, title: string, view: number, count: number, newsLink: string, titleLink: string, date: string }) {
    return (
        <div className="relative h-[100%] before:duration-200 before:content-[''] before:absolute before:w-[100%] before:h-[90%] before:top-[0] before:left-[0] duration-200 hover:before:bg-[rgba(0,_0,_0,_0.3)] before:z-[1]">
            <img src={img} className="w-[100%] h-[90%] object-cover 600px:h-[203px]" />
            <div className="absolute 425:static 600px:translate-x-0 600px:w-[100%] bottom-0 left-[50%] 600px:left-[0] translate-x-[-50%] w-[95%] z-[2] flex flex-col bg-white px-[20px] py-[15px]">
                <Link to={newsLink} className="bg-base_blue text-white font-[500] text-[10px] px-[5px] py-[1px] mb-[5px] w-[max-content] 600px:hidden">Новости</Link>
                <Link to={titleLink} className="text-black text-[18px] 600px:text-[17px] font-[700] 425:text-[14px] leading-[21px] mb-[5px] hover:text-base_blue w-[92%] 600px:w-[86%] limit_the_text">{title}</Link>
                <div className="flex items-center gap-[15px] 600px:hidden">
                    <div className="flex items-center gap-[5px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                            <path d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="text-[#999] text-[12px] font-roboto font-[400]">{date}</p>
                    </div>
                    <div className="flex items-center gap-[5px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none">
                            <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="text-[#999] text-[12px] font-roboto font-[400]">{view}</p>
                    </div>
                </div>
                <div className="bg-diff_blue w-[100px] h-[100%] absolute top-0 right-0" style={{ clipPath: "polygon(32% 0, 100% 0, 100% 100%, 0% 100%)" }}></div>
            </div>
        </div>
    )
}

function AssideBtns({ href, text, src }: { href: string, text: string, src: string }) {
    return (
        <Link to={`/news/page/1`} className="bg-base_blue text-white text-[14px] flex items-center justify-center gap-[5px] w-full py-[20px] h-[77px] hover:bg-easy_blue duration-200">
            <img src={src} className="w-[18px] h-[18px] object-contain" />
            {text}
        </Link>
    )
}