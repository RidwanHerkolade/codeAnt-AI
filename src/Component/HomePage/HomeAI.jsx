import React from 'react'
import "./Homepage.css"
const HomeAI = () => {
  const AiData = [
    {
        id: 1, total: "30K+", description: "Language support"
    },
    {
        id: 2, total: "10K+", description: "Developers"
    },
    {
        id: 3, total: "100K+", description: "Hours saved"
    }
  ]
  return (
    <div className='homeAi__divs'>
        <div className='homeAi__div'>
            <div className='home__img'>
                <img src='./img/subtract2.png'/>
            </div>
            <h3 className='h3'>AI to Detect & Autofix Bad Code</h3>
        </div>
        <div className='counter__div'>
        {AiData.map((data) => {
            return [
                 <div className='counter__divs' key={data.id}>
                    <h2 className='h2'>{data.total}</h2>
                    <p className='p'>{data.description}</p>
                 </div>
            ]
        })}
        </div>
    </div>
  )
}
export default HomeAI