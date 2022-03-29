import Illustration from '../images/illustration.svg';
import Info from '../images/info.svg';
import Arrowicon from '../images/arrowicon.svg'
const Hero = () => {
    return (
        <section className="hero-container flex items-center justify-center mt-10 py-8 ">
            <div className="container">
                <div className="grid grid-cols-auto md:grid-cols-2 px-2 md:px-3 lg:px-0">
                    <div className="description flex flex-col gap-[15px]">
                        <div className="image pt-5 ">
                            <img src={Info} alt="" />
                        </div>
                        <div className="texts flex flex-col gap-[5px] mx-2 md:mx-0 ">
                            <h1 className="text-[#FFFFFF] md:text-[35px] lg:text-[64px] font-bold">Fastest & secure platform to invest in crypto </h1>
                            <span className="text-cragreyneutral tracking-[.01em] " >Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</span>
                        </div>
                        <button className="flex mt-1 items-center gap-8 bg-crabluedark hover:bg-crablue w-[fit-content] px-2 text-white py-[8px] px-[10px] md:py-[14px] md:px-[22px] rounded-full" >
                            <span className="text-[16px] md:text-[18px] font-[500]" >Try for free</span>
                            <img src={Arrowicon} alt="" />
                        </button>
                    </div>
                    <div className="image">
                        <img src={Illustration} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;