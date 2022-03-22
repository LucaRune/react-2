import React, {useState} from 'react';
import {Route, useHistory, useParams } from "react-router-dom";
import styled from 'styled-components';
import './Detail.css';
import './Detailsass.scss';

import one from "../../img/one.jpg";
import two from "../../img/two.jpg";
import flower from "../../img/flower.png";

// `` backtick
let 박스 = styled.div`   // css 를 미리 입혀놓은 컴포넌트      
  padding-top: 20px;
`;
let 제목 = styled.h4` 
  font-size: 25px;
  color: ${ props => props.색상 }  // 여러가지 비슷한 UI 가 필요한 경우 props 문법을 이용
`;
// ${ }자바 스크립트 문법 : 백틱 기호 안에 쓸 수 있는 문법, 글자 중간중간 변수나 함수를 집어 넣을 때 사용 `글자${변수명}글자`

const Detail = (props) => {

    const history = useHistory();
    const[num,setnum] = useState([one,two,flower]);

    const { id } = useParams();     //id = :id 자리에 있던 숫자

    return (
        <div className="text">
            <박스>
                <제목 색상={'darkgray'}>Detail Page</제목>             {/* props 문법 : 보낼이름={변수명}   보낼이름="일반문자" */}
                <제목 색상={'gray'}>Detail Page</제목>
                <div className='red'>SASS</div>
            </박스>

            <div className='my-alert'>Almost Sold Out !</div>
            <div className='my-alert2'>Almost Sold Out !</div>
            <div className='my-alert3'>Almost Sold Out !</div>

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