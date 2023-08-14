import { ReactElement } from "react";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
}; // not DRY

const Nav = ({ viewCart, setViewCart }: PropsType) => {
  const button: JSX.Element = viewCart ? (
    <button onClick={() => setViewCart(false)}>Show products</button>
  ) : (
    <button onClick={() => setViewCart(true)}>Show cart</button>
  );

  const content: ReactElement = <nav className="nav">{button}</nav>;
  return content;
};

export default Nav;
