import { FormWrapper } from "./FormWrapper";

type LanguagesData = {
  languageOne: string
  languageTwo: string
  languageThree: string
}

type LanguagesFormProps = LanguagesData & {
  updateFields: (fields: Partial<LanguagesData>) => void 
}

export function Languages({languageOne, languageTwo, languageThree, updateFields}: LanguagesFormProps){
  return <FormWrapper title='Language Skills'>
    <label>Language One:</label>
    <input autoFocus required type="text" value={languageOne} onChange={e => updateFields({languageOne: e.target.value})} />
    <label>Language Two:</label>
    <input required type="text" value={languageTwo} onChange={e => updateFields({languageTwo: e.target.value})} />
    <label>Language Three:</label>
    <input required type="text" value={languageThree} onChange={e => updateFields({languageThree: e.target.value})} />
  </FormWrapper>

}