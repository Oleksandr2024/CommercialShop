// import Nav from "./Nav";
// import useCart from "../hooks/useCart";

import CartLink from "./CartLink";
import Navbar from "./Navbar";

// type PropsType = {
//   viewCart: boolean;
//   setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
// };

const Header = () => {
  // const { totalItems, totalPrice } = useCart();

  // const content = (
  //   <header className="header">
  //     <div className="header__title-bar">
  //       <h1>Shop Name</h1>
  //       <div className="header__price-box">
  //         <p>Total Items: {totalItems}</p>
  //         <p>Total Price: {totalPrice}</p>
  //       </div>
  //       <Nav />
  //     </div>
  //   </header>
  // );

  return (
    <header className="header">
      <section className="header_logo_section">
        <img
          src="../images/logo.png"
          alt="Logo image"
          className="header_logo_image"
        />
      </section>
      <Navbar />
      <CartLink />
    </header>
  );
};

export default Header;
