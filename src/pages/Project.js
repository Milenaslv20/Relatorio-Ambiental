import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

import arrowleft from './img/arrow_left.png'
import arrowright from './img/arrow_right.png'
import apresentationproject from './img/apresentation_project.png'
import line1 from './img/line_1.png'

function Project() {
  return (
    <div className={styles.project_section}>
        <Link to="/apresentation"><img src={arrowleft} className={styles.arrow_left} width={60} height={60}/></Link>
        <Link to="/conclusion"><img src={arrowright} className={styles.arrow_right} width={60} height={60}/></Link>

        <div className={styles.texto}>
            <div className={styles.text}>
                <p>Tendo em vista a importância da denúncia de crimes ambientais e do monitoramento eficaz dos mesmos, como uma das possíveis soluções de combates a esses crimes, um projeto de monitoramento foi implementado para visualização e implementação. Com base em dados reais de 2019 a 2021 de denúncias de crimes ambientais na cidade de Manaus, foram-se utilizados de meios organizacionais de dados, sendo a ferramenta excel, e meios de visualização de dados em forma de relatórios sendo a ferramenta Power BI, para informar por meio de relatório visual os fatos recorrentes nos anos indicados como implementação para auxílio do combate aos crimes ambientais.</p>
            </div>
        </div>

        <div className={styles.button_project2}>
            <Link to="/pwbi" target="_blank">ACESSO AO PROJETO SOLUÇÃO</Link>
        </div>

        <div className={styles.img_apresentation2}>
            <img src={apresentationproject}/>
        </div>

        <div className={styles.line2}>
            <img src={line1} width={1513}/>
        </div>
    </div>
  )
}

export default Project