import React, { useState } from "react";
import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Detail } from "./components/Detail";
import { Main } from "./components/Main";
import { data } from "./data";

export interface productDataType {
  id: number;
  title: string;
  content: string;
  price: number;
  image: string;
}

function App() {
  const [productsData, setProductsData] = useState(data);
  return (
    <div className="App">
      <nav className="flex justify-start h-14 items-center px-10">
        <div className="mr-5 font-semibold">
          <Link to="/">RobinShop</Link>
        </div>
        <div className="flex gap-3">
          <Link to="/">Home</Link>
          <Link to="/detail/:id">Content</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Main productsData={productsData} />} />
        <Route
          path="/detail/:id"
          element={<Detail productsData={productsData} />}
        />
        <Route
          path="/event"
          element={
            <div>
              오늘의 이벤트
              <Outlet></Outlet>
            </div>
          }
        >
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
