import React, { useState } from "react";
import './glossary.css'

export default function Glossary() {
    
    const [list] = useState([
        { id: 0, titulo: 'Animais', texto: 'Um texto', img: require('../../assets/images/imagesGlossary/Animals.jpg')},
        { id: 1, titulo: 'Militech', texto: 'Um texto', img: require('../../assets/images/imagesGlossary/Militech.jpg')},
        { id: 2, titulo: 'Arasaka', texto: 'Um texto', img: require('../../assets/images/imagesGlossary/Arasaka.jpg') },
        { id: 3, titulo: 'Polícia de night city', texto: 'Um texto', img: require('../../assets/images/imagesGlossary/NCPD.jpg')},
        { id: 4, titulo: 'BD (dança cerebral)', texto: 'Um texto', img: require('../../assets/images/imagesGlossary/Braindance.jpg') },
        { id: 5, titulo: 'Netrunner', texto: 'Um texto', img: require('../../assets/images/imagesGlossary/Netrunner.jpg')},
        { id: 6, titulo: 'Corpo', texto: 'Um texto', img: require('../../assets/images/imagesGlossary/Corpo.jpg')},
        { id: 7, titulo: 'Night city', texto: 'Um texto', img: require('../../assets/images/imagesGlossary/Night-City.jpg')},
        { id: 8, titulo: 'Ciberpsicose', texto: 'Um texto', img: require('../../assets/images/imagesGlossary/Cyberpsychosis.jpg') },
        { id: 9, titulo: 'Ripperdoc', texto: 'Um texto', img: require('../../assets/images/imagesGlossary/Ripperdoc.jpg')},
        { id: 10, titulo: 'Cyberpunk', texto: 'Um texto sobre max', img: require('../../assets/images/imagesGlossary/Cyberpunk.jpg')},
        { id: 11, titulo: 'Sandevistan ', texto: 'Um texto sobre max', img: require('../../assets/images/imagesGlossary/Sandevistan.jpg')},
        { id: 12, titulo: 'Cyberware (implantes ou cromo)', texto: 'Um texto sobre max', img: require('../../assets/images/imagesGlossary/Cyberware.jpg')},
        { id: 13, titulo: 'Catadores', texto: 'Um texto sobre max', img: require('../../assets/images/imagesGlossary/Scavengers.jpg')},
        { id: 14, titulo: 'Fixador', texto: 'Um texto sobre max', img: require('../../assets/images/imagesGlossary/Fixer.jpg') },
        { id: 15, titulo: 'Só', texto: 'Um texto', img: require('../../assets/images/imagesGlossary/Solo.jpg')},
        { id: 16, titulo: 'Ice', texto: 'Um texto', img: require('../../assets/images/imagesGlossary/ICE.jpg')},
        { id: 17, titulo: 'Técnico', texto: 'Um texto', img: require('../../assets/images/imagesGlossary/Techie.jpg')},
        { id: 18, titulo: 'Redemoinho', texto: 'Um texto', img: require('../../assets/images/imagesGlossary/Maelstrom.jpg')},
        { id: 19, titulo: 'Equipe de Trauma', texto: 'Um texto', img: require('../../assets/images/imagesGlossary/Trauma-Team.jpg')},
        { id: 20, titulo: 'Maxtac', texto: 'Um texto', img: require('../../assets/images/imagesGlossary/MaxTac.jpg')},
        { id: 21, titulo: 'Garras de Tigre', texto: 'Um texto', img: require('../../assets/images/imagesGlossary/Tyger-Claws.jpg') },
    ])

    const [imagem, setImagem] = useState(require('../../assets/images/imagesGlossary/Animals.jpg'))
    const [titulo, setTitulo] = useState('Animais')
    const [texto, setTexto] = useState('Um texto sobre animais')

    function mudarConteudo(i) {
        list.forEach(id => {
            if(i === id.id) {
                console.log(i)
                setTitulo(id.titulo)
                setTexto(id.texto)
                setImagem(id.img)
            }
        })
    }
            
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
                                    <div key={index} className="list-item">
                                    <p onClick={() => mudarConteudo(index)}>{item.titulo}</p>
                                    </div>
                                ))
                            }
                    </div>
                    <div className="about-img">
                        <div className="img-for-about">
                        <img src={imagem} alt="imagem"></img>
                        </div>
                        <h4 className="title-about-img">{titulo}</h4>
                        <p className="text-about-img">{texto}</p>
                    </div>
                </div>
                <div className="content-simple-line">
                <div className="simple-line-separate"></div>
                </div>
            </section>
        );
}