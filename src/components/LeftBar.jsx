import { NavLink, useLoaderData } from 'react-router-dom';

const LeftBar = () => {
    // Fetching data using useLoaderData
    const data = useLoaderData();

    // Extract unique categories from the data
    const uniqueCategories = [...new Set(data.map((item) => item.category))];

    return (
        <div className="grid grid-cols-1 gap-6">
            {/* Button for All Products */}
            <NavLink
                to={`/`}
                className={({ isActive }) =>
                    isActive
                        ? "btn bg-[#9538E2] text-white font-bold rounded-[32px] w-4/5 mx-auto mt-8"
                        : "btn bg-[#09080F0D] rounded-[32px] text-black w-4/5 mx-auto mt-8"
                }
            >
                All Product
            </NavLink>

            {/* Buttons for Each Unique Category */}
            {uniqueCategories.length > 0 ? (
                uniqueCategories.map((category, index) => (
                    <NavLink
                        key={index}
                        to={`/home/${category}`}
                        className={({ isActive }) =>
                            isActive
                                ? "btn bg-[#9538E2] text-white font-bold rounded-[32px] w-4/5 mx-auto"
                                : "btn bg-[#09080F0D] rounded-[32px] text-black w-4/5 mx-auto"
                        }
                    >
                        {category}
                    </NavLink>
                ))
            ) : (
                <div className="text-center text-gray-500 mt-8">No categories available</div>
            )}
        </div>
    );
};

export default LeftBar;
