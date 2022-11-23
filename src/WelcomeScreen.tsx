import Logo from "./images/react-logo.png"
import LogoTwo from "./images/vite-logo.png"
import { Text } from "@nextui-org/react"

export function WelcomeScreen() {
  return (
    <>
      <Text
        h2
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
      >
        TypeScript form with backend
      </Text>
      <span>Supercharged With: </span>
      <div className='images'>
        <img
          src={Logo}
          className='react-logo'
          style={{ width: "50px", height: "50px" }}
        />
        <img src={LogoTwo} style={{ width: "50px", height: "50px" }} />
      </div>
    </>
  )
}
