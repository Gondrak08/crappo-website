import Logo30b from '../images/30b.svg';
import Logo10M from '../images/10M.svg';
import Logo195 from '../images/195.svg';
import PresentationBg from '../images/presentationbg.svg';


const Presentation = () => {
    return (
        <div className="presentation-container py-8  flex items-center justify-center">
            <div className="container flex flex-col gap-5">
                <div className="numbers flex flex-wrap  justify-evenly items-center">
                    <img src={Logo30b} className="w-[30%] lg:w-[fit-content] " alt="" />
                    <img src={Logo10M} className="w-[30%] lg:w-[fit-content]" alt="" />
                    <img src={Logo195} className="w-[30%] lg:w-[fit-content] " alt="" />
                </div>
                <div className="grid grid-cols-auto px-4 md:px-0  md:grid-cols-2 items-center">
                    <div className="image">
                        <img src={PresentationBg} alt="" />
                    </div>
                    <div className="description flex flex-col justify-center gap-6">
                        <div className="text flex flex-col gap-5">
                            <h2 className="md:text-[40px] font-[700] text-crawhite" >Why you should choose CRAPPO</h2>
                            <span className="text-cragreyneutral tracking-widest">Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</span>
                        </div>
                        <button className="self-start bg-crabluedark hover:bg-crablue py-[16px] px-[24px] rounded-full text-crawhite text-[18px] font-[500] " >Learn More</button>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Presentation;