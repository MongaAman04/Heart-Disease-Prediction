import { Footer } from "../components/footer"
// import { Header } from "../components/header"
import "../style.css"
import { NavLink } from "react-router"
export const Home = () => {
    return (
        <section className="background h-[87vh] relative">
            {/* <Header /> */}
             <svg width="100%" height="70%" viewBox="0 0 600 200">
                        <path className="pulse-line"
                            d="M0,100 
         L50,100 L60,80 L70,120 L80,60 L90,140 L100,100 
         L150,100 L160,90 L170,110 L180,100 
         L250,100 L260,60 L270,140 L280,100 
         L350,100 L360,90 L370,110 L380,100 
         L600,100" />
                    </svg>
            <div className="flex flex-col md:flex-row z-1 absolute top-0 left-0 w-full mt-10 justify-between items-center px-4">
                <section className="w-full md:w-[35%] h-auto md:h-[80%] flex flex-col justify-center items-start gap-4 md:gap-7 text-white">
                    <h1 className="text-xl md:text-3xl font-bold">Take Care of Your Heart Disease</h1>
                    <p className="md:text-xl text-base">It keeps running 24/7, non-stop, always by your side. Give a damn about your heart.</p>
                    <ul className="list-disc pl-5">
                        <li>Interactive 3D heart Model</li>
                        <li>Expert Heart health insights</li>
                        <li>Personalized heart tracking tools</li>
                    </ul>
                    <NavLink to="/predictionform">
                        <button className="bg-[#E9C2CC] w-36 h-10 rounded-2xl text-black font-bold">Check Yourself</button>
                    </NavLink>
                </section>
                <section className="w-full md:w-[65%] mt-6 md:mt-0">
                    <div className="w-[100%] h-[100%] flex justify-start items-center relative">
                        <img className="scale-150 mt-9" src="src/images/realistic-heart-shape-studio 1.png" alt="" />
                        <span className="w-40 h-32 box-background rounded-3xl text-center flex flex-col items-center justify-center absolute right-20 bottom-5 text-white font-bold gap-1">
                            <h1 className="text-[15px]">Check Regularly</h1>
                            <p className="text-[10px]">Routine check-ups prevent heart diseases.</p>
                        </span>
                        <span className="w-30 h-20 box-background rounded-3xl text-center flex flex-col items-center justify-center absolute left-[35%] bottom-2 text-white font-bold gap-1">
                            <h1 className="text-[10px]">Eat Smart</h1>
                            <p className="text-[6px]">A balanced diet is the key to heart health.</p>
                        </span>
                        <span className="w-35 h-20 box-background rounded-3xl text-center flex flex-col items-center justify-center absolute left-[40%] top-2 text-white gap-1 font-bold">
                            <h1 className="text-[13px]">Stay Active</h1>
                            <p className="text-[8px]">30 minutes of daily exercise strengthens your heart.</p>
                        </span>
                    </div>
                   
                </section>
            </div>
            <Footer />
        </section>
    )
}