import BookList from "@/components/BookList/BookList";
import Footer from "@/components/container/Footer";
import Logo from "@/components/container/Logo";
import SuggestionContainer from "@/components/container/SuggestionContainer";
import React from "react";

const page = () => {
  return (
    <>
      <Logo />
      <SuggestionContainer />
      <BookList />
      <Footer />
    </>
  );
};

export default page;
