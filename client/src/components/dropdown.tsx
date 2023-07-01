import React from 'react'

const dropdown = () => {
  return (
    <div className='dropdown'>
              <p >
              <input type="checkbox" className='mr-2'/>
                 Behaviourial
              </p>
              
              <div >
              <input type="checkbox" className='mr-2'/>
                technical
                <div>

                <p >
              <input type="checkbox" className='mr-2'/>
                 HTML
            </p>
                <p >
              <input type="checkbox" className='mr-2'/>
                 CSS
            </p>
                <p >
              <input type="checkbox" className='mr-2'/>
                 JavaScript
            </p>
                <p >
              <input type="checkbox" className='mr-2'/>
                 Node
            </p>
                <p >
              <input type="checkbox" className='mr-2'/>
                 CS Theory
                  </p>
                  
                </div>
                <button className='bg-transparent border-2 border-primary w-[80%] rounded-md'>+</button>
                  

            </div>
            </div>
  )
}

export default dropdown