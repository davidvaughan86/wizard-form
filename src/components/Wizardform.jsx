
import React, {useState, useEffect} from 'react'


export default function WizardForm (props) {
    //we are duestructing two values out of the Array
    //returned by useState()
    //1st value is always the state varible
    //2nd value is always the setState function (for updating the variable)
    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('')
    const [house, setHouse] = useState('')

    useEffect(() => {console.log('changes');
    if (props.wizard.name) {
        setName(props.wizard.name);
        setOccupation(props.wizard.occupation);
        setHouse(props.wizard.house);
    }
}, [props])

useEffect(() => {
    console.log('you just changed the name')
}, [name]);
    
    return (
        
        <section>
            <h1>{props.title}</h1>
            <form
            onSubmit = {(e) => {
                e.preventDefault()
                const wizardObject ={
                    name,
                    occupation,
                    house
                };
                props.onSubmit(wizardObject)
                setName('');
                setOccupation('');
                setHouse('');
            }}>
                <label>
                    Wizard:

                    <input 
                    placeholder="david"
                        value={name}
                        onChange={(e) => { 
                            console.log(e.target.value)
                            setName(e.target.value)
                            
                        }}
                    />
                </label>
                <label>
                Job:
                <input
                placeholder = "software engineer"
                        value={occupation}
                        onChange={(e) => {
                            console.log(e.target.value)
                            setOccupation(e.target.value)
                        }}
                
                    />
                </label>
                <label>
                House:
                <input
                placeholder = "winning house"
                        value={house}
                        onChange={(e) => {
                            console.log(e.target.value)
                            setHouse(e.target.value)
                        }}
                
                    />
                </label>
                <input type = "submit" 
                value="Submit"
                
                />
            
                    
                
            </form>

        </section>



    )
}