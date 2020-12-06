import React from "react";
import './banniereLogo.css'
import Linkedin from '../../assets/linkedin.png'
import Github from '../../assets/github.png'
import Cv from '../../assets/cv.png'
import CvPdf from '../../assets/CvDavid.pdf'



const BanniereLogo = () => {




    return(
        <>
        <div className="banniereLogo">
        <a href='https://www.linkedin.com/in/david-ruben/'>
                <img alt='LinkedIn' src={Linkedin} />
            </a>
                <a href='https://github.com/davidRbn'>
                    <img alt='Github' src={Github} />
            </a>
            <a href={CvPdf}>
                <img alt='LinkedIn' src={Cv} />
                </a>
        </div>
        </>
    )
}

export default BanniereLogo