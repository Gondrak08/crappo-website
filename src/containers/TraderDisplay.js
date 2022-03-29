import Bitlogo from '../images/bitcoin.svg';
import Ethlogo from '../images/ethereum.svg';
import Litlogo from '../images/litecoin.svg';
import ArrowIcon from '../images/arrowicon.svg'

const cards = [
    {
        name: 'Bitcoin',
        sig: 'BTC',
        text: 'Digital currency in which a record of transactions is maintained.',
        link: 'https://bitcoin.org/',
        logo: Bitlogo
    },
    {
        name: 'Ethereum',
        sig: 'ETH',
        text: 'Blockchain technology to create and run decentralized digital applications.',
        link: 'https://ethereum.org/en/',
        logo: Ethlogo
    },
    {
        name: 'Litecoin',
        sig: 'LTC',
        text: 'Cryptocurrency that enables instant payments to anyone in the world.',
        link: 'https://litecoin.com/en/',
        logo: Litlogo
    }
]

const TraderDisplay = () => {
    return (
        <div className="trader-container relative h-[2200px] md:h-[1490px] mt-[-50px] flex flex-col items-center  ">
            
            <div className="container relative top-[10em]  flex flex-col items-center justify-center">
                <div className="texts my-10  flex flex-col justify-center gap-3 w-[fit-content] ">
                    <h2 className="text-[30px] md:text-[40px] font-[700] text-center text-crawhite">Check how much you can earn</h2>
                    <span className="text-cragreyneutral text-center" >Let’s check your hash rate to see how much you will earn today,
                        <br />
                        Exercitation veniam consequat sunt nostrud amet.</span>
                </div>

                <div className="calculate-box  p-8 rounded-xl w-full max-w-[942px] h-[100%] max-h-[371px]  flex flex-col gap-5 bg-[#FBFCFE]">
                    <div className="inputbox  flex-col md:flex-row flex justify-between items-center gap-5">
                        <input type="text" className="w-full md:w-[45%] border-[none] border-b-[1px] border-cragreyneutral h-[38px] " placeholder="Enter your hash rate" />

                        <select name="" id="" className="border-[none] border-b-[1px] w-full md:w-[25%] border-cragreyneutral h-[38px]">
                            <option value="">TH/s</option>
                        </select>

                        <button className="bg-crabluedark hover:bg-crablue py-[16px] px-[32px] rounded-full text-crawhite text-[18px] font-[500]" >Calculate</button>
                    </div>
                    <div className="texts flex mt-7 flex-col gap-1 ">
                        <span className="text-crabluedark tracking-[.04em] uppercase font-[500] text-[16px]" >ESTIMATED 24 HOUR REVENUE:</span>
                        <h3 className="md:text-[32px] font-[700] tracking-[.04em]" >
                            0.055 130 59 ETH <span className="text-crabluedark">($1275)</span>
                        </h3>
                        <span className="text-[#828282] tracking-[.01em]" >Revenue will change based on mining difficulty and Ethereum price.</span>
                    </div>
                </div>


            </div>


            <div className="crypto-container  h-full w-full flex justify-center ">
                <div className="container mt-20 flex flex-col gap-10 items-center justify-center  ">
                    <h3 className="text-[25px] md:text-[40px] text-center font-[700] text-cradark " >Trade securely and market the high <br/>growth cryptocurrencies.
                    </h3>
                    <div className="cards grid w-full grid-cols-auto md:grid-cols-3 gap-5">
                        {
                            cards.map((item, index) => (
                                <div className="card flex flex-col  items-center justify-evenly gap-5 py-4 px-2  rounded-xl  md:h-[400px] bg-[#FFFFFF]  " key={index}>
                                    <div className="image">
                                        <img src={item.logo} alt="" />
                                    </div>
                                    <h4 className="text-[32px] flex items-center gap-3 text-cradrak  font-[700] text-center" >{item.name} <span id="sig" className="text-[18px] font-[500] text-cragreyneutral uppercase">{item.sig}</span> </h4>
                                    <span className="text-center tracking-[.01em] text-cragreydark font-[400] text-[16px]">{item.text}</span>
                                    <button className="button  flex items-center justify-evenly gap-3 h-auto w-auto">
                                        <span className="hidden text-[18px] font-[500]">Start mining</span>
                                        <img src={ArrowIcon} className=" border-[1px] border-cragreylight rounded-full" alt="" />
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
       </div>
    )
}

export default TraderDisplay;