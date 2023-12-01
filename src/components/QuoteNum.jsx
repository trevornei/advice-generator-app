import React from "react";

export default function QuoteNum({ quoteNum }) {
    return(
        <>
            <div className="">
                <h3 className="mt-12 mb-4 font-normal md:mb-0 sm:mb-0 md:mt-24 lg:mt-24 xl:mt-24 2xl:mt-24 tracking-extraWide font-manrope leading-2 text-neonGreen selection:bg-neonGreen selection:text-darkBlue">ADVICE  #{quoteNum}</h3>
            </div>
        </>
    )
}