import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import API, { AUTHAPI } from "../axios"
import AssideRight from "../components/AssideRight"
import { Share } from "../components/LinksNo"

export default function History() {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        API.get("archives/")
            .then((res: any) => {
                setState(res.data)
            })
    }, [])

    return (
        <main className="bg-milk_gray relative">
            <div className="bg-[url(/assets/img/docs_fon.jpg)] w-[100%] flex flex-col justify-center items-center py-[80px]">
                <h1 className="text-white font-roboto pb-[14px] text-[30px] leading-[33px] font-[800] relative before:absolute before:bottom-0 before:left-[50%] before:translate-x-[-50%] before:content-[''] before:w-[40px] before:h-[1px] before:bg-white before:opacity-[80%]">История</h1>
                <div className="text-white font-[500] flex items-center gap-[10px] mt-[23px]">
                    <Link to="/" className="opacity-[80%] hover:text-base_blue duration-200">Главная</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFF" width="8px" height="8px" viewBox="0 0 32 32">
                        <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z" />
                    </svg>
                    <Link to="/archive" className="opacity-[80%] hover:text-base_blue duration-200">История</Link>
                </div>
            </div>
            <div className="flex 800px:flex-col justify-center gap-[20px] py-[20px] px-4">
                <div className="w-[800px] 800px:w-[100%] h-[max-content] bg-white p-[20px]">
                    <h2 className="text-[16px] text-center font-roboto text-[#666] leading-[18px] mb-[20px]">ДАТКА ГОСУДАРСТВЕННЫЙ АРХИВ</h2>
                    <h2 className="text-[16px] text-center font-roboto text-[#666] leading-[18px] mb-[20px]">ДАЙТКА АЙЫЛ ОКМОТУ</h2>
                    <div className="my-[50px]">
                        {
                            !!state
                            &&
                            state.map((item: any, index: number) => (
                                <div key={index} className="flex flex-col border border-[#dedede] p-[10px]">
                                    <div className="w-full p-[10px] pb-[10px] text-start font-roboto text-[14px] leading-[50px] font-[600] text-black" dangerouslySetInnerHTML={{ __html: item.date }} />
                                    <div className="w-full p-[10px] pb-[10px] text-start font-roboto text-[14px] leading-[30px] font-[400] text-grey" dangerouslySetInnerHTML={{ __html: item.description }} />
                                </div>

                            ))
                        }
                    </div>
                    <Share newsId={1} likes={0} unchangebl={true} />
                </div>
                <AssideRight />
            </div>
        </main>
    )
}
