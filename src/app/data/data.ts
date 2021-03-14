import { PageData } from "../models/PageData";
import html5Logo from "./../assets/skills/html5.svg";
import css3Logo from "./../assets/skills/css3.svg";
import jsLogo from "./../assets/skills/js.svg";
import gitLogo from "./../assets/skills/git.svg";
import reactLogo from "./../assets/skills/react.svg";
import styledLogo from "./../assets/skills/styled-components.svg";
import typescriptLogo from "./../assets/skills/typescript.svg";
import mobxLogo from "./../assets/skills/mobx.svg";
import englishLogo from "./../assets/skills/english.svg";
import dotnetLogo from "./../assets/skills/dotnet.svg";
import sqlliteLogo from "./../assets/skills/sqlite.svg";
import reduxLogo from "./../assets/skills/redux.svg";
import graphqlLogo from "./../assets/skills/graphql.svg";
import gatsbyLogo from "./../assets/skills/gatsby.svg";
import vscLogo from "./../assets/skills/vsc.svg";
import prittierLogo from "./../assets/skills/prettier.svg";
import responsiveLogo from "./../assets/skills/responsive.svg";
import { Skill } from "../models/Skill";

export const AboutData: PageData = {
  aboutHreder: "Cześć!",
  aboutDescription: "Nazywam się Piotr Krysiak. \n Jestem studentem Informatyki na trzecim roku. \n Specjalizację jaką wybrałem to Programowanie Aplikacji Internetowych. \n Programowaniem interesuję się od liceum, \n przez te wszystkie lata poznawałem różne języki oraz technologię natomiast najlepiej się czuję przy tworzeniu interfejsów użytkownika. \n Aktualnie zajmuję się głównie nauką oraz tworzeniem stron przy użyciu React i TypeScript. \n Są to technologię w których chciałbym się rozwijać. \n  Znam również technologię backendowe jak .NET i Sqlite.",
  aboutImg:
    "https://scontent.fktw4-1.fna.fbcdn.net/v/t1.0-9/106127592_3039742716132900_8202010127090341219_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Obc_4zqJiosAX8sZ8o-&_nc_ht=scontent.fktw4-1.fna&oh=d0d8dc8e957682b5cbcee89160f9d534&oe=606995D6",
  heroImg:
    "https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  heroP: "My name is Piotr",
  heroH: "I'M DEVELOPER",
};

export const title = "Używam i uczę się:";
export const itemsData: Array<Skill> = [
  {
    id: 1,
    image: html5Logo,
    description: "HTML 5",
  },
  {
    id: 2,
    image: css3Logo,
    description: "CSS",
  },
  {
    id: 3,
    image: jsLogo,
    description: "JavaScript",
  },
  {
    id: 4,
    image: gitLogo,
    description: "Git",
  },
  {
    id: 5,
    image: reactLogo,
    description: "React",
  },
  {
    id: 6,
    image: styledLogo,
    description: "styled-components",
  },
  {
    id: 7,
    image: typescriptLogo,
    description: "TypeScript",
  },
  {
    id: 8,
    image: mobxLogo,
    description: "Mobx",
  },
];

export const titleOthers = "Inne:";
export const itemsDataOthers: Array<Skill> = [
  {
    id: 1,
    image: englishLogo,
    description: "B2",
  },
  {
    id: 2,
    image: dotnetLogo,
    description: ".NET",
  },
  {
    id: 3,
    image: sqlliteLogo,
    description: "Sqlite",
  },
];

export const titleToLearn = "Planuję poznać:";
export const itemsDataToLearn: Array<Skill> = [
  {
    id: 1,
    image: reduxLogo,
    description: "Redux",
  },
  {
    id: 2,
    image: graphqlLogo,
    description: "GraphqlCMS",
  },
  {
    id: 3,
    image: gatsbyLogo,
    description: "Gatsby",
  },
];

export const titleConfig = "Konfiguracja: ";
export const itemsDataConfig: Array<Skill> = [
  {
    id: 1,
    image: vscLogo,
    description: "Visual Studio Code",
  },
  {
    id: 2,
    image: prittierLogo,
    description: "Czysty kod",
  },
  {
    id: 3,
    image: responsiveLogo,
    description: "Responsywność",
  },
];
