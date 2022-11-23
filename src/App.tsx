import { FormEvent, useState } from "react"
import { Education } from "./Education"
import { Experience } from "./Experience"
import { Languages } from "./Languages"
import { useCustomHook } from "./useCustumHook"
import { UserForm } from "./UserForm"
import { WelcomeScreen } from "./WelcomeScreen"
import { globalCss } from "@nextui-org/react"
import { Button } from "@nextui-org/react"
import { Card, Grid, Progress } from "@nextui-org/react"

const globalStyles = globalCss({
  body: { margin: 0 },
})

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
  firstName: "",
  lastName: "",
  placeOfResidence: "",
  sumarry: "",
  position: "",
  fromTo: "",
  schoolName: "",
  period: "",
  languageOne: "",
  languageTwo: "",
  languageThree: "",
  email: "",
}

function App() {
  const [data, setData] = useState(initialData)

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useCustomHook([
      <WelcomeScreen />,
      <UserForm {...data} updateFields={updateFields} />,
      <Experience {...data} updateFields={updateFields} />,
      <Education {...data} updateFields={updateFields} />,
      <Languages {...data} updateFields={updateFields} />,
    ])
  function startPage() {
    back()
    back()
    back()
    back()
    back()
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    // api call here
    fetch(
      "https://react-typescript-forms-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    ).then(() => {
      alert("submitted")
      setData(initialData)
      startPage()
    })
  }
  globalStyles()
  return (
    <Grid.Container gap={10}>
      <Grid>
        <Progress
          indeterminated
          value={50}
          color='secondary'
          status='secondary'
          size='xs'
        />
        <Card
          css={{ padding: "30px", display: "flex", flexDirection: "column" }}
        >
          <div>
            <form onSubmit={onSubmit}>
              {/* <div>
                {currentStepIndex + 1} / {steps.length}
              </div> */}

              {step}

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  gap: "50px",
                }}
              >
                <Card.Divider />
                {isFirstStep && (
                  <Button
                    color='gradient'
                    css={{ margin: "30px" }}
                    type='button'
                    onClick={back}
                  >
                    Back
                  </Button>
                )}
                <Button color='gradient' css={{ margin: "30px" }} type='submit'>
                  {isLastStep ? "Finish" : "Next"}
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </Grid>
    </Grid.Container>
  )
}

export default App
