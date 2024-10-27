import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import API from "../axios"

export default function LeftAsside({ showArchive }: { showArchive?: boolean }) {
    const [state, setState] = useState<any>(null)
    const news = useSelector((state: any) => state.news.news)
    const [archive, setArchive] = useState<any>(null)

    useEffect(() => {
        setState(news.data)
    }, [news])

    useEffect(() => {
        API.get("archives/")
            .then((res: any) => setArchive(res.data))
    }, [])

    const handle__End = () => {
        if (!!state?.next) {
            axios.get(state?.next)
                .then(res => {
                    setState((prev: any) => {
                        return {
                            ...prev,
                            next: res?.data?.next,
                            results: [...prev?.results, ...res?.data?.results]
                        }
                    })
                })
        }
    }

    return (
        <div className="w-[100%] max-w-[300px] min-w-[250px] flex flex-col gap-[20px] 1024px:hidden 600px:row-[2_/_2] 600px:col-[1_/_3] 800px:flex 800px:max-w-[100%]">
            <BlockStyleds title="Последние новости">
                {
                    !!state
                    &&
                    state?.results.map((item: any, index: number) => (
                        <AssideBlock img={item.images[0].image} title={item.name} date={(() => {
                            let a = item.created_at.split("-").reverse()
                            if (!!a && !!a[0]) {
                                let b = a[0].split("T")[0]
                                let d = [a[1], a[2]]
                                let c = [b, ...d]
                                return c.join(".")
                            }
                            return "0"
                        })()} count={0} titleLink={`/news/${item.id}`} key={index} />
                    ))
                }
                <button className="flex items-center justify-center gap-[5px] w-full bg-base_blue h-[28px] text-[13px] font-[700] font-roboto text-white" onClick={() => handle__End()}>
                    Посмотреть еще
                    <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                        <path d="M21 12C21 16.9706 16.9706 21 12 21C9.69494 21 7.59227 20.1334 6 18.7083L3 16M3 12C3 7.02944 7.02944 3 12 3C14.3051 3 16.4077 3.86656 18 5.29168L21 8M3 21V16M3 16H8M21 3V8M21 8H16" stroke="#FFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </BlockStyleds>
            {
                !!showArchive
                &&
                <BlockStyleds title="Архивы">
                    <div className="flex flex-col gap-[11px] mt-[20px]">
                        {
                            !!archive
                            &&
                            archive.map((item: any, index: number) => (
                        <Link to={`/archive`} className="text-[#111111] font-[600] font-roboto text-[14px] leading-[18px] block mt-[12px] limit_the_text">{item.date}</Link>
                            ))
                        }
                    </div>
                </BlockStyleds>
            }
        </div>
    )
}

export function BlockStyleds({ children, title }: { children: any, title: any }) {
    return (
        <div className="bg-white">
            <div className="border-t-[3px] border-solid border-t-base_blue px-[20px] leading-[52px] pb-[15px]">
                <h3 className="text-base_blue font-roboto text-[18px] font-[600] uppercase">{title}</h3>
                {children}
            </div>
        </div>
    )
}

export function AssideBlock({ img, title, count, titleLink, column, className, user, date }: { img: string, title: any, count: number, titleLink: string, column?: boolean, className?: string, user?: string, date?: string }) {
    return (
        <div className={`flex items-start gap-[15px] pb-[20px] border-b border-solid border-b-[#ececec] ${!!column ? "flex-col" : "mb-[20px]"} ${!!className ? className : ""}`}>
            <Link to={titleLink} className={`block`}>
            <img src={img} className={`object-cover ${!!column ? "w-[100%] h-[170px]" : "w-[100%] max-w-[108px] min-w-[90px] h-[72px]"}`} />
            <div className="flex flex-col gap-[6px]">
                <p className="text-[16px] mt-[10px] font-roboto font-[600] limit_the_text leading-[20px] block duration-200 hover:text-base_blue limit_the_text">{title}</p>
                <div className="flex items-center gap-[15px]">
                    {
                        column
                        &&
                        <p className="text-[#999] text-[12px] font-roboto font-[400] leading-[16px]">by ADMIN</p>
                    }
                    <div className="flex items-center gap-[5px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                            {/* <path d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> */}
                        </svg>
                        <p className="text-[#999] text-[12px] font-roboto font-[400] leading-[17px]"></p>
                    </div>
                    {/* <div className="flex items-center gap-[5px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 32 32" fill="none">
                            <path d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="text-[#999] text-[12px] font-roboto font-[400] leading-[17px]">{count}</p>
                    </div> */}
                </div>
            </div>
            </Link>
        </div>
    )
}