import React from "react";

export default function QuoteNum() {
    let starter = Math.floor(Math.random() * 10 +1);
    let mixer = Math.floor(Math.random() * Math.E);
    let ender = starter - mixer * Math.floor(Math.random() * 200 + 1)

    if (ender) {
        ender = Math.abs(ender)
    }
    
    console.log(ender)

    console.log(starter)
    return(
        <>
            <div className="">
                <h3 className="">Advice Number: {ender} </h3>
            </div>
        </>
    )
}