import { FormEvent, useState } from 'react'
import { AccountForm } from './AccountForm'
import { AddressForm } from './AddressForm'
import { useCustomHook } from './useCustumHook'
import { UserForm } from './UserForm'
import { WelcomeScreen } from './WelcomeScreen'



type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const initialData: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: ''
}


function App() {
  const [data, setData] = useState(initialData)

  function updateFields(fields: Partial<FormData>){
    setData(prev => {
      return {...prev, ...fields}
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } = useCustomHook([ <WelcomeScreen />, <UserForm {...data} updateFields={updateFields} />, <AddressForm {...data} updateFields={updateFields} />, <AccountForm {...data} updateFields={updateFields} /> ])

  function onSubmit(e: FormEvent){
    e.preventDefault()
    if(!isLastStep) return next()
    //api request here
  }

  return <div style={{
    position: 'relative',
    background: '#A18CD1',
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
