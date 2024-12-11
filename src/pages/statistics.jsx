import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
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
} from 'recharts';

const Statistics = () => {
    useEffect(() => {
        document.title = "Statistics | Gadget Heaven";
    }, []);
    
    const allGadgets = useLoaderData();

    return (
        <div className='bg-[#f7f7f7] pb-20'>
            {/* heading div */}
            <div className='bg-[#9538E2]'>
                <h2 className='text-2xl font-bold text-white pt-8 text-center'>Statistics</h2>
                <p className='w-1/2 mx-auto text-sm font-light text-white mt-2 text-center pb-10'>
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>

            <div className='w-11/12 2xl:w-4/5 mx-auto mt-12 space-y-6'>
                <h2 className='text-xl font-bold'>Statistics</h2>

                <div className='bg-white rounded-2xl p-10' style={{ width: '100%', height: 400 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            data={allGadgets}
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
                            <Bar dataKey="price" barSize={20} fill="#9538E2" />
                            <Line type="monotone" dataKey="price" stroke="#ff7300" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
