function Content() {

  return (
    <main>
      <div>
        <div className="flex flex-col sm:flex-row justify-around items-start py-2 gap-2 px-3">
          <p>Showiing 1 - 12 of 1560 results</p>
          <p>Sort by:</p>
          <p>Default sorting</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-evenly items-center py-2 gap-2 overflow-x-auto text-sm">
          <p>Active filter:</p>
          <div className="bg-green-800 text-white px-3 rounded-full whitespace-nowrap">
            Price: $10.00 - $100.00 X
          </div>
          <div className="bg-green-800 text-white px-3 rounded-full whitespace-nowrap">
            Best Seller X
          </div>
          <div className="bg-green-800 text-white px-3 rounded-full whitespace-nowrap">
            In Stock
          </div>
          <p className="text-orange-400 underline cursor-pointer hover:text-orange-600">Clear all</p>
        </div>
      </div>
    </main>
  );
}

export default Content;