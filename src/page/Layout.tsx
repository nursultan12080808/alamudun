
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderTop from "../components/HeaderTop";
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { FetchNews } from "../redux/slice/NewsSlice";

export default function Layout() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FetchNews() as any)
    }, [])

    return (
        <div>
            <HeaderTop />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
