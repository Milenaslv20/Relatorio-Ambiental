import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

import treeimg from './img/tree.png'
import arrowright from './img/arrow_right.png'
import line1 from './img/line_1.png'


function Tree() {
  return (
    <div className={styles.tree_section}>
        <div className={styles.tree_home}>
            <img src={treeimg} width={800}/>
        </div>

        <div className={styles.button_project}>
            <Link to="/pwbi" target="_blank"><button>PROJETO SOLUÇÃO</button></Link>
        </div>

        <Link to="/industry"><img src={arrowright} className={styles.arrow_right} width={60} height={60}/></Link>

        <div className={styles.texts}>
            <div className={styles.projeto_doutorado}>
                <p>PROJETO DOUTORADO</p>
            </div>

            <div className={styles.titulo}>
                <h1>O Meio Ambiente e<br/>
                Crimes Ambientais:<br/>
                Entenda, Denuncie<br/>
                e Combata</h1>
            </div>

            <div className={styles.texto}>
                <p>O meio ambiente é o conjunto de elementos naturais e<br/>
                artificiais que nos rodeia e sustenta a vida na Terra. A quali-<br/>
                dade do meio ambiente é essencial para a saúde humana, a<br/>
                biodiversidade e a estabilidade dos ecossistemas. A degradação ambiental,<br/>
                como o desmatamento, a poluição e etc, gera impactos negativos significativos,<br/>
                não só para a fauna e flora, mas também para a nossa própria sobrevivência e<br/>
                qualidade de vida.</p>
            </div>
        </div>

        <div className={styles.line}>
            <img className={styles.line1_1} src={line1} width={1513}/>
        </div>
    </div>
  )
}

export default Tree