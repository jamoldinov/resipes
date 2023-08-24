import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import ResipeList from "../components/ResipeList";
import ReadMore from "../components/ReadMore";
import PageNotFound from "../components/PageNotFound";
import { Waveform } from '@uiball/loaders'


function Home() {
  const {
    data: recipies,
    isPending,
    error,
  } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="container max-w-5xl mx-auto flex">
       {isPending &&  <div className="overlay">
          <Waveform size={80} s speed={1.3} color="#a6c88c" className/>
        </div>}

        {error && <PageNotFound/> }
      {recipies &&
        recipies.map((resipe) => {
          //  <ReadMore id={resipe} />
          return (
            <div key={resipe.id} className="gap-4 q p-5 bg-slate-300 m-5">
             
                <img src={resipe.image} alt="Image" className="w-80 h-56 object-cover rounded-lg" />
                <h1 className="mt-4 mb-4"> Title: {resipe.title}</h1>
                <h3 className="pb-4"> Time: {resipe.cookingTime} </h3>
                <Link
                  to={`/recipes/${resipe.id}`}
                  className="py-2  px-3 border mt-3 mx-auto"
                >
                  Read More
                </Link>
              </div>
            
          );
        })}
    </div>
  );
}

export default Home;
