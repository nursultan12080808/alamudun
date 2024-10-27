
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API, { AUTHAPI } from "../axios";
import AssideRight from "../components/AssideRight";

export default function Docs() {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        API.get("documents/")
            .then((res: any) => {
                setState(res.data)
            })
    }, [])

    return (
        <main className="bg-milk_gray relative">
            <div className="bg-[url(/assets/img/docs_fon.jpg)] w-[100%] flex flex-col justify-center items-center py-[80px]">
                <h1 className="text-white font-roboto pb-[14px] text-[30px] leading-[33px] font-[800] relative before:absolute before:bottom-0 before:left-[50%] before:translate-x-[-50%] before:content-[''] before:w-[40px] before:h-[1px] before:bg-white before:opacity-[80%]">Айыльный Кенеш</h1>
                <div className="text-white font-[500] flex items-center gap-[10px] mt-[23px]">
                    <Link to="/" className="opacity-[80%] hover:text-base_blue duration-200">Главная</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFF" width="8px" height="8px" viewBox="0 0 32 32">
                        <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z" />
                    </svg>
                    <Link to="/docs" className="opacity-[80%] hover:text-base_blue duration-200">Айыльный Кенеш</Link>
                </div>
            </div>
            <div className="flex justify-center gap-[20px] mt-[20px] px-4 800px:flex-col">
                <div className="w-[800px] 800px:w-[100%] h-[max-content] bg-white p-[20px]">
                    {
                        state
                        &&
                            <div key={0} className="pt-[40px] border-b border-solid border-b-[#dedede] pb-[40px]">
                                <h6 className="font-[400] font-roboto text-[#111] text-[36px] capitalize">{state[0].name}</h6>
                                {
                                    state[0].dock_files.map((item: any, index: number) => (
                                        <Link to={item.file} key={index} className="text-[#3f51b5] text-[16px] font-roboto font-[400] leading-[19px] mt-[17px] block break-words">{item.name_file}</Link>
                                    ))
                                }
                            </div>
                    }
                </div>
                <AssideRight />
            </div>
        </main>
    )
}
