export default function Products() {
    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 items-center text-yellow-300">
            <div className="p-10">
                <img src="/jacket.png" alt="Jacket" />
                <div className="flex flex-col items-center text-xl">
                    <div className="p-3">
                        Custom Jacket
                    </div>
                    <div className="p-3">
                        R$ 800
                    </div>
                    <button className="rounded-lg p-2 bg-yellow-300 text-black mt-2">
                        Add to Cart
                    </button>
                </div>
            </div>
            <div className="p-10">
                <img src="/jacket.png" alt="Jacket" />
                <div className="flex flex-col items-center text-xl">
                    <div className="p-3">
                        Custom Jacket
                    </div>
                    <div className="p-3">
                        R$ 800
                    </div>
                    <button className="rounded-lg p-2 bg-yellow-300 text-black mt-2">
                        Add to Cart
                    </button>
                </div>
            </div>
            <div className="p-10">
                <img src="/jacket.png" alt="Jacket" />
                <div className="flex flex-col items-center text-xl">
                    <div className="p-3">
                        Custom Jacket
                    </div>
                    <div className="p-3">
                        R$ 800
                    </div>
                    <button className="rounded-lg p-2 bg-yellow-300 text-black mt-2">
                        Add to Cart
                    </button>
                </div>
            </div>
            
            
        </div>
    )

}