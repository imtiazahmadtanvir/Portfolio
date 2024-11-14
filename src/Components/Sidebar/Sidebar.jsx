import { NavLink, useLoaderData } from 'react-router-dom';

const Sidebar = () => {
    const allCategory = useLoaderData();

    const uniqueCategories = Array.from(new Set(allCategory.map(category => category.category)));

    return (
        <div className='grid grid-cols-1 gap-6'>
            <NavLink to={`/`} className={({isActive}) => isActive ? "btn bg-[#9538E2] text-white font-bold rounded-[32px] w-4/5 mx-auto mt-8" : "btn bg-[#09080F0D] rounded-[32px] text-black w-4/5 mx-auto mt-8"}>All Product</NavLink>
            {uniqueCategories.map((category, index) => (
                <NavLink key={index} to={`/home/${category}`} className={({isActive}) => isActive ? "btn bg-[#9538E2] text-white font-bold rounded-[32px] w-4/5 mx-auto" : "btn bg-[#09080F0D] rounded-[32px] text-black w-4/5 mx-auto"}>
                    {category}
                </NavLink>
            ))}
        </div>
    );
};

export default Sidebar;
