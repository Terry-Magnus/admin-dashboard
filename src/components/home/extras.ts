import jane from "../../assets/images/person-7.png";
import mezie from "../../assets/images/person-1.png";
import katona from "../../assets/images/person-2.png";
import halasz from "../../assets/images/person-3.png";
import john from "../../assets/images/person-5.png";
import ana from "../../assets/images/person-4.png";
import george from "../../assets/images/person-6.png";
import pepper from "../../assets/images/pepper.png";
import burger from "../../assets/images/burger.png";
import citrus from "../../assets/images/citrus.png";
import meat from "../../assets/images/meat.png";
import tomatoes from "../../assets/images/tomatoes.png";
import icecream from "../../assets/images/icecream.png";
import { CustomerProps } from "./types";

export const customer_list: CustomerProps[] = [
  { name: "Ana Black", email: "ana@gmail.com", image: ana },
  { name: "George Litz", email: "georgelitz@gmail.com", image: george },
  { name: "John Miller", email: "jmiller@gmail.com", image: john },
  { name: "Jane Jonhson", email: "jj@gmail.com", image: jane },
  { name: "Mezei Ágnes", email: "fefekartika@gmail.com", image: mezie },
  { name: "Katona Beatrix", email: "edobram@gmail.com", image: katona },
  { name: "Halász Emese", email: "jiloputri@yahoo.com", image: halasz },
];

export const menuStyle = {
  ".MuiMenu-list": { padding: 0 },
  ".MuiPaper-root ": {
    padding: 0,
    borderRadius: "8px",
    width: "150px",
    border: "1px solid #E6E8F0",
    boxShadow: "0px 8px 16px 0px #8F95B226",
  },
  ".MuiListItem-root": {
    padding: 0,
  },
  ".MuiButtonBase-root": {
    fontWeight: 500,
    borderRadius: "8px",
    fontSize: "1rem",
    padding: "8px 18px",
  },
};

export const indicators = [
  {
    text: "Pending (10%)",
    bgcolor: "linear-gradient(283.95deg, #0049C6 -12.57%, #CDF4FF 126.88%)",
  },
  {
    text: "Income",
    bgcolor: "linear-gradient(135deg, #FFB7F5 0%, #6C5DD3 100%)",
  },
  {
    text: "Expance",
    bgcolor: "linear-gradient(333.01deg, #FF754C -23.54%, #FFB7F5 173.81%)",
  },
];

export const foods = [
  {
    name: "Surf & Turf Gift Basket",
    price: "$89.24",
    served: 456,
    image: pepper,
    width: "60%",
  },
  {
    name: "Shaking Beef Tri-Tip",
    price: "$69.46",
    served: 456,
    image: burger,
    width: "40%",
  },
  {
    name: "BBQ Rib Dinner",
    price: "$69.21",
    served: 456,
    image: citrus,
    width: "25%",
  },
  {
    name: "Chicken & Ribs Combo",
    price: "$98.49",
    served: 456,
    image: meat,
    width: "25%",
  },
  {
    name: "Fried Chicken Dinner",
    price: "$83.56",
    served: 456,
    image: tomatoes,
    width: "25%",
  },
  {
    name: "Dark & Stormy",
    price: "$90.58",
    served: 456,
    image: icecream,
    width: "25%",
  },
];

export const badges = [
  {
    bgcolor: "linear-gradient(283.95deg, #0049C6 -12.57%, #CDF4FF 126.88%)",
    name: "Pending (10%)",
  },
  {
    bgcolor: "linear-gradient(135deg, #FFB7F5 0%, #6C5DD3 100%)",
    name: "Income",
  },
  {
    bgcolor: "linear-gradient(333.01deg, #FF754C -23.54%, #FFB7F5 173.81%)",
    name: "Expance",
  },
  {
    bgcolor: "linear-gradient(333.01deg, #667EFE -23.54%, #FFB7F5 173.81%)",
    name: "Current customers",
  },
  {
    bgcolor: "linear-gradient(283.95deg, #A3CB31 -12.57%, #CDF4FF 126.88%)",
    name: "New customers",
  },
];
