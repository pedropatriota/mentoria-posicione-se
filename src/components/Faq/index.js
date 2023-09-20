/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import RectPoints from '../Curriculo/Profile/RectPoints'
import * as S from './styles'

function FAQ() {
  return (
    <S.Container
      id='faq'
      data-sal='slide-right'
      data-sal-delay='300'
      data-sal-duration='1000'
      data-sal-easing='ease'
    >
      <h2>Perguntas Frequentes</h2>

      <ul>
        <li>
          <RectPoints />
          <span>
            Como a mentoria "POSICIONE-se" se diferencia de outros cursos de
            marketing digital?
          </span>
        </li>
        <li>
          A mentoria "POSICIONE-se" vai além do marketing digital convencional.
          Ela se concentra em capacitar você a encontrar sua voz autêntica e se
          destacar nas redes sociais. Além disso, oferecemos bônus exclusivos
          com insights de profissionais renomados.
        </li>
      </ul>

      <ul>
        <li>
          <RectPoints />
          <span>
            Eu não tenho experiência em marketing digital. A mentoria é adequada
            para mim?
          </span>
        </li>
        <li>
          Absolutamente! A mentoria é projetada para mulheres de todos os níveis
          de experiência. Nossos encontros semanais, recursos em PDF e aulas
          gravadas são estruturados para orientá-la desde o básico até
          estratégias avançadas.
        </li>
      </ul>

      <ul>
        <li>
          <RectPoints />
          <span>Como funcionam os encontros semanais?</span>
        </li>
        <li>
          Os encontros semanais são realizados via Zoom e são interativos. Você
          terá a oportunidade de fazer perguntas ao vivo e aplicar as
          estratégias discutidas em tempo real. Se você perder um encontro,
          todas as aulas serão gravadas para acesso posterior.
        </li>
      </ul>

      <ul>
        <li>
          <RectPoints />
          <span>
            Qual é o investimento necessário para participar da mentoria?
          </span>
        </li>
        <li>
          Os detalhes sobre o investimento estão disponíveis na página de
          inscrição. Oferecemos opções flexíveis de pagamento para atender às
          suas necessidades.
        </li>
      </ul>

      <ul>
        <li>
          <RectPoints />
          <span>Como posso entrar em contato se tiver mais dúvidas?</span>
        </li>
        <li>
          Você pode nos contatar através do nosso e-mail de suporte ou pelo meu
          WhatsApp durante o horário comercial de segunda a sexta-feira, das 9h
          às 17h. Estamos aqui para responder a todas as suas perguntas e
          fornecer suporte contínuo.
        </li>
      </ul>
    </S.Container>
  )
}

export default FAQ
