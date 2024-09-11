import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Fooddisplay from '../../components/FoodDisplay/Fooddisplay';

function Home() {
  const [category , setCategory ] = useState('All')
  // console.log("category of food-------->>>>>>>>",category);
  
  return (
    <div>
        <Header />
        <ExploreMenu category = {category} setCategory = {setCategory} />
        <Fooddisplay category = {category}/>
    </div>
  )
}

export default Home