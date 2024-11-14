import VRImage from "./banner.jpg"
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='pt-1'>
            <div className='w-[98%] 2xl:w-4/5 mx-auto -mt-20 border-2 border-[#f1edf5] p-2 rounded-[32px]'>
                <div className=" hero bg-[#9538E2] rounded-[32px] pb-40">
                    <div className="hero-content text-center mt-20 rounded-[32px]">
                        <div className="w-4/5">
                            <h1 className="text-4xl text-white font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                            <p className="py-6 text-white">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <NavLink to={"/dashboard"} className="btn rounded-[32px] bg-white text-[#9538E2]">Shop Now</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-3/5 2xl:w-1/2 mx-auto -mt-36 rounded-3xl border-2 border-[#FFFFFF]'>
                <div>
                    {
                        <img className='rounded-3xl w-full h-[400px] object-fill p-3 ' src={VRImage} alt="" />
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner;