
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function LinksNo({ title, children, pathTitle, newsId, likes }: { title: string, pathTitle: string, newsId: number, likes: number, children?: any }) {
    return (
        <div className="bg-white p-[20px] max-w-[760px] 1024px:max-w-[100%] h-[max-content] w-[100%] 1024px:static sticky top-[90px] left-0">
            <div className="flex items-center gap-[5px] text-[#999999] text-[13px] font-roboto leading-[16px] font-[400] mb-[10px]">
                <Link to="/">Главная</Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#999999" width="8px" height="8px" viewBox="0 0 32 32">
                    <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z" />
                </svg>
                <span>{pathTitle}</span>
            </div>
            <h3 className="text-[#111111] leading-[36px] text-[30px] font-roboto font-[600] mb-[40px]">{title}</h3>
            {
                children
            }
            <Share newsId={newsId} likes={likes} unchangebl={true} />
        </div>
    )
}

export function Share({ newsId, likes, unchangebl }: { newsId: number, likes: number, unchangebl: boolean }) {
    const [state, setState] = useState(0)

    useEffect(() => {
        setState(likes)
    }, [likes])

    return (
        <div></div>
    )
}