import './App.css';
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Detail from "./component/Detail/Detail";
import data from "./data";

import one from './img/one.jpg';
import two from './img/two.jpg';
import flower from './img/flower.png';

import {Link, Route, Switch, useHistory} from "react-router-dom";
import {useState} from "react";
import MainBanner from "./component/MainBanner/MainBanner";

function App() {

    let [icon,seticon] = useState(data);
    const[num,setnum] = useState([one,two,flower]);
    const history = useHistory();


    return (
        <div className="App">
            <div className="layoutContainer">
                <Route exact path="/">
                    <div className="containerInner">
                        <Navbar/>
                        <MainBanner/>
                        <section className="ElementCardSection">
                                {
                                    icon.map(function (a, i) {
                                        return (
                                            <div className="ElementCardWrapper">
                                                <img onClick={()=>history.push('/detail/'+[i])} src={num[i]} width={250}/>
                                                <p/>
                                                <h4 className="name">{icon[i].title}</h4>
                                                <p className="price">{icon[i].content} <br/> {icon[i].price}$</p>
                                            </div>
                                        )
                                    })
                                }
                        </section>
                        <Footer/>
                    </div>
                </Route>
                <Route path="/detail/:id">
                    <Navbar/>
                    <Detail icon={icon}/>
                    <Footer/>
                </Route>
                <Route path="/detail">
                    <Navbar/>
                    <img src="https://i.pinimg.com/564x/4d/67/95/4d679558dc044124695c37000a04b6be.jpg"/>
                    <Footer/>
                </Route>
            </div>
        </div>
    );
}

export default App;
