import React, { useState } from "react";
import './glossary.css'

export default function Glossary() {

    const [list] = useState([
        'Animais', 'Arasaka', 'Cai', 'Canal',
        'Cibernética', 'ciberpsicose', 'corpe', 'cyberpunk',
        'Frila', 'Garras de tygre', 'Max-tac', 'Maelstrom', 'Medicânico (cânico)', 'Militech',
        'Nd (neurodança)', 'Night city', 'Polícia de night city',
        'Rapineiros', 'Sandevistan', 'Trauma team', 'Trilha-rede', 'Ttécnico'
    ])

    // const [newClass,setNewClass ] = useState('')
    // const [active, setActive] = useState(false)

    // const addClass = (event) => {
    //     if (event.target.classList.contains("active")) {
    //       event.target.classList.remove("active");
          
    //     } else {
    //       event.target.classList.add("active");
    //     }
    //   };

    // const addClass = (event) => {
    //     if(active === false) {
    //         event.target.classList.add("active");
    //         setActive(true)
    //     } else {
    //         event.target.classList.remove("active");
    //         setActive(false)
    //     }
    // }
            
        return (
            <section className="glossary">
                <div className="line-black-glossary"></div>
                <div className="title-glossary">Glossary</div>
                <div className="content-simple-line">
                <div className="simple-line-separate"></div>
                </div>
                <div className="content-glossary">
                    <div className="list">
                        
                            {
                                list.map((item, index) => (
                                    <div className="list-item">
                                    <p key={index}>{item}</p>
                                    </div>
                                ))
                            }

                        
                    </div>
                    <div className="about-img">
                        <div className="img-for-about">
                        <img src={require('../../assets/images/animais.jpg')} alt="imagem"></img>
                        </div>
                        <h4 className="title-about-img">Animais</h4>
                        <p className="text-about-img">Gangue bem conhecida a oeste de Pacifica, os Animais inventaram e,
                            posteriormente, aperfeiçoaram um método de luta de rua que lhes
                            permite enfrentar adversários cromados enquanto usam implantes
                            artesanais feitos sob medida que evitam os eletrônicos.
                            Por sua ferocidade e afeição pela batalha, são seguranças e
                            guardas valiosos.</p>
                    </div>
                </div>
                <div className="content-simple-line">
                <div className="simple-line-separate"></div>
                </div>
            </section>
        );
}