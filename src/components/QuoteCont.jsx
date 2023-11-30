import { data } from 'autoprefixer'
import React from 'react'
import { useState, useEffect } from 'react'
import QuoteBody from './QuoteBody'
import QuoteNum from './QuoteNum'

/*This container sets the background for: 
  - QuoteNumber
  - QuoteBody
  - DiceButton

  State AND GET request will in QuoteCont.jsx
  var for quoteNum
  var for quoteBody

  From Slip API: 
  Random Advice GET Request:
  Returns: 
    - URL: 
    - Descripton: 
    - Parameters: 
  */

export default function QuoteCont() {

  const [advice, setAdvice] = useState(null)

  const URL = 'https://api.adviceslip.com/advice'

  const getAdvice = () => {
    fetch(URL)
      .then(data => data.json())
      .then(data => {
        setAdvice(data)
      })
      .catch(error => {
        console.log('Error fetching advice: ' + error)
      })
  }

  // Fetch advice when the component mounts
  useEffect(() => {
    getAdvice()
  }, [])

  console.log(advice)
  return (
    <>
        <div className="w-33.75 h-22.75 bg-darkishBlue rounded-3xl px-20 pt-12 flex flex-col items-center justify center">
            {/* <QuoteNum /> */}
            {advice && <QuoteNum quoteNum={advice.slip.id} />}
            {/*Short-Circuit Evaluation: && is a conscise way to conditionally render <QuoteBody /> if the value of advice != null; */}
            {advice && <QuoteBody adviceBody={advice.slip} />} 
        </div>
    </>
  )
}
