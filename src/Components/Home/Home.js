import React from 'react'
import Banner from '../CarasolBar/BigCarasul';
import Details from '../WhatIsDyNAMITE/WhatIsDynamite';
import Products from '../Services/Products';
import Contact from '../Contact/Contact';
import BestSellingProducts from '../Services/Best selling products/BestSellingProducts';
import { UpFooter } from '../upFooter/upFooter';
const Home = () => {
    return (
        <div>
            <Banner/>
            {/* <Details/> */}
        <BestSellingProducts/>
        <Products/>
        <UpFooter/>
        </div>
    )
}
export default Home;
