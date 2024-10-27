
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Administration from "../page/Administration"
import Ao from "../page/Ao"
import Chapter from "../page/Chapter"
import Docs from "../page/Docs"
import Documenty from "../page/Documenty"
import History from "../page/History"
import Home from "../page/Home"
import Kontakts from "../page/Kontakts"
import Layout from "../page/Layout"
import LiveInVilage from "../page/LiveInVilage"
import LogIn from "../page/LogIn"
import News from "../page/News"
import NewsBlock from "../page/NewsBlock"
import NewsLayout from "../page/NewsLayout"
import Online from "../page/Online"
import Registration from "../page/Registration"
import SotsRosvitia from "../page/SotsRosvitia"
import SearchNews from "../page/SsearchNews"
import Statistica from "../page/Statistica"

export default function index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="alamudunskij-ao" element={<Ao />} />
                    <Route path="administratsiya" element={<Administration />} />
                    <Route path="dokumenty" element={<Documenty />} />
                    <Route path="onlajn-obrashhenie" element={<Online />} />
                    <Route path="kontakty" element={<Kontakts />} />
                    <Route path="news/page/:id" element={<NewsLayout />}>
                        <Route index element={<News />} />
                    </Route>
                    <Route path="news/search/:s" element={<NewsLayout />}>
                        <Route index element={<SearchNews />} />
                    </Route>
                    <Route path="news/:id" element={<NewsLayout />}>
                        <Route index element={<NewsBlock />} />
                    </Route>
                    <Route path="statistika" element={<Statistica />} />
                    <Route path="sotsialnoe-razvitie" element={<SotsRosvitia />} />
                    <Route path="zhizn-sela" element={<LiveInVilage />} />
                    <Route path="chapter" element={<Chapter />} />
                    <Route path="docs" element={<Docs />} />
                    <Route path="archive" element={<History />} />
                </Route>
                <Route path="registration" element={<Registration />} />
                <Route path="login" element={<LogIn />} />
            </Routes>
        </BrowserRouter>
    )
}
