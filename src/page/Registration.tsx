
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../axios"

export default function Registration() {
    const [avatar, setAvatar] = useState("")
    const [error, setError] = useState<any>({
        email: "",
        first_name: "",
        last_name: "",
        password1: "",
        password2: "",
        phone: "",
        avatar: ""
    })
    const location = useNavigate()

    const handle__Submit = (e: any) => {
        e.preventDefault()

        let a = new FormData(e.target)
        let b = Object.fromEntries(a.entries())

        API.post("/auth/register/", !!avatar ? b : { ...b, avatar: null }, { headers: !!avatar ? { "Content-Type": "multipart/form-data" } : { "Content-Type": "application/json" } })
            .then(() => location("/login"))
            .catch((res: any) => {
                setError((prev: any) => {
                    return {
                        ...prev,
                        ...res.response.data
                    }
                })
            })
    }

    const handle__Change = () => {
        setError(() => {
            return {
                email: "",
                first_name: "",
                last_name: "",
                password1: "",
                password2: "",
                phone: "",
                avatar: ""
            }
        })
    }

    const handle__Avatar = (e: any) => {
        let a: any = new FileReader()
        a.readAsDataURL(e.target.files[0])
        a.addEventListener('load', () => {
            setAvatar(a?.result)
        })
    }

    return (
        <div className="flex items-center justify-center w-[100%] h-[100%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-[20px] bg-[#2148C0]">
            <form className="max-w-[80%] w-[100%] 425px:max-w-[95%] 425px:h-[90%] rounded-[12px] flex flex-col mx-auto gap-[20px] h-[max-content] p-[32px] py-[50px] 1024px:h-[80%] overflow-auto bg-white" onChange={handle__Change} onSubmit={handle__Submit}>
                <h1 className="text-[#000] font-roboto font-[400] text-[28px] leading-[32px] mx-auto mb-[20px]">Регистрация</h1>
                <label className="w-[150px] min-w-[150px] max-w-[150px] h-[150px] min-h-[150px] max-h-[150px] rounded-[50%] bg-white border border-solid border-[gray] overflow-hidden mx-auto">
                    {
                        !!avatar
                            ?
                            <img src={avatar} className="w-full h-full object-cover" />
                            :
                            ""
                    }
                    <input type="file" onChange={handle__Avatar} className="hidden" name="avatar" />
                </label>
                <div className="flex gap-[20px] w-[100%] 600px:flex-col">
                    <div className="flex flex-col w-[100%]">
                        <label className="rounded-[10px] w-[100%] bg-white shadow-[0_0_5px_1px_rgba(0,_0,_0,_0.3)] p-[10px] px-[15px] flex items-center gap-[20px] cursor-pointer">
                            <div className="w-[20px] h-[20px]">
                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                        <path d="M15.3806 4.62338C15.3806 7.18074 12.9733 9.24672 9.99349 9.24672C7.01366 9.24672 4.60635 7.18074 4.60635 4.62338C4.60635 2.06603 7.01366 4.48202e-05 9.99349 4.48202e-05C12.9733 -0.0111227 15.3806 2.06603 15.3806 4.62338Z" fill="black" />
                                        <path d="M9.99349 11.1675C4.47624 11.1675 0 15.0091 0 19.7441C0 20.9837 1.1711 21.9999 2.62848 21.9999H17.3715C18.8159 21.9999 20 20.9949 20 19.7441C19.987 15.0091 15.5107 11.1675 9.99349 11.1675Z" fill="black" />
                                    </g>
                                </svg>
                            </div>
                            <input type="text" placeholder="Имя..." name="first_name" className={`font-[500] outline-none w-[100%] font-roboto text-[16px] text-[#000] placeholder:text-[#000] leading-[18px] h-[20px] opacity-[60%] ${!!error.first_name ? "border-b border-solid border-b-[red]" : ""}`} />
                        </label>
                        <p className="text-[12px] font-[400] font-roboto leading-[18px] text-[red] mt-[5px]">{error.first_name}</p>
                    </div>
                    <div className="flex flex-col w-[100%]">
                        <label className="rounded-[10px] w-[100%] bg-white shadow-[0_0_5px_1px_rgba(0,_0,_0,_0.3)] p-[10px] px-[15px] flex items-center h-[max-content] gap-[20px] cursor-pointer">
                            <div className="w-[20px] h-[20px]">
                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                        <path d="M15.3806 4.62338C15.3806 7.18074 12.9733 9.24672 9.99349 9.24672C7.01366 9.24672 4.60635 7.18074 4.60635 4.62338C4.60635 2.06603 7.01366 4.48202e-05 9.99349 4.48202e-05C12.9733 -0.0111227 15.3806 2.06603 15.3806 4.62338Z" fill="black" />
                                        <path d="M9.99349 11.1675C4.47624 11.1675 0 15.0091 0 19.7441C0 20.9837 1.1711 21.9999 2.62848 21.9999H17.3715C18.8159 21.9999 20 20.9949 20 19.7441C19.987 15.0091 15.5107 11.1675 9.99349 11.1675Z" fill="black" />
                                    </g>
                                </svg>
                            </div>
                            <input type="text" placeholder="Фамилия..." name="last_name" className={`font-[500] outline-none w-[100%] font-roboto text-[16px] text-[#000] placeholder:text-[#000] leading-[18px] h-[20px] opacity-[60%] ${!!error.last_name ? "border-b border-solid border-b-[red]" : ""}`} />
                        </label>
                        <p className="text-[12px] font-[400] font-roboto leading-[18px] text-[red] mt-[5px]">{error.last_name}</p>
                    </div>
                </div>
                <div className="flex 600px:flex-col gap-[20px]">
                    <div className="flex flex-col w-[100%]">
                        <label className="rounded-[10px] w-[100%] bg-white shadow-[0_0_5px_1px_rgba(0,_0,_0,_0.3)] p-[10px] px-[15px] flex items-center gap-[20px] cursor-pointer">
                            <div className="w-[20px] h-[20px]">
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                        <path d="M15.758 7.54902C15.7739 6.41669 15.7845 5.27727 15.7643 5.01637C15.5648 2.43225 12.8981 0.238585 9.69321 0.0229458C9.49257 0.00963477 9.29193 0.00164814 9.09554 -0.000126673C7.3482 -0.0152125 5.80679 0.441801 4.51168 1.35671C3.22824 2.26453 2.38429 3.60273 2.25584 4.9365C2.23248 5.17699 2.2293 6.3812 2.23036 7.55168C0.957537 7.76289 0 8.67159 0 9.75955V19.7446C0 20.9896 1.25372 21.9995 2.80042 21.9995H15.2006C16.7473 21.9995 18.0011 20.9896 18.0011 19.7446V9.75955C18 8.66804 17.0372 7.75756 15.758 7.54902ZM8.90127 2.3231C8.94904 2.32221 8.99575 2.32221 9.04246 2.32221C10.4013 2.33375 11.5913 2.89547 12.3079 3.86363C12.7091 4.40584 12.8514 5.99518 12.8907 7.50465H5.10828C5.15817 6.02357 5.29512 4.39962 5.66667 3.89469C6.38323 2.91943 7.56157 2.34706 8.90127 2.3231Z" fill="black" />
                                    </g>
                                </svg>
                            </div>
                            <input type="password" placeholder="Пароль..." name="password1" required className={`font-[500] outline-none w-[100%] font-roboto text-[16px] text-[#000] placeholder:text-[#000] leading-[18px] h-[20px] opacity-[60%] ${!!error.password1 ? "border-b border-solid border-b-[red]" : ""}`} />
                        </label>
                        <p className="text-[12px] font-[400] font-roboto leading-[18px] text-[red] mt-[5px]">{error.password1}</p>
                    </div>
                    <div className="flex flex-col w-[100%]">
                        <label className="rounded-[10px] w-[100%] bg-white shadow-[0_0_5px_1px_rgba(0,_0,_0,_0.3)] p-[10px] px-[15px] flex items-center gap-[20px] cursor-pointer">
                            <div className="w-[20px] h-[20px]">
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                        <path d="M15.758 7.54902C15.7739 6.41669 15.7845 5.27727 15.7643 5.01637C15.5648 2.43225 12.8981 0.238585 9.69321 0.0229458C9.49257 0.00963477 9.29193 0.00164814 9.09554 -0.000126673C7.3482 -0.0152125 5.80679 0.441801 4.51168 1.35671C3.22824 2.26453 2.38429 3.60273 2.25584 4.9365C2.23248 5.17699 2.2293 6.3812 2.23036 7.55168C0.957537 7.76289 0 8.67159 0 9.75955V19.7446C0 20.9896 1.25372 21.9995 2.80042 21.9995H15.2006C16.7473 21.9995 18.0011 20.9896 18.0011 19.7446V9.75955C18 8.66804 17.0372 7.75756 15.758 7.54902ZM8.90127 2.3231C8.94904 2.32221 8.99575 2.32221 9.04246 2.32221C10.4013 2.33375 11.5913 2.89547 12.3079 3.86363C12.7091 4.40584 12.8514 5.99518 12.8907 7.50465H5.10828C5.15817 6.02357 5.29512 4.39962 5.66667 3.89469C6.38323 2.91943 7.56157 2.34706 8.90127 2.3231Z" fill="black" />
                                    </g>
                                </svg>
                            </div>
                            <input type="password" placeholder="Подтвердить пароль..." name="password2" required className={`font-[500] outline-none w-[100%] font-roboto text-[16px] text-[#000] placeholder:text-[#000] leading-[18px] h-[20px] opacity-[60%] ${!!error.password2 ? "border-b border-solid border-b-[red]" : ""}`} />
                        </label>
                        <p className="text-[12px] font-[400] font-roboto leading-[18px] text-[red] mt-[5px]">{error.password2}</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 800px:grid-cols-2 600px:grid-cols-1 gap-[20px] w-[100%]">
                    <div className="flex flex-col">
                        <label className="rounded-[10px] w-[100%] bg-white shadow-[0_0_5px_1px_rgba(0,_0,_0,_0.3)] p-[10px] px-[15px] flex items-center gap-[20px] cursor-pointer">
                            <div className="w-[20px] h-[20px]">
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.7938 1.46918C19.7732 1.51207 19.7423 1.54424 19.7114 1.58714L12.8866 9.64076C12.1547 10.5094 11.1031 11.0027 9.98971 11.0027C8.88662 11.0027 7.8247 10.5094 7.09274 9.64076L0.18556 1.4799C0.0618482 1.78017 0 2.10188 0 2.44505V11.6783C0 14.059 1.85564 16 4.15461 16H15.8454C18.1341 16 20 14.0697 20 11.6783V2.44505C19.9897 2.10188 19.9175 1.76945 19.7938 1.46918Z" fill="black" fill-opacity="0.6" />
                                    <path d="M8.64946 8.21447C8.98966 8.62198 9.46394 8.84718 9.98971 8.84718C10.5155 8.84718 10.9897 8.62198 11.3299 8.21447L18.1547 0.16086C18.1753 0.128688 18.2062 0.107241 18.2372 0.0857928C18.0413 0.0321735 17.8351 0 17.6289 0H2.35049C2.1443 0 1.94841 0.0321735 1.75253 0.0857928L8.64946 8.21447Z" fill="black" fill-opacity="0.6" />
                                </svg>
                            </div>
                            <input type="email" placeholder="Email..." name="email" required className={`font-[500] outline-none w-[100%] font-roboto text-[16px] text-[#000] placeholder:text-[#000] leading-[18px] h-[20px] opacity-[60%] ${!!error.email ? "border-b border-solid border-b-[red]" : ""}`} />
                        </label>
                        <p className="text-[12px] font-[400] font-roboto leading-[18px] text-[red] mt-[5px]">{error.email}</p>
                    </div>
                    <div className="flex flex-col">
                        <label className="rounded-[10px] w-[100%] bg-white shadow-[0_0_5px_1px_rgba(0,_0,_0,_0.3)] p-[10px] px-[15px] flex items-center gap-[20px] cursor-pointer">
                            <input type="tel" placeholder="Телефон номер..." name="phone" required className={`font-[500] outline-none w-[100%] font-roboto text-[16px] text-[#000] placeholder:text-[#000] leading-[18px] h-[20px] opacity-[60%] ${!!error.phone ? "border-b border-solid border-b-[red]" : ""}`} />
                        </label>
                        <p className="text-[12px] font-[400] font-roboto leading-[18px] text-[red] mt-[5px]">{error.phone}</p>
                    </div>
                    <label className=" rounded-[10px] w-[100%] bg-white shadow-[0_0_5px_1px_rgba(0,_0,_0,_0.3)] p-[10px] px-[15px] flex items-center gap-[20px] cursor-pointer">
                        <select name="role" className="font-[500] outline-none w-[100%] font-roboto text-[16px] text-[#000] placeholder:text-[#000] leading-[18px] h-[20px] opacity-[60%]">
                            <option value="chapter" selected>Глава</option>
                            <option value="deputy_head">Заместитель главы - отвественный секретарь</option>
                            <option value="head_of_department">Начальник отдела социально-экономического развития</option>
                            <option value="chief_specialist">Главный специалист</option>
                            <option value="leading_specialist">Ведущий специалист</option>
                            <option value="specialist">Специалист</option>
                            <option value="starasta">Стараста</option>
                            <option value="technical_support_staff">МОБ топ</option>
                            <option value="сontract_worker">Работник по контракту</option>
                        </select>
                    </label>
                </div>
                <div className="grid grid-cols-3 800px:grid-cols-2 600px:grid-cols-1 gap-[20px] w-[100%]">
                    <label className="rounded-[10px] w-[100%] bg-white shadow-[0_0_5px_1px_rgba(0,_0,_0,_0.3)] p-[10px] px-[15px] flex items-center gap-[20px] cursor-pointer">
                        <input type="text" placeholder="Биография..." name="bio" required className="font-[500] outline-none w-[100%] font-roboto text-[16px] text-[#000] placeholder:text-[#000] leading-[18px] h-[20px] opacity-[60%]" />
                    </label>
                    <label className="rounded-[10px] w-[100%] bg-white shadow-[0_0_5px_1px_rgba(0,_0,_0,_0.3)] p-[10px] px-[15px] flex items-center gap-[20px] cursor-pointer">
                        <input type="text" placeholder="Трудовое деятельность..." name="labor_activity" required className="font-[500] outline-none w-[100%] font-roboto text-[16px] text-[#000] placeholder:text-[#000] leading-[18px] h-[20px] opacity-[60%]" />
                    </label>
                    <label className="rounded-[10px] w-[100%] bg-white shadow-[0_0_5px_1px_rgba(0,_0,_0,_0.3)] p-[10px] px-[15px] flex items-center gap-[20px] cursor-pointer">
                        <input type="text" placeholder="Образование..." name="education" required className="font-[500] outline-none w-[100%] font-roboto text-[16px] text-[#000] placeholder:text-[#000] leading-[18px] h-[20px] opacity-[60%]" />
                    </label>
                </div>
                <button type="submit" className="text-[24px] leading-[28px] text-white font-[700] font-roboto rounded-[10px] bg-[#d1ab44] shadow-[1px_4px_4px_0_rgba(0,_0,_0,_0.25)] w-[30%] mx-auto h-[50px] min-h-[50px] 1024px:min-h-[40px] mt-[20px] min-w-[159px]">Отправить</button>
            </form>
        </div>
    )
}
