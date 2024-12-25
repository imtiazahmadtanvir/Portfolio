import { Link } from 'react-router-dom';
import default1 from "../assets/Image/defalt.avif" 
 const AboutUs = () => {
  return (
    <div className="bg-[#9538E2] min-h-screen flex flex-col ">
      
      {/* Header Section */}
      <div className="w-11/12 mx-auto py-16 px-6 md:px-12 text-center ">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Our Store</h1>
        <p className="text-lg md:text-xl text-white max-w-1xl mx-auto">
          Welcome to our online store! We offer a wide range of high-quality gadgets across multiple categories, from the latest computers and smartphones to cutting-edge smartwatches and accessories.
        </p>
      </div>


      {/* Products Section */}
      <div className="bg-white py-12 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img 
            src="https://i.ibb.co.com/Z8xDhDJ/apple-iphone-15-pro-max-1.jpg"  // Replace with your actual web image link
            alt="Our Products" 
            className="rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Products</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our products are carefully selected to ensure quality and innovation. From everyday gadgets to premium tech, we bring you the latest in electronics designed to enhance your life.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you are a tech enthusiast or just looking for reliable devices, we have got you covered.
            </p>
            <Link 
              to="/dashboard" 
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 mt-4"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-12 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            Our team is a group of passionate individuals dedicated to bringing you the best tech products and shopping experience. From product sourcing to customer support, each team member works hard to ensure your satisfaction.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Team Member Cards */}
            <div className="bg-white p-4 rounded-lg shadow-md text-center w-48">
              <img 
                src={default1}  // Replace with your actual web image link
                alt="Team Member 1"
                className="w-24 h-24 mx-auto rounded-full mb-2"
              />
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-gray-600">CEO</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center w-48">
              <img 
                src={default1} // Replace with your actual web image link
                alt="Team Member 2"
                className="w-24 h-24 mx-auto rounded-full mb-2"
              />
              <h3 className="font-semibold">Jane Smith</h3>
              <p className="text-sm text-gray-600">CTO</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center w-48">
              <img 
                src={default1}  // Replace with your actual web image link
                alt="Team Member 3"
                className="w-24 h-24 mx-auto rounded-full mb-2"
              />
              <h3 className="font-semibold">Mark Brown</h3>
              <p className="text-sm text-gray-600">Designer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#9538E2] py-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Explore?</h2>
        <p className="text-lg text-white mb-6">
          Start discovering the best gadgets and deals today.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-white text-[#9538E2] px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
        >
          Get Started Now
        </Link>
      </div>


    </div>
  );
};

export default AboutUs;
