import {useState} from "react"

function Skills() {

    const[skills, setSkills]= useState([]);

    const handleSkils = (event) => {
        console.log(event.target.value, event.target.checked);
    
        if(event.target.checked){
            setSkills([...skills, event.target.value]);
        }
        else{
            setSkills([skills.filter((item) => item!= event.target.value)]);
        }

    }

    return (
    <div>
        <h3>Select your Skills</h3>
        <input onChange={handleSkils} type="checkbox" id="PHP" value="PHP"/>
        <label htmlFor="PHP">PHP</label>
        <br />
        <input onChange={handleSkils} type="checkbox" id="JS" value="JS"/>
        <label htmlFor="JS">JS</label>
        <br />
        <input onChange={handleSkils} type="checkbox" id="Node" value="Node"/>
        <label htmlFor="Node">Node</label>
        <br />
        <input onChange={handleSkils} type="checkbox" id="Dot Net" value="Dot Net"/>
        <label htmlFor="Dot Net">Dot Net</label>

        <h1>{skills.toString()}</h1>
    </div>

    
    )
}

export default Skills;