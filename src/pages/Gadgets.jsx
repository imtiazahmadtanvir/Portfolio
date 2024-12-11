import { useEffect } from "react";
import LeftBar from "../components/LeftBar";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "../components/Card";

const Gadgets = () => {
    useEffect(() => {
        document.title = "Gadget Heaven";
    }, []);

    const gadgetsData = useLoaderData();
    const { category } = useParams(); // Capture category from the URL

    console.log("Category from URL:", category); // Debugging: check the category

    // Ensure gadgetsData is available and is an array
    if (!Array.isArray(gadgetsData)) {
        return <div>Error: Invalid gadgets data</div>;
    }

    // Filter gadgets based on category or show all products
    const filteredGadgets = !category || category === 'All Product'
        ? gadgetsData 
        : gadgetsData.filter(gadget => gadget.category === category);

    console.log("Filtered Gadgets:", filteredGadgets); // Debugging: check filtered data

    return (
        <div>

            <main className="w-11/12 2xl:w-4/5 mx-auto mt-20 pb-20">
                <h2 className="text-3xl font-bold text-center">Explore Cutting-Edge Gadgets</h2>

                <div className="grid md:grid-cols-4 gap-6 mt-10">
                    <div className="md:col-span-1 bg-white flex flex-col border border-[#dfdfe2] rounded-2xl h-[550px]">
                        <LeftBar />
                    </div>

                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {filteredGadgets.length > 0 ? (
                            filteredGadgets.map(gadget => (
                                <Card key={gadget.product_id} gadget={gadget} />
                            ))
                        ) : (
                            <div className="col-span-3 text-center text-gray-500">
                                No gadgets found for this category.
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Gadgets;
