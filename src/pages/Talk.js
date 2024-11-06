import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

import arrowleft from './img/arrow_left.png'
import arrowright from './img/arrow_right.png'
import megaphone from './img/megaphone.png'
import line1 from './img/line_1.png'


function Talk() {
  return (
    <div className={styles.talk_section}>
        <div className={styles.texto}>
            <div className={styles.text}>
                <p>Denunciar crimes ambientais é crucial para a proteção do meio ambiente. Você pode fazer denúncias através de órgãos governamentais, como secretarias de meio ambiente, ou em plataformas especializadas de denúncias ambientais. Quando você denuncia um crime ambiental, você contribui para:</p>
            </div>

            <div className={styles.list}>
                <ul>
                    <li>Ação Legal e Repressão: As denúncias ajudam as autoridades a investigar e tomar medidas contra os infratores, aplicando as leis ambientais e promovendo a justiça.</li>
                    <li>Conscientização: Informar o público sobre crimes ambientais pode aumentar a conscientização e promover uma maior responsabilidade ambiental.</li>
                    <li>Proteção de Ecossistemas: Denunciar práticas prejudiciais pode ajudar a preservar habitats naturais e a biodiversidade.</li>
                </ul>
            </div>
        </div>


        <div className={styles.img_talk}>
            <img src={megaphone} width={700} height={750}/>
        </div>

        <div className={styles.line1}>
            <img src={line1}/>
        </div>

        <Link to="/apresentation"><img src={arrowright} className={styles.arrow_right} width={60} height={60}/></Link>
        <Link to="/industry"><img src={arrowleft} className={styles.arrow_left} width={60} height={60}/></Link>
    </div>
  )
}

export default Talk