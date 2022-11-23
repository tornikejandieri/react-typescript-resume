import { ReactNode } from "react"
import { Text } from "@nextui-org/react"

type FormWrapperProps = {
  title: string
  children: ReactNode
}

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <Text
        h2
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
          marginBottom: "50px",
          marginTop: "15px",
        }}
      >
        {title}
      </Text>

      <div>{children}</div>
    </>
  )
}
