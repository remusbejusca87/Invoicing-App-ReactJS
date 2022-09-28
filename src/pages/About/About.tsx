import React from "react";
import Title from "../../components/Title/Title";

const About = () => {
  return (
    <>
      <Title title="This is the app about page." />
      <p> Web App with multiple pages. </p>
      <p>
        App has CRUD functionalities for the Frontend.Used json-server that
        fetches data from a fake database.
      </p>
      <p>The functionalities are structured in components and custom hooks.</p>
      <p>
        App was created using ReactJS, React Bootstrap, React Query and React
        Redux.
      </p>
    </>
  );
};

export default About;
