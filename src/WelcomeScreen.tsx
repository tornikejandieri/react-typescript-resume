import Logo from './images/react-logo.png'
import LogoTwo from './images/vite-logo.png'

export function WelcomeScreen(){
  return (
    <>
      <h2 style={{marginBottom: '40px'}}>Welcome To The Online CV Maker</h2>
     <span>Powered By: </span>
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