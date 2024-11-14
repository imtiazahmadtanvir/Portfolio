
const Footer = () => {
    return (
        <footer className='pb-10'>
            <div className='w-11/12 mx-auto mt-20'>
                <div>
                    <h2 className='text-3xl font-bold text-center'>Gadget Heaven</h2>
                    <p className='text-[#09080F99] text-center mt-3'>Leading the way in cutting-edge technology and innovation.</p>
                </div>

                <div className='divider'></div>

                <div className='flex justify-between md:w-1/2 mx-auto'>
                    <nav className='flex flex-col text-black '>
                        <h6 className="text-black  text-lg font-bold">Services</h6>
                        <a className="link link-hover text-sm pt-2">Product Support</a>
                        <a className="link link-hover text-sm pt-2">Order Tracking</a>
                        <a className="link link-hover text-sm pt-2">Shipping & Delivery</a>
                        <a className="link link-hover text-sm pt-2">Returns</a>
                    </nav>
                    <nav className='flex flex-col text-[#09080F99]'>
                        <h6 className="text-black  text-lg font-bold">Company</h6>
                        <a className="link link-hover text-sm pt-2">About us</a>
                        <a className="link link-hover text-sm pt-2">Careers</a>
                        <a className="link link-hover text-sm pt-2">Contact</a>
                    </nav>
                    <nav className='flex flex-col text-[#09080F99]'>
                        <h6 className="text-black text-lg font-bold">Legal</h6>
                        <a className="link link-hover text-sm pt-2">Terms of Service</a>
                        <a className="link link-hover text-sm pt-2">Privacy policy</a>
                        <a className="link link-hover text-sm pt-2">Cookie Policy</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;