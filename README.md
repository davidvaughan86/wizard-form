Wizard form:
create a form for editing 3 attributes:
name
occupation
house
when the form is submitted, save that to an array...somewhere?
confirm the new wizard is in the array by:
console.log()
maybe list them out?
or just use the inspector
when do we need useEffect?
if we want to edit, which...we do!
Steps! (aka built-in activities aka times when Chris gets more coffee)
 Create a basic WizardForm.jsx
fill out the basics (an import, a function, an export)
add a section
add a form
add one input
 Show the WizardForm in the App
 "wire up" the input so it's a connected component
create some state by calling useState()
PS: you gotta import useState
set the value of your input using your state variable
add an onChange that calls your setState function
it will usually look like this: (e) => { setState(e.target.value)}
 sending an action from WizardForm to App
begin by console logging the wizard submitted in the form
pass an onSubmit to the WizardForm
it should expect to receive the event
it should call e.preventDefault()
give the WizardForm's the onSubmit
add a submit button
 store the new wizard object in a state variable in App