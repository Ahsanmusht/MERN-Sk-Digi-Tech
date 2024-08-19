import React from 'react'

export const Services = () => {
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
        <div className='text-center my-8'>
            <h2 className='text-4xl font-semibold text-neutralDGray mb-2'>Our Clients</h2>
            <p className='text-neutralGray'>We have Been Working With some Fortune Clients.</p>
        
            {/* CLIENT LOGOS */}

            <div>
                <img src='../src/assets/Clients/3m.svg' />
            </div>
        
        </div>
    </div>
  )
}
