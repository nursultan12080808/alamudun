import { Outlet } from "react-router-dom";
import AssideRight from "../components/AssideRight";
import LeftAsside from "../components/LeftAsside";

export default function NewsLayout() {
    return (
        <main className="bg-milk_gray py-[20px] px-4 flex justify-between gap-[20px] relative 800px:grid 800px:grid-cols-1">
            <LeftAsside />
            <Outlet />
            <AssideRight />
        </main>
    )
}
