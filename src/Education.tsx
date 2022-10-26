import { FormWrapper } from "./FormWrapper";

type EducationData = {
  schoolName: string
  period: string
}

type EducationFormProps = EducationData & {
  updateFields: (fields: Partial<EducationData>) => void 
}

export function Education({schoolName, period, updateFields}: EducationFormProps){
  return <FormWrapper title="Education">
    <label>School & Degree Name</label>
    <input autoFocus required type="text" value={schoolName} onChange={e => updateFields({schoolName: e.target.value})} />
    <label>Period of Study</label>
    <input required type="text" value={period} onChange={e => updateFields({period: e.target.value})} />
  </FormWrapper>
}