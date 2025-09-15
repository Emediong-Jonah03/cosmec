function Product({img, productName, price, oldPrice, rating, category, discount}) {
  return (
    <div className="w-70">
      <div className="relative w-70 h-67">
        <img src={img} alt="" className="w-full h-full rounded-3xl" />
        <div className="absolute top-5 left-5 bg-green-800 px-3 rounded-full text-white">
          {discount}% Off
        </div>
      </div>
      <div className="py-3 w-70 leading-loose bg-white px-4">
        <div className="flex justify-between items-center mx-7">
          <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
          <p>{rating}</p>
        </div>
        <div className="font-semibold">
          <p className="text-[1.3rem]">{productName.charAt(0).toUpperCase() + productName.slice(1)}</p>
        </div>
        <div className="flex items-start">
          <p className="text-orange-400 mr-6">${price}</p>
          <p className="text-stone-600">$<del>{oldPrice}</del></p>
        </div>
      </div>
    </div>
  );
}
export default Product