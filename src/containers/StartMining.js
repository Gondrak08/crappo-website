const StartMining = () => {
    return (
        <section className="mining-component flex justify-center py-10 px-5 items-center bg-[2B076E]">
            <div className="w-full lg:w-[1200px] p-10 flex flex-col lg:flex-row  gap-10 lg:gap-0 justify-between h-full h-full lg:h-[216px] bg-crabluedark rounded-xl ">

                <div className="text  flex  flex-col justify-center ">
                    <h3 className="text-[20px] lg:text-[32px] text-crawhite font-[700]" >Start mining now</h3>
                    <span className="text-[16px] lg:w-[348px] w-full text-crawhite font-[400]  tracking-[0.01em] " >Join now with CRAPPO to get the latest news and start mining now</span>
                </div>

                <div className="inputbox flex flex-col lg:flex-row items-center   justify-evenly  gap-10">
                    <input className="text-crawhite w-full lg:w-[374px]"  placeholder="Enter your email" type="text" />
                    <button className=" bg-white hover:bg-cragreyneutral py-[16px] px-[32px] rounded-full text-crawdark text-[18px] font-[500]" >Subscribe</button>
                </div>

            </div>
        </section>
    )
}

export default StartMining;