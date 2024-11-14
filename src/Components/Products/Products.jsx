import { useLoaderData, useParams } from 'react-router-dom';
import Product from '../Product/Product'; // or update path as needed to '../Product/Product'
import Sidebar from '../Sidebar/Sidebar';

const Products = () => {
    const productData = useLoaderData();
    const { category } = useParams();

    const filteredProducts = !category || category === 'All Product' 
        ? productData 
        : productData.filter(product => product.category === category);

    return (
        <div className='w-11/12 2xl:w-4/5 mx-auto mt-20 pb-20'>
            <h2 className='text-3xl font-bold text-center'>Explore Cutting-Edge Products</h2>
            <div className='grid md:grid-cols-4 gap-6 mt-10'>
                <div className='md:col-span-1 bg-white flex flex-col border border-[#dfdfe2] rounded-2xl h-[550px]'>
                    <Sidebar />
                </div>
                <div className='md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {
                        filteredProducts.map(product => (
                            <Product key={product.product_id} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;
