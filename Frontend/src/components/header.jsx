import {NavLink} from 'react-router';
import "../style.css";
export const Header = ()=>{
    return(
        <header className='bg-[#98313C]'>
            <nav className='flex justify-around  h-auto items-center gap-48'>
                <span className=' w-[6%] h-[6%] mt-1'>
                    <img className='w-[100%] h-[100%] object-cover heart' src="src\images\realistic-heart-shape-studio 1.png"  alt="" />
                </span>
                <ul className='flex gap-7  text-white font-bold '>
                    <li className='hover:underline'>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className='hover:underline'>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className='hover:underline'>
                        <NavLink to="/medicos">Medicos</NavLink>
                    </li>
                    <li className='hover:underline hidden '>
                        <NavLink to="/result">Result</NavLink>
                    </li>
                </ul>
                <span className=''>
                    <NavLink to="/predictionform">
                        <button className='bg-[#E9C2CC] w-36 h-10 rounded-2xl'>Check Yourself</button>
                    </NavLink>
                </span>
            </nav>
        </header>
    )
}