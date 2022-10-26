import { FormWrapper } from "./FormWrapper";

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

export function UserForm({firstName, lastName, placeOfResidence, email, sumarry, updateFields}: userFormProps){
  return (
    <FormWrapper title='Basic Information'>
      <label>First Name</label>
      <input autoFocus required type="text" value={firstName} onChange={e => updateFields({firstName: e.target.value})}/>
      <label>Last Name</label>
      <input required type="text" value={lastName} onChange={e => updateFields({lastName: e.target.value})} />
      <label>City</label>
      <input required type="text" value={placeOfResidence} onChange={e => updateFields({placeOfResidence: e.target.value})}/>
      <label>Email</label>
      <input required type="email" value={email} onChange={e => updateFields({email: e.target.value})}/>
      <label>Sumarry</label>
      <textarea required placeholder="Shortly about yourself here" value={sumarry} onChange={e => updateFields({sumarry: e.target.value})} ></textarea>
    </FormWrapper>
  )
}