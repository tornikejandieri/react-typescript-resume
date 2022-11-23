import { FormWrapper } from "./FormWrapper"
import { Input } from "@nextui-org/react"

type ExperienceData = {
  position: string
  fromTo: string
}

type ExperienceFormProps = ExperienceData & {
  updateFields: (fields: Partial<ExperienceData>) => void
}

export function Experience({
  position,
  fromTo,
  updateFields,
}: ExperienceFormProps) {
  return (
    <FormWrapper title='Work Experience'>
      <Input
        css={{ margin: "10px" }}
        labelPlaceholder='Position'
        clearable
        autoFocus
        required
        type='text'
        value={position}
        onChange={(e) => updateFields({ position: e.target.value })}
      />

      <Input
        css={{ margin: "10px" }}
        labelPlaceholder='From - To'
        clearable
        required
        type='text'
        value={fromTo}
        onChange={(e) => updateFields({ fromTo: e.target.value })}
      />
    </FormWrapper>
  )
}
