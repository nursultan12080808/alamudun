import AssideRight from "../components/AssideRight";
import LinksNo from "../components/LinksNo";

export default function Kontakts() {
    return (
        <main className="bg-milk_gray py-[20px] 1024px:flex-col flex justify-center gap-[20px] relative">
            <LinksNo title="Контакты" pathTitle="Контакты" newsId={1} likes={1}>
                <div className="text-[20px] mb-[10px]">Ф.И.О Мамасалиева Ыкбал Абдуманаповна</div>
                <div className="text-[20px] font-[600] mb-[40px]">Номер: +996 990 602 005</div>

                <div className="text-[20px] mb-[10px]">Ф.И.О Маданбеков Бекзат Сайдимаматович</div>
                <div className="text-[20px] font-[600]">Номер: +996 557 088 886</div>
            </LinksNo>
                <AssideRight />
        </main>
    )
}
