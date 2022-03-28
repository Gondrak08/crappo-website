import Bitchart from '../images/bitchart.svg';
import Base from '../images/base.svg';
import table from '../images/table.svg';

const Features = () => {
    return (
        <div className="bg-craprupebg flex flex-col items-center py-10" >
            
            <div className="container flex flex-col items-center">
                <h2 className="text-[40px] w-auto max-w-[758px] text-white text-center" >Market sentiments, portfolio, and run the infrastructure of your choice</h2>
            </div>

            <div className="container my-10 flex gap-10 items-center">
                <div className="text flex flex-col gap-5">
                    <h3 className="text-[32px] text-crawhite font-[700]   " >Invest Smart</h3>
                    <span className="font-[400] text-cragreyneutral tracking-[0.01em] " >Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.</span>
                    <button className="self-start bg-crabluedark py-[16px] px-[32px] rounded-full text-crawhite text-[18px] font-[500]">Learn More</button>
                </div>
                <div className="image w-full">
                    <img src={Bitchart} alt="" />
                </div>
            </div>

            <div className="flex my-10 gap-10 ">
                <div className="image   " >
                    <img src={Base}  className="w-full" alt="" />
                </div>
                <div className="text flex w-[456px] flex-col gap-5 justify-center   ">
                    <h3 className="text-[32px] text-crawhite font-[700]" >
                        Detailed Statistics
                    </h3>
                    <span className="font-[400] text-cragreyneutral tracking-[0.01em]" >
                        View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.
                    </span>
                    <button className="self-start bg-crabluedark py-[16px] px-[32px] rounded-full text-crawhite text-[18px] font-[500]">Learn More</button>
                </div>
            </div>
            
            <div className="container my-10 flex gap-10 items-center">
                <div className="text flex flex-col gap-5">
                    <h3 className="text-[32px] text-crawhite font-[700]" >Grow your profit and track your investments</h3>
                    <span className="font-[400] text-cragreyneutral tracking-[0.01em] ">Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</span>
                    <button className="self-start bg-crabluedark py-[16px] px-[32px] rounded-full text-crawhite text-[18px] font-[500]">Learn More</button>
                </div>
                <div className="image w-full">
                    <img src={table} className="w-full" alt="" />
                </div>
            </div>


        </div>
    )
}

export default Features;