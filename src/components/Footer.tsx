import { ReactElement } from "react";
// import useCart from "../hooks/useCart";

// type PropsType = {
//   viewCart: boolean;
// };

const Footer = () => {
  // const { totalItems, totalPrice } = useCart();

  const year: number = new Date().getFullYear();

  const pageContent: ReactElement = <p>Shopping cart &copy; {year}</p>;

  const content: ReactElement = <footer>{pageContent}</footer>;

  return content;
};

export default Footer;
