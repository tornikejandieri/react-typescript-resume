import { FormWrapper } from "./FormWrapper"
import { Input } from "@nextui-org/react"

type UserData = {
  firstName: string
  lastName: string
  placeOfResidence: string
  email: string
  sumarry: string
}

type userFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({
  firstName,
  lastName,
  placeOfResidence,
  email,
  sumarry,
  updateFields,
}: userFormProps) {
  return (
    <FormWrapper title='Basic Information'>
      <Input
        css={{ margin: "10px" }}
        labelPlaceholder='First Name'
        clearable
        autoFocus
        required
        type='text'
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />

      <Input
        css={{ margin: "10px" }}
        labelPlaceholder='Last Name'
        clearable
        required
        type='text'
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />

      <Input
        css={{ margin: "10px" }}
        labelPlaceholder='Place Of Residence'
        clearable
        required
        type='text'
        value={placeOfResidence}
        onChange={(e) => updateFields({ placeOfResidence: e.target.value })}
      />

      <Input
        css={{ margin: "10px" }}
        labelPlaceholder='Your Email'
        clearable
        required
        type='email'
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />

      <Input
        css={{ margin: "10px" }}
        labelPlaceholder='Sumarry'
        clearable
        required
        placeholder='Shortly about yourself here'
        value={sumarry}
        onChange={(e) => updateFields({ sumarry: e.target.value })}
      ></Input>
    </FormWrapper>
  )
}
