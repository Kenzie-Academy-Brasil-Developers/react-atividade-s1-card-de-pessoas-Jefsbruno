import "./style.css"

function PersonNome( {name, age, country} ) {


    return (

        <div className = 'box'>

            <h1>Dev: {name}</h1>
            <h3>Idade: {age}</h3>
            <h2>país: {country}</h2>

        </div>
    )
}


export default PersonNome

