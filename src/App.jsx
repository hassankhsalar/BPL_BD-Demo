import { useState } from 'react';
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Players from "./components/Players";

const App = () => {
    // State to manage the coin count
    const [coinCount, setCoinCount] = useState(0);

    return (
        <div>
            {/* Passing coinCount to Header, and setCoinCount to Banner */}
            <Header coinCount={coinCount} />
            <Banner setCoinCount={setCoinCount} />
            <Players />
            <Footer />
        </div>
    );
};

export default App;