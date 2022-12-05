import React from "react";
import './galery.css'

export default function Galery() {
        return (
            <section className="galery">
                <div className="line-black"></div>
                <div className="content-galery">
                    <div className="title-galery">Gallery</div>
                    <div className="imgages-galery">
                        <div className="img-galery">
                            <img src={require('../../assets/images/lucy.png')} alt="line"></img>
                        </div>
                        <div className="img-galery">
                            <img src={require('../../assets/images/Cyberpunk.gif')} alt="line"></img>
                        </div>
                        <div className="img-galery">
                            <img src={require('../../assets/images/maine.jpg')} alt="line"></img>
                        </div>
            
                        <div className="img-galery">
                            <img src={require('../../assets/images/kiwi.jpg')} alt="line"></img>
                        </div>
                        <div className="img-galery">
                            <img src={require('../../assets/images/becca.jpg')} alt="line"></img>
                        </div>
                        <div className="img-galery">
                            <img src={require('../../assets/images/pilar.jpg')} alt="line"></img>
                        </div>
                    </div>
                    <div className="prev-next">Gallery</div>
                </div>
            </section>
        )
}