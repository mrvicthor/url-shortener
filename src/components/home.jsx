import React from "react";
import Navbar from "./navbar";
import HeroSection from "./heroSection";
import Cards from "./cards";
import Boost from "./boost";
import Footer from "./footer";
import Form from "./form";

const Home = ({
  handleChange,
  handleSubmit,
  newUrl,
  items,
  errors,
  handleClick,
}) => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        newUrl={newUrl}
        errors={errors}
      />
      <Cards items={items} handleClick={handleClick} />
      <Boost />
      <Footer />
    </>
  );
};

export default Home;
