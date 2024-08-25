import "normalize.css";
import "./index.css";
import { dropDownMenu } from "./dropDownMenu";

const icon = document.querySelector("img");
const menuDiv = document.querySelector("div.menu");

const menu1 = dropDownMenu(icon, menuDiv);
