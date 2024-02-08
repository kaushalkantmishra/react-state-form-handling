import { useState, useEffect } from "react";

export default function Counter(){
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let increaseCountx = ()=>{
        setCountx((currCount)=> currCount+1);
    };
    let increaseCounty = ()=>{
        setCounty((currCount)=> currCount+1);
    };

    useEffect(function printSomthing(){
        console.log("this is a side effect");
    }, []);
    return(
        <div>
            <h3>count ={countx} </h3>
            <button onClick={increaseCountx}>+1</button>
            <h3>count ={county} </h3>
            <button onClick={increaseCounty}>+1</button>
        </div>
    );
}