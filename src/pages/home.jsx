import Heading from "../Components/heading";
import VRImage from "../assets/banner.jpg"

const Home = () => {
  return (
    
       // header
       <div className="-mt-20 text-white">
          <div className=" rounded-xl shadow-lg w-11/12 mx-auto  py-20 bg-purple-500 text-white flex flex-col items-center justify-center text-center ">
          <div className="w-10/12">
          <Heading 
            title="Upgrade Your Tech Accessorize with Gadget Heaven Accessories"
            subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            /> 
          </div>
            <div className="mb-10">
            <button className="px-6 py-2 mt-10 mb-20  bg-white text-purple-500 font-semibold rounded-full hover:bg-gray-200 transition">Shop Now</button>

            </div>
          </div>
            
          <div>
            <img src={VRImage} alt="VR Headset" className="-mt-40 w-4/12 mx-auto rounded-2xl shadow-lg border-8 border-purple-400" />
          </div> 
          <div className="py-10 text-black text-3xl">
            <Heading title={'Explore Cutting-Edge Gadgets'}/>
          </div>

          <div className="w-11/12 flex lg:flex-row md:flex-row mx-auto">
            <div className="w-3/12">
                    <h1>hello</h1>
            </div>
            <div className="w-9/12">
                      <h1>hello</h1>
            </div>

          </div>

      </div>
      
    
  );
};

export default Home;