import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

import arrowleft from './img/arrow_left.png'
import arrowright from './img/arrow_right.png'
import line2 from './img/line_2.png'
import apresentation from './img/apresentation.png'

function Apresentation() {
  return (
    <div className={styles.apresentation_section}>
        <Link to="/talk"><img src={arrowleft} className={styles.arrow_left} width={60} height={60}/></Link>
        <Link to="/project"><img src={arrowright} className={styles.arrow_right} width={60} height={60}/></Link>

        <div className={styles.texto}>
            <div className={styles.text}>
                <p>Após a denúncia de crimes ambientais, é essencial monitorar e acompanhar o progresso das investigações e ações corretivas. O uso de relatórios visuais é uma ferramenta poderosa para garantir a eficácia e a transparência desse processo. As principais razões para a utilização de relatórios são:</p>
            </div>

            <div className={styles.list_1}>
                <ul>
                    <li>Transparência e Acompanhamento: Relatórios visuais, como mapas, gráficos e imagens, permitem uma visualização clara do status das investigações e das ações corretivas. permitindo  acompanhamento do progresso e a eficácia das medidas tomadas.</li><br/>
                    <li>Comunicação Eficaz: Relatórios visuais tornam as informações complexas mais acessíveis e compreensíveis para um público mais amplo, transmitindo informações de maneira mais intuitiva.</li>
                </ul>
            </div>
            <div className={styles.list_2}>
                <ul>
                    <li>Análise e Planejamento: A representação visual dos dados ajuda na análise dos padrões e na identificação de áreas problemáticas, facilitando o planejamento de estratégias mais eficazes para a prevenção e a fiscalização.</li><br/>
                    <li>Documentação e Evidências: A documentação visual serve como prova concreta das condições ambientais e dos impactos dos crimes sendo fundamental para a comprovação da importância de tomada de medidas.</li><br/>
                    <li>Educação e Conscientização: Relatórios visuais podem ser usados para educar e sensibilizar a comunidade sobre os impactos dos crimes ambientais, promovendo um maior entendimento e engajamento na proteção ambiental.</li>
                </ul>
            </div>
        </div>

        <div className={styles.img_apresentation}>
            <img src={apresentation}/>
        </div>

        <div className={styles.line2}>
            <img src={line2} width={1613}/>
        </div>
    </div>
  )
}

export default Apresentation