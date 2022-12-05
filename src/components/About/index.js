import React from "react";
import './about.css'

export default function About() {
        return (
            <section>
                <div className="content-line">
                <div className="top-line"></div>
                <div className="bg"></div>
                </div>
                <div className="content-text">
                    <div className="text-title">
                        Now available on
                    </div>
                    <div className="netflix"></div>
                </div>
                <div className="line-content">
                <img className="line" src={require('../../assets/images/line-section.png')} alt="line"></img>
                </div>
                <div className="summary">
                    <div className="summary-text text-title">
                        Cyberpunk: Edgerunners tells a standalone, 10-episode    
                        storyabout a street kid trying to survive in a
                        technology and body modification-obsessed city of the future.
                    </div>
                </div>
                <div className="summary">
                    <div className="summary-text text-title">
                    Having everything to lose, he chooses to stay alive
                    by becoming an edgerunner—a mercenary outlaw also
                    known as a cyberpunk.
                    </div>
                </div>
            </section>
        );
    }
