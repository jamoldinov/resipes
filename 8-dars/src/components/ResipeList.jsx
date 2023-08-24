import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { Waveform } from "@uiball/loaders";
function ResipeList() {
  const { id } = useParams();
  console.log(id);
  const url = "http://localhost:3000/recipes/" + id;
  const { data: resipe, isPending, error } = useFetch(url);
  console.log(resipe);
  return (
    <div className="container max-w-5xl mx-auto flex mt-10">
      {isPending && <div className="overlay">
          <Waveform size={80} s speed={1.3} color="#a6c88c" className/>
        </div>}
      {error && <PageNotFound/>}
      {resipe && (
        <div className="flex gap-7">
          <img src={resipe.image} alt={resipe.title} height="300" className="w-80 h-56 object-cover rounded-lg" />
          <div className="  ">
          <h1 className="mb-2">Title: {resipe.title}</h1>
          <p className="mb-2">
            Autor: <i>{resipe.cookingTime}</i>
          </p>

          <p className="mb-2">Text: {resipe.ingredients}</p>
            <p className="mb-8">Method: {resipe.method}</p>
          <Link to='/' className="py-2  px-3 border mt-3 mx-auto">Home Page</Link>
          </div>

        </div>
      )}
    </div>
  );
}

export default ResipeList;