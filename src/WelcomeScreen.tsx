import Logo from './images/react-logo.png'
import LogoTwo from './images/vite-logo.png'

export function WelcomeScreen(){
  return (
    <>
      <h2 style={{marginBottom: '40px'}}>TypeScript form with backend</h2>
     <span>Supercharged With: </span>
     <div className='images'>
     <img src={Logo} className='react-logo' style={{width: '150px',
      display: 'flex',
      justifyContent: 'center',
       alignItems: 'center',
       alignSelf: 'center',
      maxWidth: 'max-content',
        }} />
         <img src={LogoTwo} style={{width: '150px',
      display: 'flex',
      justifyContent: 'center',
       alignItems: 'center',
       alignSelf: 'center',
      maxWidth: 'max-content',
        }} />
     </div>
      
    </>
  )
}