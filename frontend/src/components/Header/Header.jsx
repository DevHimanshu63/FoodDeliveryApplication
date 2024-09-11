import React from 'react'

function Header() {
  return (
    <div className=''  
    style={{
        backgroundImage: 'url(/header_img.png)',
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '34vw', 
        margin:'30px auto', 
        position: 'relative',
        borderRadius: '10px'
      }}
    >
    <div className='absolute text-start bottom-[10%] left-[6vw] max-w-[50%] flex flex-col gap-[1.5vw]'>
        <h2 className='text-[3.5vw] text-white'>Order your favorite food here</h2>
        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt laudantium odit animi beatae earum vero sapiente exercitationem qui nam, quos magni perferendis, consectetur rerum eligendi architecto blanditiis unde maxime doloribus.</p>
        <button className='text-[#747474] p-[10px] max-w-[170px] bg-white text-[1vw] rounded-[50px] '>view more</button>
    </div>
    </div>
  )
}

export default Header