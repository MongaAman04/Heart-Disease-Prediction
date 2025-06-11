export const Footer = () => {
    return(
        <div className=" flex  justify-evenly bg-[#98313C] mt-15 pt-5 pb-7 gap-5 absolute bottom-0 w-full" >
            <span className="text-white font-bold">
                <h1>100,000 beats</h1>
                <li className="list-disc text-xs">Your heart beats 100,000 times daily.</li>
            </span>
            <span className="text-white font-bold">
                <h1>2,000 Gallons</h1>
                <li className="list-disc text-xs">It pumps 2000 gallons of blood everyday</li>
            </span>
            <span className="text-white font-bold">
                <h1>1 in 4 deaths</h1>
                <li className="list-disc text-xs">Heart Disease accounts 1 in 4 deaths daily.</li>
            </span>
        </div>
    )
}