import React from "react";
import { useHistory } from 'react-router-dom';

const Home = () => {

  const history = useHistory();

  return (
    <>
      <h3>Home Page</h3>
      <button id="order-pizza" onClick={() => history.push('/pizza')}>Order Pizza</button>
    </>
  );
};
export default Home;
