export interface SkillProp{
    id :Array<string>
}

export interface UserObject {
name:string,
picture:string,
heading: string,
about: string,
skills: SkillProp
}