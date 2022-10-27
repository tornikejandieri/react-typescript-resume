import { FormEvent, useState } from 'react'
import { Education } from './Education'
import { Experience } from './Experience'
import { Languages } from './Languages'
import { useCustomHook } from './useCustumHook'
import { UserForm } from './UserForm'
import { WelcomeScreen } from './WelcomeScreen'



type FormData = {
  firstName: string
  lastName: string
  placeOfResidence: string
  sumarry: string
  position: string
  fromTo: string
  schoolName: string
  period: string
  languageOne: string
  languageTwo: string
  languageThree: string
  email: string
 
}

const initialData: FormData = {
  firstName: '',
  lastName: '',
  placeOfResidence: '',
  sumarry: '',
  position: "",
  fromTo: '',
  schoolName: '',
  period: '',
  languageOne: '',
  languageTwo: '',
  languageThree: '',
  email: '',
  
}


function App() {
  const [data, setData] = useState(initialData)

  

  function updateFields(fields: Partial<FormData>){
    setData(prev => {
      return {...prev, ...fields}
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } = useCustomHook([ 
  <WelcomeScreen />,
   <UserForm {...data} updateFields={updateFields} />,
    <Experience {...data} updateFields={updateFields} />,
    <Education {...data} updateFields={updateFields} />, 
    <Languages {...data} updateFields={updateFields} />,
   ])
   function startPage(){
    back()
    back()
    back()
    back()
    back()
   }

  function onSubmit(e: FormEvent){
    e.preventDefault()
    if(!isLastStep) return next()
    // api call here
    fetch('https://react-typescript-forms-default-rtdb.europe-west1.firebasedatabase.app/posts.json', {
      method: 'POST',
      body: JSON.stringify(data),

    }).then(() => {
      alert('submitted')
      setData(initialData)
      startPage()
    }) 
  }

  return <div style={{
    position: 'relative',
    background: 'white',
    border: 'none',
    padding: '2rem',
    margin: '1rem',
    borderRadius: '.5rem',
    fontFamily: 'Trebuchet MS',
    maxWidth: 'max-content'
  }}>
    <form onSubmit={onSubmit}>
      <div style={{
          position: 'absolute',
          top: '.5rem',
          right: '.5rem',
          
       }}>
        {currentStepIndex + 1} / {steps.length}
      </div>

       {step}

       <div style={{
            marginTop: '1rem',
            display: 'flex',
            gap: '5rem',
            justifyContent: 'flex-end'
       }}>
          {isFirstStep && <button type='button' onClick={back}>Back</button>}
          <button type='submit'>
            {isLastStep ? 'Finish' : 'Next'}
          </button>
       </div>
    </form>
  </div>
}

export default App
