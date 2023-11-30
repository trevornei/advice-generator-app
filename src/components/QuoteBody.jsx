import React from "react";

export default function QuoteBody({ adviceBody }) {
    return(
        <div className="text-3xl font-bold text-center text-lightCyan">"{adviceBody && adviceBody.advice}"</div>
    )
}