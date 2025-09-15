import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { BiPurchaseTagAlt } from "react-icons/bi";

function Product({
  img,
  productName,
  price,
  oldPrice,
  rating,
  category,
  discount,
}) {
  return (
    <div>
      <div className="relative w-auto h-67">
        <img src={img} alt="" className="w-full h-full rounded-3xl" />
        <div className="absolute top-5 left-5 bg-green-800 px-3 rounded-full text-white text-sm">
          {discount}% Off
        </div>
      </div>
      <div className="py-3 w-auto leading-loose bg-white px-4">
        <div className="flex justify-between items-center mx-7">
          <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
          <p className="text-amber-300 flex">
            {" "}
            <FaStar />
            <span className="text-black">{rating}</span>
          </p>
        </div>
        <div className="font-semibold">
          <p className="text-[1.3rem]">
            {productName.charAt(0).toUpperCase() + productName.slice(1)}
          </p>
        </div>
        <div className="flex items-start">
          <p className="text-orange-400 mr-6 text-base font-semibold">
            ${price}
          </p>
          <p className="text-stone-600  text-base font-semibold">
            $<del>{oldPrice}</del>
          </p>
        </div>
        <div className="flex justify-evenly items-center">
          <div>
            <button className="bg-green-700 px-3 text-white rounded-full hover:opacity-85 flex items-center gap-2"><BiPurchaseTagAlt />Purchase</button>
          </div>
          <div>
            <button className="border-green-700 border-solid flex items-center gap-2 border-2 px-2 rounded-full hover:bg-green-500 hover:text-white hover:opacity-85"><FaCartPlus />Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
