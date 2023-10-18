// Hooks
import { useState, useEffect } from "react";

// Imagens
import iPhoneGreen from "../img/iphone_green.jpg";
import iPhoneBlue from "../img/iphone_blue.jpg";
import iPhoneGolden from "../img/iphone_golden.jpg";
import iPhoneGrafie from "../img/iphone_grafite.jpg";
import iPhoneSilver from "../img/iphone_silver.jpg";

const Banner = () => {

    const [imgBanner, setImgBanner] = useState(iPhoneBlue);

    const handleImg = () => {
        setImgBanner(iPhoneGreen);
    }

    const handleImgTwo = () => {
        setImgBanner(iPhoneSilver);
    }
    
    const handleImgTree = () => {
        setImgBanner(iPhoneGolden);
    }

    const handleImgFour = () => {
        setImgBanner(iPhoneGrafie);
    }

    const handleImgFive = () => {
        setImgBanner(iPhoneBlue);
    }

  return (
    <div className='banner'>
        <img src={imgBanner} alt="iPhone 13" />
        <div className='btns-colors'>
            <ul>
                <li>
                    <button className='verde' onClick={handleImg}> </button>
                    <span>Verde-Alpino</span>
                </li>
                <li>
                    <button className='prata' onClick={handleImgTwo}> </button>
                    <span>Prateado</span>
                </li>
                <li>
                    <button className='dourado' onClick={handleImgTree}> </button>
                    <span>Dourado</span>
                </li>
                <li>
                    <button className='grafite' onClick={handleImgFour}> </button>
                    <span>Grafite</span> 
                </li>
                <li>
                    <button className='azul' onClick={handleImgFive}> </button>
                    <span>Azul-Sierra</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Banner;