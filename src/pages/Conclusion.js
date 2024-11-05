import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

import arrowleft from './img/arrow_left.png'
import arrowhome from './img/arrow_home.png'
import world from './img/world.png'


function Conclusion() {
  return (
    <div className={styles.conclusion_section}>
        <Link to="/project"><img src={arrowleft} className={styles.arrow_left} width={60} height={60}/></Link>

        <div className={styles.icon_home}>
          <Link to="/"><img src={arrowhome} width={60} height={60}/></Link>
        </div>

        <div className={styles.texto}>
          <div className={styles.title}>
            <h1>Conclusão</h1>
          </div>

          <div className={styles.texto}>
            <p>Crimes ambientais não apenas prejudicam a natureza, mas também afetam diretamente a nossa saúde e bem-estar. Denunciar crimes ambientais é um passo fundamental para a proteção do meio ambiente e para a ação da justiça ecológica. No entanto, a denúncia por si só não é suficiente, o monitoramento eficaz das denúncias por meio de relatórios visuais é essencial para garantir que as ações corretivas sejam implementadas e que os resultados sejam transparentes e compreensíveis. Juntas, essas práticas fortalecem a luta contra crimes ambientais e promovem um futuro mais sustentável para o nosso planeta.</p>
          </div>

          <div className={styles.thanks}>
            <p>AGRADECEMOS A VISITA!</p>
          </div>

          <div class="img_world">
            <img src={world} className={styles.img_world}/>
          </div>
        </div>
    </div>
  )
}

export default Conclusion