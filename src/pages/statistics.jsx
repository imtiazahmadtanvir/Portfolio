import { useEffect } from 'react';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Area,
} from 'recharts';

const Statistics = () => {
    useEffect(() => {
        document.title = "Statistics | Gadget Heaven";
    }, []);
    
    // Random Gadget Data
    const randomGadgetData = [
        { product_title: "Smartphone A", price: 599, rating: 4.5, sales: 1500 },
        { product_title: "Smartwatch B", price: 199, rating: 4.0, sales: 800 },
        { product_title: "Laptop C", price: 1299, rating: 4.7, sales: 300 },
        { product_title: "Tablet D", price: 399, rating: 4.3, sales: 1200 },
        { product_title: "Headphones E", price: 89, rating: 4.1, sales: 2000 },
        { product_title: "Camera F", price: 499, rating: 4.8, sales: 600 },
        { product_title: "Smartwatch G", price: 249, rating: 4.2, sales: 1000 },
        { product_title: "Drone H", price: 899, rating: 4.6, sales: 400 },
    ];

    return (
        <div className='bg-[#f7f7f7] pb-20'>
            {/* Heading Section */}
            <div className='bg-[#9538E2]'>
                <h2 className='text-2xl font-bold text-white pt-8 text-center'>Statistics</h2>
                <p className='w-1/2 mx-auto text-sm font-light text-white mt-2 text-center pb-10'>
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>

            {/* Chart Section */}
            <div className='w-11/12 2xl:w-4/5 mx-auto mt-12 space-y-6'>
                <h2 className='text-xl font-bold'>Gadget Price and Sales Statistics</h2>

                <div className='bg-white rounded-2xl p-10' style={{ width: '100%', height: 500 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            data={randomGadgetData}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="product_title" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {/* Bar for Price */}
                            <Bar dataKey="price" barSize={20} fill="#9538E2" name="Price" />
                            {/* Line for Rating */}
                            <Line type="monotone" dataKey="rating" stroke="#ff7300" name="Rating" />
                            {/* Area for Sales */}
                            <Area type="monotone" dataKey="sales" fill="#82ca9d" stroke="#82ca9d" name="Sales" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
