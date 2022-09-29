import {ChangeEvent, FormEvent, useState} from "react";
import {Sandwich} from "../model/Sandwich";
import "./CreateSandwich.css";

type CreateSandwichProps = {
    addSandwich: (description: Sandwich) => void
}

export default function CreateSandwich(props: CreateSandwichProps) {

    const emptySandwichPlaceholder: Sandwich = {
        id: "",
        name: "",
        patty: "",
        numberOfPatties: 0,
        grilled: false,
        extraWishes: ""
    }

    const [sandwich, setSandwich] = useState(emptySandwichPlaceholder)

    function handleChange(event:ChangeEvent<HTMLInputElement>) {
        const inputFeldName = event.target.name;
        const inputFeldValue = event.target.value;
        const inputFeldType = event.target.type;

        setSandwich((oldForm) => ({
            ...oldForm,
            [inputFeldName]:
                inputFeldType === "checkbox" ? event.target.checked
                    : inputFeldValue
        }))
    }

        function handleSubmit(e:FormEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log(sandwich)
            props.addSandwich(sandwich)
        }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Which burger would you like?
                <input
                    name="name"
                    type="text"
                    value={sandwich.name}
                    placeholder="The Awesome Burger"
                    onChange={handleChange}/>
                </label>
                <label>Which patty would you like on your burger?
                <input
                    name="patty"
                    type="text"
                    value={sandwich.patty}
                    placeholder="Veggy patty"
                    onChange={handleChange}/>
                </label>
                <label>How many burgers would you like?
                <input
                    name="numberOfPatties"
                    type="text"
                    value={sandwich.numberOfPatties}
                    placeholder="1"
                    onChange={handleChange}/>
                </label>
                <label>Any more wishes?
                <input
                    name="extraWishes"
                    type="text"
                    value={sandwich.extraWishes}
                    placeholder="Red onions"
                    onChange={handleChange}/>
                </label>
                <label>Do you like your burger grilled?
                <input
                    name="grilled"
                    type="checkbox"
                    checked={sandwich.grilled}
                    onChange={handleChange}/>
                </label>
                <button>Bestellung hinzufügen</button>
            </form>

        </div>
    )
    /* TODO: Bonusaufgabe 3 -> Gib dem Sandwich-Objekt mehr Attribute (im Frontend + Backend)  */
}