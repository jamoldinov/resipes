import React from "react";

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from './Pages/Home'
import Create from "./Pages/Create";
import ReadMore from "./components/ReadMore";
import ResipeList from "./components/ResipeList";
import PageNotFound from "./components/PageNotFound";

function App() {
const rotes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>} >
<Route index element={<Home/>}/>
<Route path="/recipes/:id" element={<ResipeList/>}/>
<Route path="create" element={<Create/>}/>
<Route path="*" element={<PageNotFound />} />
    </Route>
  )
)


  return (
    <>
      <RouterProvider router={rotes}/>
    </>
  );
}

export default App;
