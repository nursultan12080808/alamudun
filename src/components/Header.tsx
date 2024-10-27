
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"

const data = [
    {
        href: "/",
        text: "Главная",
        model: false
    },
    {
        href: "/alamudunskij-ao",
        text: "Датка",
        model: true,
        links: [
            {
                href: "/docs",
                text: "Айыльный Кенеш"
            },
            {
                href: "/chapter",
                text: "Глава"
            },
            {
                href: "/archive",
                text: "История"
            },
        ]
    },
    {
        href: "/administratsiya",
        text: "Администрация",
        model: false
    },
    {
        href: "/dokumenty",
        text: "Документы",
        model: false
    },
    {
        href: "/news/page/1",
        text: "Новости",
        model: false
    },
    {
        href: "/onlajn-obrashhenie",
        text: "Постановление",
        model: false
    },
    {
        href: "/kontakty",
        text: "Контакты",
        model: false
    }
]

export default function Header() {
    const location = useLocation()
    const [state, setState] = useState(false)
    const [burger, setBurger] = useState(false)
    const locationChange = useNavigate()

    const handle_Close = (e: any) => {
        if (!e.target.closest("#closeBurger")) {
            setBurger(false)
        }
    }

    const handle__Search = (e: any) => {
        if (e.keyCode == 13) {
            locationChange(`/news/search/${e.target.value}`)
        }
    }

    return (
        <header className="conteiner flex items-center justify-between px-4 bg-white sticky top-0 left-0 z-[9] 600px:py-0.5 gap-[10px] py-[2px]">
            <button className="w-[54px] h-[54px] 600px:w-[34px] 600px:h-[34px] hidden 1024px:block" onClick={() => setBurger(true)}>
                <img src="/assets/svg/burger.svg" className="w-[100%] h-[100%] object-contain" />
            </button>
            {
                !!burger
                &&
                <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,_0,_0,_0.5)] z-[10]" onClick={handle_Close}>
                    <div className="w-[30%] 600px:w-[50%] 425px:w-[80%] h-[100%] bg-white p-[20px] overflow-y-auto" id="closeBurger">
                        <Link to="/" className="w-52 block h-[75px]">
                            <img src="/assets/img/logo.png" className="full_width object-contain" />
                        </Link>
                        <div className="flex justify-center gap-[12px] mt-[10px] mb-[20px]">
                            <Link to="/" className="w-[20px] h-[20px] block">
                                <img src="/assets/svg/fc.svg" className="w-[100%] h-[100%] invert-[1]" />
                            </Link>
                            <Link to="/" className="w-[20px] h-[20px] block">
                                <img src="/assets/svg/tw.svg" className="w-[100%] h-[100%] invert-[1]" />
                            </Link>
                            <Link to="/" className="w-[20px] h-[20px] block">
                                <img src="/assets/svg/inst.svg" className="w-[100%] h-[100%] invert-[1]" />
                            </Link>
                            <Link to="/" className="w-[20px] h-[20px] block">
                                <img src="/assets/svg/tg.svg" className="w-[100%] h-[100%] invert-[1]" />
                            </Link>
                            <Link to="/" className="w-[20px] h-[20px] block">
                                <img src="/assets/svg/wh.svg" className="w-[100%] h-[100%] invert-[1]" />
                            </Link>
                        </div>
                        <div className="flex flex-col gap-6 gap-y-[0]">
                            {
                                data.map((item: any, index: number) => (
                                    <div className="relative flex items-center flex-wrap justify-between gap-2 gap-y-0 group border-b border-solid border-b-[#ececec]" key={index}>
                                        <Link to={item.href} className={`header_link hover:text-diff_blue font-[400] leading-[23px] uppercase text-[14px] border-t-[transparent] ${location.pathname == item.href ? "text-diff_blue" : "text-base_black border-transparent"}`}>
                                            {item.text}
                                        </Link>
                                        {
                                            item.model
                                            &&
                                            <img src="/assets/svg/arrow_bottom.svg" className="w-3.5 h-3.5 object-cover" />
                                        }
                                        {
                                            item.model
                                            &&
                                            <div className="w-[100%] group-hover:flex hidden bg-white z-[11] py-2.5 left-0 flex-col border-t-[3px] border-solid border-t-[transparent]">
                                                {
                                                    item.links.map((itemel: any, index: number) => (
                                                        <Link key={index} to={itemel.href} className="px-4 py-1.5 text-[14px] font-[400] uppercase font-roboto text-diff_blue hover:text-white duration-200 hover:bg-base_blue">
                                                            {itemel.text}
                                                        </Link>
                                                    ))
                                                }
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
            <Link to="/" className="w-52 h-[75px] 600px:h-[48px] 600px:w-[140px] flex items-center 600px:gap-[5px]">
                <img src="/assets/img/gerb.png" className="full_width object-contain" />
                <p className="text-base_blue font-[700] leading-[18px] uppercase tracking-[1px] text-[14px] 600px:text-[12px] 600px:leading-[14px]">Датка АйЫльный Аймак</p>
            </Link>
            <div className="flex items-center gap-6 gap-y-[0] flex-wrap 1024px:hidden">
                {
                    data.map((item: any, index: number) => (
                        <div className="relative flex items-center gap-2 group" key={index}>
                            <Link to={item.href} className={`header_link hover:text-diff_blue hover:border-t-diff_blue ${location.pathname == item.href ? "text-diff_blue border-t-diff_blue" : "text-base_black border-transparent"}`}>
                                {item.text}
                            </Link>
                            {
                                item.model
                                &&
                                <img src="/assets/svg/arrow_bottom.svg" className="w-3.5 h-3.5 object-cover" />
                            }
                            {
                                item.model
                                &&
                                <div className="w-[calc(100%_+_200px)] flex group-hover:translate-y-full z-[9] bg-white absolute bottom-0 py-2.5 -translate-y-full left-0 flex-col border-t-[3px] border-solid border-t-diff_blue">
                                    {
                                        item.links.map((itemel: any, index: number) => (
                                            <Link key={index} to={itemel.href} className={`px-4 py-1.5 text-xl font-bold font-roboto text-diff_blue hover:text-white duration-200 hover:bg-base_blue ${location.pathname == itemel.href ? "bg-base_blue text-white" : ""}`}>
                                                {itemel.text}
                                            </Link>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
            <div className="relative">
                <button className="w-6 h-6 group" onClick={() => setState(prev => !prev)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
                        <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="fill-white stroke-black group-hover:stroke-diff_blue" />
                    </svg>
                </button>
                {
                    state
                    &&
                    <div className="bg-white border-t-[3px] border-solid border-t-diff_blue p-5 absolute bottom-0 left-0 -translate-x-[92%] translate-y-[150%] 600px:translate-y-[116%] w-[300px]">
                        <div>
                            <div className="flex items-center gap-2.5 border border-solid border-milk_color p-1 px-2">
                                <input type="text" placeholder="Поиск..." onKeyDown={handle__Search} className="font-normal text-base font-roboto text-black_text placeholder:text-black_text outline-none w-full" />
                                <button className="w-5 h-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
                                        <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="fill-white stroke-black" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                }
            </div>
        </header>
    )
}
