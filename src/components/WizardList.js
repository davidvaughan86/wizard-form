import React from 'react'

export default function WizardList(props) {
    // console.log(props.name)
    
    
    
    return(
    <ul>
        {
            props.wizards.map(w => <li key ={w.name}
                                        onClick={(e) => {
                                            console.log(w.name)
                                            props.chooseWizard(w)

                                        }}
                                        > {w.name}: {w.occupation} - 
                                        {w.house}
                                    </li>
                            
        )}
    
  </ul>
    )
}