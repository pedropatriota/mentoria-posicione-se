import React from 'react'
import * as S from './style'

export default ({ tColor, bColor, hColor }) => {
  return (
    <S.Ul>
      <li>
        <S.Link
          tColor={tColor}
          hColor={hColor}
          bColor={bColor}
          to='#procedimentos'
        >
          Procedimentos
        </S.Link>
      </li>
      <li>
        <S.Link tColor={tColor} hColor={hColor} bColor={bColor} to='#doutor'>
          Dr. Gustavo
        </S.Link>
      </li>
      <li>
        <S.Link tColor={tColor} hColor={hColor} bColor={bColor} to='#clinica'>
          Clínica
        </S.Link>
      </li>
      <li>
        <S.Link tColor={tColor} hColor={hColor} bColor={bColor} to='#contato'>
          Contato
        </S.Link>
      </li>
      <li>
        <S.BookWa href='https://wa.me/5524999947520' target='_blank'>
          <S.WaLogo />
          <span> Agendar consulta </span>
        </S.BookWa>
      </li>
    </S.Ul>
  )
}
