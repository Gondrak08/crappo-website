import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import Logo from '../images/Logo.svg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const NavLiks = ({ title, props }) => {
        return (
            <li className={`mx-4 cursor-pointer ${props}`} >
                {title}
            </li>
        )
    }
    return (
        <div className="w-full flex justify-center items-center ">
            <div className="container pt-5 px-2 flex justify-between ">
                <div className="flex justify-center items-center">
                    <a href="#" className="pointer hover:opacity-[0.7]">
                        <img src={Logo} alt="" />
                    </a>
                </div>

                <div className="flex justify-between  gap-[35px]">
                    <ul className="text-white  md:flex hidden list-none flex-row justify-between items-center flex-initial text-[18px]">
                        {["Products", "Features", "About", "Contact"].map((item, index) => (
                            <NavLiks key={item + index} title={item} props="hover:text-crabluelight" />
                        ))}
                        
                    </ul>
                    <div className="flex gap-[20px]  md:flex hidden items-center">
                        <a href="#">
                            <span className="text-white hover:text-crabluelight">Login</span>
                        </a>
                        <span style={{ borderLeft:' 1px solid white',
                        height: '2em'}} />
                        <button className="bg-crabluedark hover:bg-crablue px-2 text-white py-[14px] px-[22px] rounded-full" >Sign up</button>
                    </div>

                </div>
                <div className="flex relative md:hidden">
                    {
                        isMenuOpen ?
                            <AiOutlineClose
                                fontSize={28}
                                className="text-white md:hidden cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            />
                            :
                            <HiMenuAlt4
                                fontSize={28}
                                className="text-white md:hidden cursor-pointer"
                                onClick={() => setIsMenuOpen(true)}
                            />
                    }
                    {
                        isMenuOpen && (
                            <>
                            <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in" >
                                <li className="text-xl w-full my-2">
                                    <AiOutlineClose onClick={() => { setIsMenuOpen(false) }} />
                                </li>
                                {["Home", "Serviços", "SobreNós", "Contato"].map((item, index) => (
                                    <NavLiks key={item + index} title={item} props="my-2 text-lg hover:text-[#66ff66]" />
                                ))}
                                </ul>
                                <div className="flex md:hidden gap-[20px]  md:flex hidden items-center">
                                    <a href="#">
                                        <span className="text-white">Login</span>
                                    </a>
                                    <span style={{
                                        borderLeft: ' 1px solid white',
                                        height: '2em'
                                    }} />
                                    <button className="bg-crabluedark px-2 text-white py-[14px] px-[22px] rounded-full" >Registre-se</button>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar;