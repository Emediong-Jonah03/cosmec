<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Layout from "./components/Layout/layout";

import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signup";

import Home from "./pages/home";
import Cart from "./pages/Cart";
=======
import { useState } from "react";

import Header from "./components/header";
import NavBar from "./components/navigation";
import Hero from "./components/hero";
import Content from "./components/content";
import Filter from "./components/filter";
import Product from "./components/products";
import Footer from "./components/footer";
>>>>>>> 91cda3d31d9ce61a28a672f39b81b32358d4e15d

function App() {
<<<<<<< HEAD
    const [search, setSearch] = useState(false)

   function toggleSearch() {
    setSearch(prev => !prev)
   }

  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Layout Parent Route */}
        <Route element={<Layout toggleSearch={toggleSearch} />}>
          <Route index element={<Home  search={search}/>} />      {/* default child = "/" */}
          <Route path="cart" element={<Cart />} />
        </Route>

        {/* ✅ Standalone Auth Routes */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

        {/* ✅ Catch-All */}
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
=======
  const productsElement = productData.map((product) => {
    return <Product key={product.id} {...product} id={product.id} />;
  });

  const [choice, setChoice] = useState(false);

  function toggleLiked() {
    setChoice((prevStatus) => !prevStatus);
  }

  const [search, setSearch] = useState(false);

  function toggleSearch() {
    setSearch((prev) => !prev);
  }

  function productSearch(searchTerm) {
  const lower = searchTerm.currentTarget.value.toLowerCase()
    const number = searchTerm.currentTarget.value
 

  const filterdProducts = productData.filter(products => products.productName.toLowerCase().includes(lower) ||  products.category.includes(lower) || products.price.includes(number))

  }

  return (
    <>
      <Header />
      <NavBar
        choice={choice}
        toggleLiked={toggleLiked}
        toggleSearch={toggleSearch}
      />

      <div className="relative">
        <Hero page={"Shop"} />
        <div className=" absolute top-15 left-128  z-10">
          {search ? (
            <input
              type="search"
              className="px-3 py-2 rounded text-black border-solid border-2 bg-white w-full"
              placeholder="Search for products"
              onChange={productSearch}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <Content />
      <div className="flex items-stretch justify-center">
        <Filter />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {productsElement}
        </div>
      </div>
      <Footer />
    </>
>>>>>>> 91cda3d31d9ce61a28a672f39b81b32358d4e15d
  );
}

export default App;
