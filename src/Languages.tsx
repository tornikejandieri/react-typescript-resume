import { FormWrapper } from "./FormWrapper"
import { Input } from "@nextui-org/react"

type LanguagesData = {
  languageOne: string
  languageTwo: string
  languageThree: string
}

type LanguagesFormProps = LanguagesData & {
  updateFields: (fields: Partial<LanguagesData>) => void
}

export function Languages({
  languageOne,
  languageTwo,
  languageThree,
  updateFields,
}: LanguagesFormProps) {
  return (
    <FormWrapper title='Language Skills'>
      <Input
        css={{ margin: "10px" }}
        labelPlaceholder='Language One'
        clearable
        autoFocus
        required
        type='text'
        value={languageOne}
        onChange={(e) => updateFields({ languageOne: e.target.value })}
      />

      <Input
        css={{ margin: "10px" }}
        labelPlaceholder='Language Two'
        clearable
        required
        type='text'
        value={languageTwo}
        onChange={(e) => updateFields({ languageTwo: e.target.value })}
      />

      <Input
        css={{ margin: "10px" }}
        labelPlaceholder='Language Three'
        clearable
        required
        type='text'
        value={languageThree}
        onChange={(e) => updateFields({ languageThree: e.target.value })}
      />
    </FormWrapper>
  )
}
