import { React } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";

import Login from "./pages/Login";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Graduados from "./pages/Graduados";
import Calendario from "./pages/Calendario";
import About from "./pages/About";
import Mesas from "./pages/Mesas";
import Footer from "./components/Footer";


const App = () =>
{
    return(
        <div className="App">
            <Router>
                <Nav/>
                    <Switch>
                        <div className="container">
                            <Route exact path="/">
                                <Home/>
                            </Route>
                            <Route exact path="/lista-de-graduados">
                                <Graduados/>
                            </Route>
                            <Route exact path="/calendario">
                                <Calendario/>
                            </Route>
                            <Route exact path="/mesa-y-lugares">
                                <Mesas/>
                            </Route>
                            <Route exact path="/about">
                                <About/>
                            </Route>
                        </div>
                    </Switch>
                <Footer/>
            </Router>
        </div>
    )
};

export default App;

/*
    useEffect(() => {
        for(let i = 0;i<100;i++)
        {
            render(
                <p className="frame">{i}</p>
            )
        }
    });
    */