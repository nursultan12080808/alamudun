import { useEffect, useState } from "react";
import API from "../axios";
import AssideRight from "../components/AssideRight";
import LinksNo from "../components/LinksNo";

export default function Chapter() {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        API.get("chapters/")
            .then((res: any) => {
                setState(res.data)
            })
    }, [])

    console.log(state);


    return (
        <main className="bg-milk_gray 1024px:flex-col py-[20px] flex justify-center gap-[20px] relative px-4">
            <LinksNo title="Глава" pathTitle="Глава" newsId={0} likes={0}>
                {
                    !!state
                    &&
                    state.map((item: any, index: number) => (
                        <div key={index} className="flex gap-[22px] mb-[20px] 425px:flex-col">
                            <img src={item.image} className="w-[188px] h-[260px] object-cover 425px:w-[100%] 425px:h-[100%]" />
                            <div>
                                <h2 className="text-[#666] font-roboto text-[15px] font-[400]"><span className="font-[700]">{item.firt_name} {item.last_name} {item.surname} </span>{item.bio}</h2>
                            </div>
                        </div>
                    ))
                }
            </LinksNo>
            <AssideRight />
        </main>
    )
}
