import React from "react";

export default function QuoteBody({ adviceBody }) {
    console.log(`From QuoteBody.jsx: ===> ${adviceBody}`)
    return(
        <div className="">{adviceBody && adviceBody.advice}</div>
    )
}