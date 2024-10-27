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
            <div className="flex justify-center gap-[20px] mt-[20px] px-4 800px:flex-col">
                <div className="w-[800px] 800px:w-[100%] h-[max-content] bg-white p-[20px]">
                    {
                        !!state
                        &&
                        state.map((item: any, index: number) => (
                            <div key={index} className="pt-[40px] border-b border-solid border-b-[#dedede] pb-[40px]">
                                <h6 className="font-[400] font-roboto text-[#111] text-[36px] capitalize">{item.name}</h6>
                                {
                                    item.dock_files.map((item: any, index: number) => (
                                        <Link to={item.file} key={index} className="text-[#3f51b5] text-[16px] font-roboto font-[400] leading-[19px] mt-[17px] block break-words">{item.name_file}</Link>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <AssideRight />
            </div>
        </main>
    )
}

