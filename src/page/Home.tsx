import CenterAsside from "../components/CenterAsside";
import Front from "../components/Front";
import LeftAsside from "../components/LeftAsside";
import RightAsside from "../components/RightAsside";

export default function Home() {
    return (
        <main className="bg-milk_gray">
            <Front />
            <div className="px-4 flex 1200px:grid 1200px:grid-cols-[300px_1fr] 1024px:grid-cols-[1fr_300px] 800px:grid 800px:grid-cols-[1fr_300px] 600px:grid-cols-1 800px:flex-wrap gap-[20px] justify-between">
                <LeftAsside showArchive={true} />
                <CenterAsside />
                <RightAsside />
            </div>
        </main>
    )
}
