import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getToWishList, removeToWishList } from '../../utilities/AddToDb';
import { TiDeleteOutline } from 'react-icons/ti';

const Wishlist = () => {
    const [wishList, setWishList] = useState([]);
    const allWishList = useLoaderData();

    useEffect(() => {
        const storedWishList = getToWishList();

        const filterStoredWishList = allWishList.filter(wishList => (
            storedWishList.includes(wishList.product_id)
        ))

        setWishList(filterStoredWishList);

    }, [allWishList]);

    const handleRemoveWishList = (product_id) => {
        removeToWishList(product_id);
        setWishList(wishList.filter(wishItem => wishItem.product_id !== product_id));
    }

    return (
        <div className='w-11/12 2xl:w-4/5 mx-auto mt-12 space-y-6'>
            <h2 className='text-xl font-bold'>WishList</h2>
            {
                wishList.map(wishList => (
                    <div key={wishList.product_id} className='flex flex-col md:flex-row justify-between items-center gap-4 bg-white rounded-2xl'>
                        <div className='md:w-1/5'>
                            <img className='w-48' src={`/images/${wishList.product_image.split('/').pop()}`} alt={`${wishList.product_image.split('/').pop()} image`} />
                        </div>
                        <div className='md:w-4/5 space-y-2 p-4 md:p-0'>
                            <div className='flex justify-between text-xl font-bold'>
                                {wishList.product_title}
                                <TiDeleteOutline onClick={() => handleRemoveWishList(wishList.product_id)} className='text-red-400 text-3xl mr-16 cursor-pointer' />
                            </div>
                            <p className='text-sm text-[#09080F99]'>{wishList.description}</p>
                            <h4 className='font-bold'>{`Price: $${wishList.price}`}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Wishlist;