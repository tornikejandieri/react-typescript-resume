import { FormWrapper } from "./FormWrapper";

type ExperienceData = {
 position: string
  fromTo: string
}

type ExperienceFormProps = ExperienceData & {
  updateFields: (fields: Partial<ExperienceData>) => void 
}

export function Experience({position, fromTo, updateFields }: ExperienceFormProps){
  return <FormWrapper title="Work Experience">
    <label>Position</label>
    <input autoFocus required type="text" value={position} onChange={e => updateFields({position: e.target.value})} />
    <label>From-To</label>
    <input required type="text" value={fromTo} onChange={e => updateFields({fromTo: e.target.value})} />
  </FormWrapper>
}