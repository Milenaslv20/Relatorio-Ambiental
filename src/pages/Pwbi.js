import React from 'react'
import styles from './style.module.css'

function Pwbi() {
  return (
    <div className={styles.pwbi_section}>
      <div className={styles.pwbi}>
        <iframe title="PAINEL_OCORRENCIAS_AMBIENTAIS" src="https://app.powerbi.com/view?r=eyJrIjoiZTI0ZWVmODctZGYyZC00YWM2LWJmYzAtZmY5YjlkZTgxMTNhIiwidCI6IjgxZDY5MjA0LTM1YzktNGY4YS04ZjliLTdiODM4NTNkNGY0ZSJ9&pageName=8f9681e43f9f406c189c" frameborder="0" allowFullScreen="true"></iframe>
      </div>
    </div>
  )
}

export default Pwbi