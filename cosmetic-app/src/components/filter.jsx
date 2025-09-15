
function Filter() {

    return(
        <section className="px-7 py-3 bg-white shadow-2xl rounded-2xl mr-2.5">
            <h2 className="font-bold text-2xl">Filter options</h2>
            <div>
                <h3 className="font-bold text-xl">By Categories</h3>
                <p>Skin Care</p>
                <p>Make up</p>
                <p>Hair Care</p>
                <p>Body Care</p>
                <p>Nail Care</p>
            </div>
            <div>
                <h3 className="font-bold text-xl">By skin Type</h3>
                <p>Oily</p>
                <p>Dry</p>
                <p>Combination</p>
                <p>Sensitive</p>
                
            </div>
            <div>
                <h3 className="font-bold text-xl">Price</h3>
                <input type="range" name="" id="" className="text-green-700"/>
            </div>
            <div>
                <h3 className="font-bold text-xl">Review</h3>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
            </div>
            <div>
                <h3 className="font-bold text-xl">By Promotions</h3>
                <div>
                    <input type="checkbox" name="best-seller" id="" />
                    <p className="inline">Best Sellers</p>
                </div>
                <div>
                     <input type="checkbox" name="new-arrival" id="" />
                     <p  className="inline">New arrival</p>
                </div>

            </div>
            <div>
                <h3 className="font-bold text-xl">Availability</h3>
                <div>
                     <input type="checkbox" name="" id="" />
                     <p  className="inline">In Stock</p>
                </div>
                <div>
                     <input type="checkbox" name="" id="" />
                     <p  className="inline">Out of Stock</p>
                </div>
            </div>
        </section>
    )
}
export default Filter