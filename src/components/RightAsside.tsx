
import { AssideBlock, BlockStyleds } from "./LeftAsside";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export default function RightAsside() {
    const news = useSelector((state: any) => state.news.news)

    console.log(news?.data?.results);

    return (
        <div className="w-[100%] max-w-[300px] min-w-[250px] flex flex-col 800px:max-w-[100%]">
            <div className="w-[100%] bg-[url(/assets/img/email_fon.jpg)] bg-cover bg-center px-[20px] py-[20px]">
                <img src="/assets/img/email.png" className="w-[145px] h-[145px] object-cover object-bottom mx-auto" />
                <Link
                    to={"/kontakty"}
                    className="block bg-[linear-gradient(rgb(29,_98,_240)_0%,_rgb(26,_214,_253)_100%)] mt-[20px] w-full h-[67px] text-[16px] leading-[17px] font-roboto font-[700] text-white flex items-center justify-center"
                >
                    ОНЛАЙН ОБРАЩЕНИЕ
                </Link>
            </div>
            <BlockStyleds title="Недавние посты">
                {
                    !!news.data
                    &&
                    news?.data?.results.filter((_: any, index: number) => index <= 3).map((item: any, index: number) => (
                        <AssideBlock
                            key={index}
                            img={item.images[0].image}
                            title={item.name}
                            count={item.comments?.length}
                            date={(() => {
                                let a = item?.created_at.split("-").reverse()
                                let b = a[0].split("T")[0]
                                let d = [a[1], a[2]]
                                let c = [b, ...d]
                                return c.join(".")
                            })()}
                            titleLink={`/news/${item.id}`}
                            column={true}
                            user={item.user.email}
                        />
                    ))
                }
            </BlockStyleds>
        </div>
    )
}
