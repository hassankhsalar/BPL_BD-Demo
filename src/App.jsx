import Banner from "./components/Banner";
import Footer from "./components/footer";
import Header from "./components/Header";
import Players from "./components/Players";

const App = () => {
  return (
    <div>
      {/* header */}
      <Header/>
      {/* banner */}
      <Banner/>
      {/* player cards list */}
      <Players/>
      {/* footer */}
      <Footer/>

    </div>
  );
};

export default App;