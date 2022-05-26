import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
    const iconStyle = {fontSize: "1.5em"};
    return (
        <>
            <div className="bg-lime-500 md:px-16 px-10 pt-4">
                <div className="grid md:grid-cols-3 grid-cols-1 md:justify-items-center">
                    
                    <div className="my-4">
                        <p className="text-sm pr-8">Your friend, your guide and your partner in the journey of parenting</p>
                        <div className="grid grid-flow-col auto-cols-min gap-8 my-4">  
                            <a href="https://www.facebook.com/Younglabs"><FaFacebook /> </a>
                            <a href="https://www.instagram.com/younglabs.in/"><FaInstagram /></a>
                            <a href="https://api.whatsapp.com/send/?phone=919289029696&text&app_absent=0"><FaWhatsapp /></a>
                        </div>
                        <div className="text-sm">
                            © 2022 All Rights Reserved. Younglabs
                        </div>
                    </div>
                    
                    <div className="my-4">
                        Quick Links
                        <div className="ml-2">                        
                            <div className="hover:text-white mt-2">
                                <a href="https://app.younglabs.in/about">
                                    About
                                </a>
                            </div>
                            <div className="hover:text-white mt-2">
                                <a href="https://app.younglabs.in/privacy-policy">
                                    Privacy Policy
                                </a>
                            </div>
                            <div className="hover:text-white mt-2">
                                <a href="https://app.younglabs.in/terms-conditions">
                                    Terms & Conditions
                                </a>
                            </div>
                            <div className="hover:text-white mt-2">
                                <a href="https://younglabs.in/shipping-delivery/">
                                    Shipping & Delivery
                                </a>
                            </div>
                            <div className="hover:text-white mt-2">
                                <a href="https://younglabs.in/refund_returns/+-9*/">
                                    Return, Refunds & Exchange Policy
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className='my-4'>
                        Address
                        
                        <div className="flex my-4">
                            <FaMapMarkerAlt style={iconStyle}/>
                            <p className="ml-4">A-39, Sector - 4, Noida-201301</p>                                
                        </div>
                        <div className="flex my-4">
                            <FaPhoneAlt style={iconStyle} />
                            <p className="ml-4">( +91) 92890 29696</p>                                
                        </div>
                        <div className="flex my-4">
                            <AiOutlineMail style={iconStyle}/>
                            <p className="ml-4">info@younglabs.in</p>                                
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer;