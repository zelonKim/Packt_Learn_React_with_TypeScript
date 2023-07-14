type props = {
    name: string;
    description: string;
    stars: number;
}

export function FoundRepo({name, description, stars}: props) {
    return(
        <div>
            <h2> {name} </h2>
            <div> {stars} Stars </div>
            <p>{description}</p>
        </div>
    )
}