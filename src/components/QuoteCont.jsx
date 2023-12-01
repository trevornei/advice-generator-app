import { data } from 'autoprefixer'
import React from 'react'
import { useState, useEffect } from 'react'
import QuoteBody from './QuoteBody'
import QuoteNum from './QuoteNum'

import DiceCont from './DiceCont/diceCont'

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

  return (
    <>
        <div className="w-screen md:w-33.75 px-6 md:m-0 sm:m-0 lg:m-0 md:h-25 sm:p-0 md:p-0 lg:p-0 bg-darkishBlue space-y-8 rounded-3xl flex flex-col items-center justify-center shadow-2xl shadow-darkishBlue">
                <div className="flex flex-col items-center justify-center w-full">
                    {advice && <QuoteNum quoteNum={advice.slip.id} />}
                    {advice && <QuoteBody adviceBody={advice.slip} />}
                    <svg className='invisible mt-6 sm:invisible md:visible lg:visible xl:visible 2xl:visible' width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillrule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
                    <svg className='mt-4 md:invisible sm:visible' width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillrule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
                </div>
            <div className="relative top-8 sm:top-8 md:-top-2 lg:-top-2 xl:-top-2 2xl:-top-2">
                <DiceCont getAdvice={getAdvice} />
            </div>
        </div>
    </>
  )
}
