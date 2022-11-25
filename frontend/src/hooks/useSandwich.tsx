import {useEffect, useState} from "react";
import axios from "axios";
import {Sandwich} from "../model/Sandwich";


export default function useSandwich() {

    // Creates a state "sandwiches" and gives us a method to change/set it
    const [sandwiches, setSandwiches] = useState([]);

    // Load Todos from backend
    useEffect ( () => {
        loadSandwiches()

    } , [] ) // empty dependency array = execute only when website was rendered the first time

    const loadSandwiches = () => {
        axios.get("/api/sandwich/")
            .then((response) => response.data)
            .then((sandwiches) => setSandwiches(sandwiches))
    }

    const addSandwich = (newSandwich: Sandwich) => {
        // We use .then here to reload the sandwiches only when the get is done
        axios.post("/api/sandwich", newSandwich)
            .then(loadSandwiches) // reload sandwiches from backend
    }

    const deleteSandwich = (id: string) => {

        axios.delete("/api/sandwich/" + id)
            .then(loadSandwiches) // reload sandwiches from backend
    }

    return(

        {sandwiches, addSandwich, deleteSandwich}

    )
}