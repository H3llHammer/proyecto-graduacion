import { React } from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ycW-iaAfYHI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Home;
