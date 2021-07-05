import React from "react";
import StarBg from "./Components/Rewards/HeroSection/StarBg";
import Header from "./Components/Rewards/Header/Header";
import NavBar from "./Components/Rewards/NavBar/NavBar";
import Body from "./Components/Rewards/Body/Body";
import Footer from "./Components/Rewards/Footer/Footer";

interface Props {}

const App: React.FC<Props> = (props) => {
  return (
    <div>
        <NavBar/>
        <Header/>
        <StarBg/>
        <Body/>
        <Footer/>
    </div>
  )
}

App.defaultProps = {}

export default React.memo(App);