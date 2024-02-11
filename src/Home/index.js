import React from 'react';
import styles from './style.module.css';
import sideImg from '../Assets/Images/shoe_image.png'
import amazonImg from '../Assets/Images/amazon.png';
import flipkartImg from '../Assets/Images/flipkart.png';

const Home = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.descriptionSec}>
                    <h1 className={styles.mainHeading}>
                        YOUR FEET
                        DESERVE
                        THE BEST
                    </h1>
                    <p className={styles.mainPara}>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    
                    <div className={styles.btnContainer}>
                    <button className={styles.shopBtn}>Shop Now</button>
                    <button className={styles.categoryBtn}>Category</button>
                   </div>
                   
                   <div className={styles.shops}>
                         <p>Also Available On</p>
                         <img src={amazonImg} alt='amazon shop'/>
                         <img src={flipkartImg} alt='amazon shop'/>
                   </div>
                </div>
                <div className={styles.imageSec}>
                
                    <img src={sideImg}  alt='shoe'/>
                </div>
            </div>
        </>
    )
}

export default Home;