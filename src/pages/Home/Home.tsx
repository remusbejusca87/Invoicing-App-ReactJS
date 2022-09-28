import React from "react";
import Title from "../../components/Title/Title";

const Home = () => {
  return (
    <>
      <Title title="This is the home page of the app." />
      <p> This page is same like about page. Web App with multiple pages. </p>
      <p>As you can see, it's just a test page.</p>
      <p>
        App has CRUD functionalities for the Frontend. It uses json-server that
        fetches data from a fake database. Http requests are made with axios.
      </p>
      <p>
        The functionalities are structured in components, custom hooks,
        interfaces, services.
      </p>
      <p>App was created using ReactJS, React Bootstrap and Axios.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
        praesentium voluptates earum dolorum temporibus! Porro distinctio
        veritatis voluptatem nobis hic soluta eos. Suscipit doloribus eum
        aliquid vel nostrum, placeat totam!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        veniam ut fuga eos animi consequuntur fugiat provident qui voluptatibus
        obcaecati sit corrupti perferendis perspiciatis laborum, minus aliquid
        culpa. Reiciendis, aperiam?
      </p>
    </>
  );
};

export default Home;
