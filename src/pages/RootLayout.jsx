import { Outlet, useNavigate } from "react-router";
import Header from "../components/Header";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ProductProvider } from "../context/product/ProductProvider";

export default function RootLayout({}) {
  const isLoggedIn = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);
  return (
    <>
      <ProductProvider>
        <Header />
        <Outlet />
      </ProductProvider>
    </>
  );
}
