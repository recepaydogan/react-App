import "./css assets/App.css";
import "bulma/css/bulma.css";
import Course from "./components/course";
import Angular from "./images/a.jpg";
import Bootstrap from "./images/b.png";
import Csharp from "./images/c.png";
import Komple from "./images/k.jpg";

function App() {
  return (
    <div>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Link hero</p>
        </div>
      </section>
      <div className="container">
        {" "}
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                img={Angular}
                title="Angular"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, laboriosam."
              />
            </div>
            <div className="column">
              <Course
                img={Bootstrap}
                title="React"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, laboriosam."
              />
            </div>
            <div className="column">
              <Course
                img={Csharp}
                title="Vue"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, laboriosam."
              />
            </div>
            <div className="column">
              <Course
                img={Komple}
                title="Komple Uygulamalı..."
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, laboriosam."
              />
            </div>
          </div>
        </section>
      </div>{" "}
    </div>
  );
}

export default App;
