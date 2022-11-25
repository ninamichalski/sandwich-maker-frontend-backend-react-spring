import SandwichOverview from "../components/SandwichOverview";
import CreateSandwich from "../components/CreateSandwich";
import React from "react";
import useSandwich from "../hooks/useSandwich";


export default function HomePage() {

    const {sandwiches, addSandwich, deleteSandwich} = useSandwich();

    return(
        <div>
            <div className="App">
                <header className="App-header">
                  <h1>SuuuuuperBurger</h1>
                 <div>
                     {sandwiches.length === 0
                       && <h3>Please add an Order</h3>}
                 </div>
                    <SandwichOverview sandwiches={sandwiches} deleteSandwich={deleteSandwich}/>
                    <CreateSandwich addSandwich={addSandwich}/>
                </header>
            </div>
        </div>
    )

}