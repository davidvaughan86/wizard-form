import logo from './logo.svg';
import './App.css';
import WizardForm from './components/Wizardform'
import React, {useState, useEffect} from 'react'
import WizardList from './components/WizardList'


function App() {
  
  const [wizards, setWizards] = useState ([]);
  const [wizardsToEdit, setWizardsToEdit] = useState({})

  


  const chooseWizard = (wizard) => {
    
      console.log(`App sees ${wizard.name}`)
      setWizardsToEdit(wizard);
    }
  
  
  const onSubmit = (wizard) => {

      // console.log('=====================')
      // console.log('here is the new wizard')
      // console.log(wizard)
      //  dont mess with a state variable
      // .push() doesnt work because it changes the variable
      // to correctly -SetState- on an array
      const newWizardArray = [
        ...wizards, // copy the exist elements from the OLD array
        wizard // include the element
      ];
      setWizards(newWizardArray);}
  
  return (
    <div className="App">
      <WizardForm 
      title="add new wizard"
      onSubmit={onSubmit}
      wizard={wizardsToEdit}
      />
       <WizardList 
       wizards={wizards} 
       chooseWizard={chooseWizard}
       
       />
       
    </div>
  );
  }

export default App;
