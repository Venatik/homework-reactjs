import Greetings from "./components/Greetings";
import Trips from "./components/Trips";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <div>
        <Greetings />
      </div>

      <div>
        <Trips />
      </div>

      <div>
        <AboutMe
          fullName="Stefan Trajkovski"
          from="Kumanovo"
          favoriteMovies={[
            "The Empire Strikes Back",
            "The Lord of the Rings",
            "The Departed",
          ]}
        />
      </div>
    </>
  );
}

export default App;
