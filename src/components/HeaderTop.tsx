
import { Link } from "react-router-dom";

const data = [
    { href: "/", src: "/assets/svg/fc.svg" },
    { href: "/", src: "/assets/svg/tw.svg" },
    { href: "/", src: "/assets/svg/inst.svg" },
    { href: "/", src: "/assets/svg/tg.svg" },
    { href: "/", src: "/assets/svg/wh.svg" },
]

export default function HeaderTop() {
    return (
        <div className="bg-base_blue py-2 600px:py-2.5 flex items-center justify-end 600px:justify-center gap-2.5 px-12">
            {
                data.map((item: any, index: number) => (
                    <Link key={index} to={item.href} className="w-5 h-5 block">
                        <img src={item.src} className="full_width object-cover" />
                    </Link>
                ))
            }
        </div>
    )
}
