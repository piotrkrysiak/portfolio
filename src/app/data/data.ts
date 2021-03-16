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
import flutterLogo from "./../assets/skills/flutter.svg";
import reduxLogo from "./../assets/skills/redux.svg";
import graphqlLogo from "./../assets/skills/graphql.svg";
import gatsbyLogo from "./../assets/skills/gatsby.svg";
import vscLogo from "./../assets/skills/vsc.svg";
import prittierLogo from "./../assets/skills/prettier.svg";
import responsiveLogo from "./../assets/skills/responsive.svg";
import prof from "./../assets/prof.png";

import { Skill } from "../models/Skill";

export const AboutData: PageData = {
  aboutHreder: "Cześć!",
  aboutDescription:
    "Nazywam się Piotr Krysiak. \n Jestem studentem Informatyki na \n Politechnice Częstochowskiej i aktualnie rozpocząłem VI semestr. \n Specjalizację jaką wybrałem jest \n Programowanie AplikacjiInternetowych. \n Programowaniem interesuję się od liceum. \n Poznawałem różne języki oraz technologie jak np. SQL i .NET. \n Najlepiej natomiast czuję się przy tworzeniu interfejsów użytkownika. \n Obecnie zajmuję się głównie nauką \n oraz tworzeniem stron przy użyciu React i TypeScript. \n Są to technologie w których chciałbym się rozwijać. \n ",
  aboutImg: prof,
  heroImg:
    "https://cdn.pixabay.com/photo/2021/03/02/12/20/mountains-6062271_960_720.jpg",
  heroP: "My name is Piotr",
  heroH: "I'M DEVELOPER",
  mail: "krysiakpiotr14@gmail.com",
  phone: "790 720 515",
  hrefPhone: "tel:790720515",
  hrefMail: "mailto:krysiakpiotr14@gmail.com",
  hrefGit: "https://github.com/plotrekpl",
  hrefCV:
    "https://drive.google.com/file/d/1uNwLYydlg6kVchfyoDyxyWfgytp0Tn6s/view?usp=sharing",
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
  {
    id: 4,
    image: flutterLogo,
    description: "Flutter",
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
