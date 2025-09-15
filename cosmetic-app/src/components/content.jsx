function Content() {

  return (
    <main>
      <div>
        <div className="flex justify-around items-start py-2">
          <p>Showiing 1 - 12 of 1560 results</p>
          <p>Sort by:</p>
          <p>Default sorting</p>
        </div>
        <div className="flex justify-evenly items-center  py-2">
          <p>Active filter:</p>
          <div className="bg-green-800 text-white px-3 rounded-full">
            Price: $10.00 - $100.00 X
          </div>
          <div className="bg-green-800 text-white px-3 rounded-full">
            BEst Seller X
          </div>
          <div className="bg-green-800 text-white px-3 rounded-full">
            In Stock
          </div>
          <p className="text-orange-400 underline cursor-pointer">Clear all</p>
        </div>
      </div>
    </main>
  );
}

export default Content;
