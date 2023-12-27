export enum SelectedPage {
  Home = "home",
  Fundraising = "fundraising",
  AboutAdoption = "aboutadoption",
  Adoption = "adoption",
  Contact = "contact",
}

export interface FundraisingType {
  title: string;
  image: string;
  icon: JSX.Element;
}

export interface AdoptionType {
  image: string;
  name: string;
  gender: string;
  age: string;
}
