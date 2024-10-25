import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

import arrowleft from './img/arrow_left.png'
import arrowright from './img/arrow_right.png'
import smoke from './img/smoke.png'


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

        <div className={styles.img_industry}>
          <img src={smoke}/>
        </div>
      </div>

      <Link to="/talk"><img src={arrowright} className={styles.arrow_right} width={60} height={60}/></Link>
      <Link to="/"><img src={arrowleft} className={styles.arrow_left} width={60} height={60}/></Link>
    </div>
  )
}

export default Industry