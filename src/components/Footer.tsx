
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AssideBlock } from "./LeftAsside";
import { useSelector } from "react-redux"

export default function Footer() {
    const [data, setData] = useState<any>(null)
    const news = useSelector((state: any) => state.news.news)

    useEffect(() => {
        if (!!news.data) {
            setData([
                { title: "Недавние новости", children: [news.data?.results[0], news.data?.results[1], news.data?.results[2]] },
                { title: "Недавние новости", children: [news.data?.results[3], news.data?.results[4], news.data?.results[5]] },
                { title: "Недавние новости", children: [news.data?.results[6], news.data?.results[7], news.data?.results[8]] },
            ])
        }
    }, [news])

    return (
        <footer>
            <div className="px-4 bg-base_blue justify-between flex 1024px:flex-wrap gap-[30px] pt-[47px] pb-[26px]">
                {
                    !!data
                    &&
                    data.map((item: any, index: number) => (
                        <FooterBlock
                            key={index}
                            title={item.title}
                        >
                            {
                                item.children.map((el: any, ind: number) => {
                                    if (!!el) {
                                        return (
                                            <AssideBlock
                                                key={ind}
                                                img={el?.images[0].image}
                                                title={<span className="text-white">{el?.name}</span>}
                                                date={(() => {
                                                    let a = el?.created_at.split("-").reverse()
                                                    console.log(a[0].split("T")[0]);
                                                    let b = a[0].split("T")[0]
                                                    let d = [a[1], a[2]]
                                                    let c = [b, ...d]
                                                    return c.join(".")
                                                })()}
                                                count={0}
                                                titleLink={`/news/${el.id}`}
                                            />
                                        )
                                    } else {
                                        return (
                                            <div></div>
                                        )
                                    }
                                })
                            }
                        </FooterBlock>
                    ))
                }
                <FooterBlock title="Контакты">
                    <div className="max-w-[300px] 600px:max-w-[100%] 600px:min-w-[100%] w-[100%] min-w-[200px] flex flex-col gap-[10px]">
                        <Link to={`/news/search/Без категории`} className="flex flex-col items-start cursor-pointer text-white duration-200 mb-[20px]">
                            <p className="text-inherit font-roboto text-[14px] leading-[18px] font-[600] mb-[10px]">Мамасалиева Ыкбал </p>
                            <p className="text-inherit font-roboto text-[14px] leading-[18px] font-[600]">+996 990 602 005</p>
                        </Link>
                        <Link to={`/news/search/Новости`} className="flex flex-col items-start cursor-pointer text-white duration-200">
                            <p className="text-inherit font-roboto text-[14px] leading-[18px] font-[600] mb-[10px]">Маданбеков Бекзат</p>
                            <p className="text-inherit font-roboto text-[14px] leading-[18px] font-[600]">+996 557 088 886</p>
                        </Link>
                    </div>
                </FooterBlock>
            </div>
            <div className="px-4 bg-[#1e73be] h-[58px] py-[11px] text-white text-[12px] font-roboto font-[500] text-center">
                2020 Датка АО | Все права защищены
            </div>
        </footer>
    )
}

function FooterBlock({ children, title }: { children: any, title: string }) {
    return (
        <div className="max-w-[300px] 600px:max-w-[100%] 600px:min-w-[100%] min-w-[200px] w-[100%]">
            <h3 className="text-white font-roboto font-[600] text-[18px] leading-[20px] uppercase pb-[16px] mb-[20px] border-b-[1px] border-solid border-b-[#eaeaea]">{title}</h3>
            {children}
        </div>
    )
}

