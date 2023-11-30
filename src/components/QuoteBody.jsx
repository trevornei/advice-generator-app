import React from "react";

export default function QuoteBody({ adviceBody }) {
    return(
        <div className="font-extrabold text-lightCyan">"{adviceBody && adviceBody.advice}"</div>
    )
}