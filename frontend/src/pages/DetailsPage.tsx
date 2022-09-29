import { Sandwich } from "../model/Sandwich";
import {Link, useParams} from "react-router-dom";

type DetailsPageProps = {
    sandwiches: Sandwich[];
}

export default function DetailsPage(props:DetailsPageProps){

    const params = useParams()
    const id = params.id

    if(id === undefined) {
        return(<>No id given!</>);
    }

    const sandwich = props.sandwiches.find(sw => {
        return sw.id === (id);
    })

    if(sandwich === undefined) {
        return (<>Character not found!</>);
    }

    return(
        <div>
            <h3> Details: </h3>
            <h3>
                {sandwich.name}
            </h3>
            <p>
                Patty : {sandwich.patty}
            </p>
            <p>
                Patty : {sandwich.numberOfPatties}
            </p>
            <p>
                Patty : {sandwich.grilled}
            </p>
            <p>
                Patty : {sandwich.extraWishes}
            </p>
            <p>
                <Link to={"/"}>back</Link>
            </p>

        </div>
    )

}