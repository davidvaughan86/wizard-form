import logo from './logo.svg';
import './App.css';
import WizardForm from './components/Wizardform'
import React, {useState} from 'react'

function App() {
  const [ wizards, setWizards] = useState([])
  return (
    <div className="App">
      <WizardForm 
      title="add new wizard"
      onSubmit={(wizard)=>{
        console.log('=====================')
      console.log('here is the new wizard')
      console.log(wizard)
      //  dont mess with a state variable
      // .push() doesnt work because it changes the variable
      // to correctly -SetState- on an array
      const newWizardArray = [
        ...wizards, // copy the exist elements from the OLD array
        wizard // include the element
      ];
      setWizards(newWizardArray);}} />
        <ul>
          {
            wizards.map(w => <li key ={w.name}> {w.name}: {w.occupation} - {w.house}</li>)
          }
          <li>
            Harry Potter:Auror - Gryff
          </li>
        </ul>
       
    </div>
  );
}

export default App;
