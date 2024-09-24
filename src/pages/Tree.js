import React from 'react'
import styles from './styles.css'
import { Link } from 'react-router-dom'

import treeimg from './img/1000_F_106258962_83hJpsuUdj34MCTnvO6Gzw5w0yRlKHkJ-Photoroom 1.png'
import arrowright from './img/arrow_right.png'
import line16 from './img/Line 16.png'

function Tree() {
  return (
    <div className="gradient">
        <div className="tree_section">
            <div className="tree_home">
                <img src={treeimg} width="700px"/>
            </div>

            <div class="button_project">
                <a routerLink="/pwbi" target="_blank"><button class="">PROJETO SOLUÇÃO</button></a>
                <Link to="/tree"><button>PROJETO SOLUÇÃO</button></Link>
            </div>

            <a href="/industry"><img src={arrowright} class="arrow_right" width="60px" height="60px"/></a>

            <div className="texts">
                <div class="projeto_doutorado">
                    <p>PROJETO DOUTORADO</p>
                </div>

                <div class="titulo">
                    <h1>O Meio Ambiente e<br/>
                    Crimes Ambientais:<br/>
                    Entenda, Denuncie<br/>
                    e Combata</h1>
                </div>

                <div class="texto">
                    <p>O meio ambiente é o conjunto de elementos naturais e<br/>
                    artificiais que nos rodeia e
                    sustenta a vida na Terra. A quali-<br/>
                    dade do meio ambiente é essencial para a saúde humana, a biodiversidade e<br/>
                    a estabilidade dos ecossistemas. A degradação ambiental, como o desmatamento,<br/>
                    a poluição e etc, gera impactos negativos significativos, não só para a fauna e flora,<br/>
                    mas também para a nossa própria sobrevivência e qualidade de vida.</p>
                </div>
            </div>

            <div class="line">
                <img class="line1_1" src={line16} width="1513px"/>
            </div>
        </div>
    </div>
  )
}

export default Tree