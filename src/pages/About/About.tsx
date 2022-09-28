import React from "react";
import Title from "../../components/Title/Title";

const About = () => {
  return (
    <>
      <Title title="This is the about page of the app." />
      <p> As you can see, it's just a test page. </p>
      <p> Web App with multiple pages. </p>
      <p>
        App has CRUD functionalities for the Frontend. It uses json-server that
        fetches data from a fake database. Http requests are made with axios.
      </p>
      <p>
        The functionalities are structured in components, custom hooks,
        interfaces, services.
      </p>
      <p>App was created using ReactJS, React Bootstrap and Axios.</p>
    </>
  );
};

export default About;
