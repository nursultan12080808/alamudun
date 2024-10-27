import AssideRight from "../components/AssideRight";
import LinksNo from "../components/LinksNo";

export default function LiveInVilage() {
    return (
        <main className="bg-milk_gray 1024px:flex-col py-[20px] flex justify-center gap-[20px] relative">
            <LinksNo title="Жизнь села" pathTitle="Жизнь села" newsId={1} likes={1} />
            <AssideRight />
        </main>
    )
}
