import React from "react";
import MovieCard from "./components/MovieCard";


function App() {
    return (  
        <>
            <MovieCard 
                title="Pulp Fiction"
                description="1994: Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions."
            /> 

            <MovieCard 
                title="Money Heist"
                description="TV Series (2017 - now): A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose."
            />
        </>
    )
}

export default App;
