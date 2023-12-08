import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import  { StoreCartContext } from "./contexts/StoreAndCartContext";
import TotalPriceContext from "./contexts/TotalPriceContext";
import Loader from "./components/GlobalComponents/Loader";
function App() {
    const { store, setStore } = useContext(StoreCartContext);
    const [isLoading, setIsLoading] = useState(store.length === 0);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const url = "https://fakestoreapi.com/products";
        fetch(url, signal).then((response) => {
            response.json().then((data) => {
                setIsLoading(false);
                data.forEach(element => {
                    element.isIncart=false;
                });
                setStore(data);
            });
        }).catch((err) => {
           
        })

        return () => {
            controller.abort();
        }
    },[])
    return (
        <>
            {isLoading ? (<Loader/>) :
                (<div className="App">
                    <BrowserRouter>
                    <TotalPriceContext>
                        <Routes>
                            <Route exact path="/E-Commerce" element={<Home />} />
                            <Route exact path="/product/:id" element={<Products />} />
                            <Route exact path="/cart" element={<Cart />} />
                        </Routes>
                    </TotalPriceContext>
                    </BrowserRouter>
                </div>)
            }
        </>
    );
}


export default App;
