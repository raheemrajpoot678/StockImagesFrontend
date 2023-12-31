import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/Category/Category";
import classes from "./MainPage.module.css";
import React, { useEffect, useRef } from "react";
import Gallery from "../../components/Gallery/Gallery";
import { useState } from "react";

const MainPage = () => {
  const [stickynav, setStickynav] = useState(false);
  const refElement = useRef(null);

  function onInterSection(entries) {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setStickynav(true);
    } else {
      setStickynav(false);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onInterSection, {
      threshold: 0,
      rootMargin: "-200px",
    });
    if (observer && refElement.current) {
      observer.observe(refElement.current);
    }
  }, []);
  return (
    <section>
      <div className={`${classes.layout}`}>
        <div className={`${classes.navbar}`}>
          <Navbar sticky={stickynav} />
        </div>
        <div className={`${classes.hero}`}>
          <Hero />
        </div>
        <div className={`${classes.category}`}>
          <Category />
        </div>
        <div ref={refElement} className={`${classes.gallery}`}>
          <Gallery />
        </div>
        <div className={`${classes.footer}`}>Footer</div>
      </div>
    </section>
  );
};

export default MainPage;
