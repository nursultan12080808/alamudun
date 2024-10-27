import { useState, useEffect } from "react";
import { json } from "react-router-dom";
import AssideRight from "../components/AssideRight";
import LinksNo from "../components/LinksNo";
import API, { AUTHAPI } from "../axios";

export default function Administration() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        API.get("administartions/")
            .then((res: any) => {
                setUser(res.data)
            })
    }, []) // Пустой массив зависимостей для вызова только один раз при монтировании



    return (
        <main className="bg-milk_gray 1024px:flex-col py-[20px] flex justify-center gap-[20px] relative">
            <LinksNo title="Администрация" pathTitle="Администрация" newsId={1} likes={0}>
                    { !!user 
                        && 
                        user.map((item:any, index: number) => (
                            <div className="mb-[40px]">
                            <div className="text-[18px] font-[500] mb-[10px]">Ф.И.О: {item?.name}</div>
                            <div className="text-[18px] font-[500]">Должность: {item?.job?.name}</div>    
                        </div>
                        ))
                    }
            </LinksNo>
            <AssideRight />
        </main>
    );

}
