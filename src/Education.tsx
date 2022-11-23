import { FormWrapper } from "./FormWrapper"
import { Input } from "@nextui-org/react"

type EducationData = {
  schoolName: string
  period: string
}

type EducationFormProps = EducationData & {
  updateFields: (fields: Partial<EducationData>) => void
}

export function Education({
  schoolName,
  period,
  updateFields,
}: EducationFormProps) {
  return (
    <FormWrapper title='Education'>
      <Input
        css={{ margin: "10px" }}
        labelPlaceholder='School and degree'
        clearable
        autoFocus
        required
        type='text'
        value={schoolName}
        onChange={(e) => updateFields({ schoolName: e.target.value })}
      />

      <Input
        css={{ margin: "10px" }}
        labelPlaceholder='Period'
        clearable
        required
        type='text'
        value={period}
        onChange={(e) => updateFields({ period: e.target.value })}
      />
    </FormWrapper>
  )
}
