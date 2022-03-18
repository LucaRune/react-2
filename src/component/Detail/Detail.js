import React, {useState} from 'react';
import {Route, useHistory, useParams } from "react-router-dom";
import './Detail.css';
import one from "../../img/one.jpg";
import two from "../../img/two.jpg";
import flower from "../../img/flower.png";

const Detail = (props) => {

    const history = useHistory();
    const[num,setnum] = useState([one,two,flower]);

    const { id } = useParams();     //id = :id 자리에 있던 숫자

    return (
        <div className="text">
            <img src={num[id]} width={250}/>
            <h4 >{props.icon[id].title}</h4>
            <p>{props.icon[id].content}</p>
            <p>{props.icon[id].price}$</p>
            <br/><br/>
            <button className="GoBackBtn" onClick={ ()=>{history.goBack()}}>Back</button>
            <button className="OrderBtn">Order</button>
            <br/>
            <button className="MainBtn" onClick={()=>{history.push("/")}}>Main</button>
        </div>
    );
};

export default Detail;