
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../axios";

export default function SearchNews() {
    const params: any = useParams()
    const [count, setCount] = useState(0)
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        API.get(`news/??category=&user=&location=&rating=&name=${params.s}`)
            .then((res: any) => {
                setState(res.data)
                setCount(Math.ceil(res.payload?.count / 6))
            })
    }, [params])

    return (
        <div className="max-w-[100%] w-[100%] 600px:col-[1_/_3] bg-white p-[20px] h-[max-content]">
            <div className="flex items-center gap-[5px] text-[#999999] text-[13px] font-roboto leading-[16px] font-[400] mb-[10px]">
                <Link to="/" className="hover:text-base_blue duration-200">Главная</Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#999999" width="8px" height="8px" viewBox="0 0 32 32">
                    <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z" />
                </svg>
                <Link to="/news/page/1" className="hover:text-base_blue duration-200">Новости</Link>
            </div>
            <h2 className="text-[#000] text-[24px] font-[700] font-roboto leading-[28px]">Результат по поиску: {params.s}</h2>
            {
                !!state?.results.length
                    ?
                    state?.results.map((item: any, index: number) => {
                        if (index == 0) {
                            return (
                                <div className="mt-[20px] ">
                                    {item.images && item.images.length > 0 ? (
                                        <img
                                            src={item.images[0].image}
                                            alt="News"
                                            className="w-[100%] mb-[20px] max-w-[270px] 1024px:max-w-[100%] min-w-[220px] h-[180px] 1024px:h-[250px] object-cover"
                                        />
                                    ) : (
                                        <div className="w-[100%] max-w-[270px] min-w-[220px] h-[180px] 1024px:h-[250px] flex items-center justify-center bg-gray-200">
                                            <p className="text-gray-500">Изображение не доступно</p>
                                        </div>
                                    )}
                                    <div className="bg-black text-white font-[500] text-[10px] px-[5px] py-[1px] w-[max-content] mb-[10px]">Новости</div>
                                    <Link to={`/news/${item.id}`} className="font-roboto text-[20px] leading-[22px] font-[600] mb-[8px]">{item.name}</Link>
                                    <div className="flex items-center gap-[15px]">
                                        <p className="text-[#999] text-[12px] font-roboto font-[400] leading-[16px]">by {item.user.email}</p>
                                        <p className="flex gap-[5px] text-[#999] text-[12px] font-roboto font-[400]"><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>{(() => {
                                            let a = item?.created_at.split("-").reverse()
                                            if (!!a && !!a[0]) {
                                                let b = a[0].split("T")[0]
                                                let d = [a[1], a[2]]
                                                let c = [b, ...d]
                                                return c.join(".")
                                            }
                                            return 0
                                        })()}</p>
                                        <div className="flex items-center gap-[5px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none">
                                                <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <p className="text-[#999] text-[12px] font-roboto font-[400]">{item.views}</p>
                                        </div>
                                        <div className="flex items-center gap-[5px]">
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className="mt-[20px] ">
                                    {item.images && item.images.length > 0 ? (
                                        <img
                                            src={item.images[0].image}
                                            alt="News"
                                            className="w-[100%] mb-[20px] max-w-[270px] 1024px:max-w-[100%] min-w-[220px] h-[180px] 1024px:h-[250px] object-cover"
                                        />
                                    ) : (
                                        <div className="w-[100%] max-w-[270px] min-w-[220px] h-[180px] 1024px:h-[250px] flex items-center justify-center bg-gray-200">
                                            <p className="text-gray-500">Изображение не доступно</p>
                                        </div>
                                    )}
                                    <div className="bg-black text-white font-[500] text-[10px] px-[5px] py-[1px] w-[max-content] mb-[10px]">Новости</div>
                                    <Link to={`/news/${item.id}`} className="font-roboto text-[20px] leading-[22px] font-[600] mb-[8px]">{item.name}</Link>
                                    <div className="flex items-center gap-[15px]">
                                        <p className="text-[#999] text-[12px] font-roboto font-[400] leading-[16px]">by {item.user.email}</p>
                                        <p className="flex gap-[5px] text-[#999] text-[12px] font-roboto font-[400]"><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>{(() => {
                                            let a = item?.created_at.split("-").reverse()
                                            if (!!a && !!a[0]) {
                                                let b = a[0].split("T")[0]
                                                let d = [a[1], a[2]]
                                                let c = [b, ...d]
                                                return c.join(".")
                                            }
                                            return 0
                                        })()}</p>
                                        <div className="flex items-center gap-[5px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none">
                                                <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <p className="text-[#999] text-[12px] font-roboto font-[400]">{item.views}</p>
                                        </div>
                                        <div className="flex items-center gap-[5px]">
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                    :
                    <div className="w-[100%] mt-[50px] flex items-center justify-center">
                        <h2 className="text-[#000] text-[24px] font-[700] font-roboto leading-[28px]">Не найдена</h2>
                    </div>
            }
            <div className="flex gap-[10px] mt-[20px]">
                {
                    !!state?.previous
                    &&
                    <Link to={`/news/page/${+params.id - 1}`} className="w-[32px] h-[32px] duration-200 flex items-center group justify-center border border-solid border-[#dedede] hover:bg-base_blue hover:border-base_blue">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="15px" height="15px" viewBox="0 0 32 32" version="1.1">
                            <path d="M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z" className="fill-[#111111] group-hover:fill-[#FFFF] duration-200" />
                        </svg>
                    </Link>
                }
                <Pagination count={count} params={params} />
                {
                    !!state?.next
                    &&
                    <Link to={`/news/page/${+params.id + 1}`} className="w-[32px] h-[32px] duration-200 flex items-center group justify-center border border-solid border-[#dedede] hover:bg-base_blue hover:border-base_blue">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="15px" height="15px" viewBox="0 0 32 32">
                            <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z" className="fill-[#111111] group-hover:fill-[#FFFF] duration-200" />
                        </svg>
                    </Link>
                }
            </div>
        </div>
    )
}

function Pagination({ count, params }: { count: number, params: any }): any {
    const [data, setData] = useState([])

    useEffect(() => {
        let content: any = []

        for (let i = 1; i <= count; i++) {
            content.push(i)
        }

        setData(content)
    }, [count])

    return (
        data.map((item: any, index: number) => (
            <Link
                key={index}
                to={`/news/page/${item}`}
                className={`w-[32px] h-[32px] flex items-center justify-center border border-solid border-[#dedede] text-[#111111] leading-[32px] text-[14px] font-roboto font-[600] hover:text-white hover:bg-base_blue hover:border-base_blue ${+params.id == +item ? "text-white bg-base_blue border-base_blue" : ""}`}
            >
                {item}
            </Link>
        ))
    )
}