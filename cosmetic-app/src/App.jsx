import Header from "./components/header";
import NavBar from "./components/navigation";
import Hero from "./components/hero";
import Content from "./components/content";
import Filter from "./components/filter";
import Product from "./components/products";
import Footer from "./components/footer";

import productData from "./productData";
function App() {
  const productsElement = productData.map((product) => {
    return <Product key={product.id} {...product} />;
  });
  return (
    <>
      <Header />
      <NavBar />
      <Hero />
      <Content />
      <div className="flex items-stretch justify-center">
        <Filter />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {productsElement}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
