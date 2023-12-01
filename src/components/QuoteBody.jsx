import React from "react";

export default function QuoteBody({ adviceBody }) {
    return(
        <div className="flex flex-col items-center justify-center text-3xl font-semibold text-center border-white font-manrope text-lightCyan md:w-80 md:h-48 sm:mt-4 md:mt-0 selection:bg-neonGreen selection:text-darkBlue">"{adviceBody && adviceBody.advice}"</div>
    )
}