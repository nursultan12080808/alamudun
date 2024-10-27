import AssideRight from "../components/AssideRight";
import { useEffect, useState } from "react";
import LinksNo from "../components/LinksNo";

export default function Online() {

    const [postanovlenia, setPostanovlenia] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPostanovlenia = async () => {
            try {
                const response = await fetch('https://aodatka.pythonanywhere.com/api/v1/postanovlenies/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPostanovlenia(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPostanovlenia();
    }, []);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    return (
        <main className="bg-milk_gray py-[20px] 1024px:flex-col flex justify-center gap-[20px] relative">
            <LinksNo title="Постановление" pathTitle="Постановление" newsId={1} likes={1} >
                <div className="postanovlenia-list">
                    {postanovlenia.length > 0 ? (
                        postanovlenia.map((postanovlenie) => (
                            <div key={postanovlenie.id} className="postanovlenie-item border border-gray-400 p-4 mb-4">
                                <h2 className="text-xl font-bold">{postanovlenie.title}</h2>
                                <p>{postanovlenie.content}</p>
                                <p className="text-gray-600">Дата издания: {new Date(postanovlenie.date_issued).toLocaleDateString()}</p>
                                <p>Номер: {postanovlenie.number}</p>
                                <p>Кем издано: {postanovlenie.issued_by}</p>
                            </div>
                        ))
                    ) : (
                        <div>Нет доступных постановлений.</div>
                    )}
                </div>
            </LinksNo>
            <AssideRight />
        </main>
    )
}