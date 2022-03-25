import './App.css';
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Detail from "./component/Detail/Detail";
import MainBanner from "./component/MainBanner/MainBanner";
import data from "./data";

import one from './img/one.jpg';
import two from './img/two.jpg';
import flower from './img/flower.png';

import {Link, Route, Switch, useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

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
                        <button className='moreBtn' onClick={()=>{
                            axios.get('https://codingapple1.github.io/shop/data211.json')
                                .then((result)=>{console.log(result.data)}) // 성공하면 실행
                                .catch(()=>{console.log('실패했습니다')}) // 실패하면 실행
                        }}>MORE</button>
                    </div>
                </Route>
                <Route path="/detail/:id">
                    <Navbar/>
                    <Detail icon={icon}/>
                </Route>
                {/*<Route path="/detail">*/}
                {/*    <Navbar/>*/}
                {/*    <img src="https://i.pinimg.com/564x/4d/67/95/4d679558dc044124695c37000a04b6be.jpg"/>*/}
                {/*    <Footer/>*/}
                {/*</Route>*/}
            </div>
            <Footer/>
        </div>
    );
}

export default App;
