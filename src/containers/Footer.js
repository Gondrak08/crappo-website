import Logo from '../images/Logo.svg';
import Visa from '../images/visa.svg';
import Mastercard from '../images/mastercard.svg';
import Bitcard from '../images/bitflag.svg';

import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
    return (
        <footer className="flex flex-col justify-center py-8 gap-20 items-center">
            <div className="container grid grid-cols-4">
                <div className="image">
                    <img src={Logo} alt="" />
                </div>
                <div className="quickLinks flex flex-col gap-[20px] ">
                    <span className="text-[20px] text-crawhite" >Quick Link</span>
                    <ul className="">
                        {['Home', 'Products', 'About', 'Features', 'Contact'].map(links => (
                            <li className="text-[#F2F2F2] my-1" ><a href="http://" target="_blank" rel="noopener noreferrer">
                                {links}
                            </a></li>
                        ))}
                    </ul>
                </div>
                <div className="Resources flex flex-col gap-[20px]">
                    <span className="text-[20px] text-crawhite" >Resources</span>
                    <ul className="">
                        {['Download Whitepapper', 'Smart Token', 'Blockchain Explorer', 'Crypto Api', 'Interest'].map(links => (
                            <li className="text-[#F2F2F2] my-1" ><a href="http://" target="_blank" rel="noopener noreferrer">
                                {links}
                            </a></li>
                        ))}
                    </ul>

                </div>
                <div className="content  flex flex-col gap-10 w-[355px]">
                    <div className="text">
                        <h3 className="text-[32px] text-crawhite font-[500] " >We accept following payment systems</h3>
                    </div>
                    <div className="images flex gap-5">
                        <a href="#" className="hover:opacity-[0.7]  " >
                            <img src={Visa} alt=""  className="w-[86px]" />
                        </a>
                        <a href="#" className="hover:opacity-[0.7]">
                            <img src={Mastercard} alt="" className="w-[86px]" />
                        </a>
                        <a href="#" className="hover:opacity-[0.7]">
                            <img src={Bitcard} alt="" className="w-[86px]" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container flex justify-between items-center ">
                <span className="tracking-[0.01em] text-white">
                    ©2021 CRAPPO. All rights reserved
                </span>
                <div className=" flex gap-5 share-links">
                    <a href="">
                        <FaFacebookF size={25} color="white" />
                    </a>
                    <a href="">
                        <FaInstagram size={25} color="white" />
                    </a>
                    <a href="">
                        <FaYoutube size={25} color="white" />
                    </a>
                    <a href="">
                        <FaTwitter size={25} color="white" />
                    </a>
                    <a href="">
                        <FaLinkedin size={25} color="white" />
                    </a>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;