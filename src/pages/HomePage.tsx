import { useState, useEffect } from "react";

const HomePage = () => {
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 3000); // Delay for 1 second
  }, []);

  return (
    <main>
      <section className={`home_wallpaper ${animate ? "animate" : ""}`}>
        Some banner
      </section>
      <section className="shop_section">Shop</section>
      <section className="about_section">About</section>
    </main>
  );
};

export default HomePage;
