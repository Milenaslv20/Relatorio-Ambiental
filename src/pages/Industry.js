import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

import arrowleft from './img/arrow_left.png'
import arrowright from './img/arrow_right.png'
import industry from './img/industry_smoke.png'
import line2 from './img/line_2.png'


function Industry() {
  return (
    <div className={styles.industry_section}>
      <div className={styles.texto}>
        <div className={styles.text}>
          <p>Crimes ambientais são ações ilegais que causam danos ao meio ambiente, podendo-se variar de<br/>
          poluição do ar e da água a desmatamento ilegal, tráfico de animais silvestres etc. Esses crimes<br/>
          não afetam apenas o ambiente imediato onde ocorrem, mas têm repercussões globais,<br/>
          como a alteração de ciclos climáticos e a perda de biodiversidade. Entre<br/>
          os exemplos mais comuns estão:</p>
        </div>

        <div className={styles.list}>
          <ul>
            <li>Desmatamento Ilegal</li>
            <li>Caça Predatória</li>
            <li>Tráfico de Animais Silvestres</li>
            <li>Poluição</li>
          </ul>
        </div>

        <Link to='/talk'><img src={arrowright} className={styles.arrow_right} width="60px" height="60px"/></Link>
        <Link to='/'><img src={arrowleft} className={styles.arrow_left} width="60px" height="60px"/></Link>

        <div className={styles.img_industry}>
          <img src={industry}/>
        </div>

        <div className={styles.line2}>
          <img src={line2} width="1513px"/>
        </div>
      </div>
    </div>
  )
}

export default Industry