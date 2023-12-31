/* eslint-disable react/jsx-curly-newline */
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

import { isMobileOnly } from 'react-device-detect'
import * as S from './styles'

const encode = (values) => {
  return Object.keys(values)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(values[key])}`
    )
    .join('&')
}

// Sell

function FormData() {
  const initialValues = {
    Nome: '',
    Email: '',
    WhatsApp: '',
  }

  const validationSchema = Yup.object().shape({
    Nome: Yup.string().required('Nome é um campo obrigatório'),
    Email: Yup.string().required('E-mail é um campo obrigatório'),
    WhatsApp: Yup.string()
      .required('WhatsApp é um campo obrigatório')
      .test('is-mobile-number', 'WhatsApp é obrigatório', (value) => {
        if (!value) return true
        const regex = /^(\(\+?\d{2,3}\))?\s?\+?\d{9,13}$/
        return regex.test(value)
      }),
  })

  const handleSubmit = (values, actions) => {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    const body = encode({
      'form-name': 'camillaForm',
      ...values,
    })
    axios
      .post('/', body, {
        headers,
      })
      .then(() => {
        toast.success('Sua mensagem foi enviada com sucesso')
        actions.resetForm()
      })
      .catch((err) => {
        console.log(err)
        toast.error(
          'Não foi possível enviar sua mensagem, por favor tente mais tarde.'
        )
        actions.resetForm()
      })
    //   .finally(() => {
    //     setTimeout(
    //       () =>
    //         window.location.replace(
    //           'https://chat.whatsapp.com/EjkCh65xkKO2kxd1nWPYqF'
    //         ),
    //       2000
    //     )
    //   })
  }

  return (
    <S.Container
      id='contato'
      data-sal='slide-up'
      data-sal-delay='300'
      data-sal-duration='1000'
      data-sal-easing='ease'
    >
      <S.Wrapper>
        <S.FormWrapper>
          <h2>Não se sinta mais invisível no mundo digital!</h2>
          {isMobileOnly ? (
            <p>
              Não perca a oportunidade única de fazer parte da Metoria
              Posicione-se! Entre para a lista de espera e receba novas
              informações em primeira mão.
              {/* Você descobrirá como criar uma marca pessoal forte
              que ressoa com seu público. */}
            </p>
          ) : (
            <p>
              Você irá transformar não apenas sua presença online, mas também
              sua confiança, seu impacto e suas perspectivas! Portanto, não
              perca a oportunidade única de fazer parte da Metoria Posicione-se!
              Entre para a lista de espera e receba novas informações em
              primeira mão.
              {/* Você descobrirá
              como criar uma marca pessoal forte que ressoa com seu público,
              atraindo seguidores leais e oportunidades incríveis. */}
            </p>
          )}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnBlur={false}
          >
            {({ isValid }) => {
              return (
                <Form
                  action='POST'
                  style={{ width: '100%' }}
                  name='camillaForm'
                  data-netlify='true'
                  data-netlify-honeypot='bot-field'
                >
                  <Field type='hidden' name='form-name' value='camillaForm' />
                  <Field type='hidden' name='bot-field' />

                  <div>
                    <Field name='Nome' type='text' placeholder='Nome' />
                    <ErrorMessage name='Nome' component='div' />
                  </div>

                  <div>
                    <Field name='Email' type='email' placeholder='E-mail' />
                    <ErrorMessage name='Email' component='div' />
                  </div>

                  <div>
                    <Field name='WhatsApp' placeholder='WhatsApp' />
                    <ErrorMessage name='WhatsApp' component='div' />
                  </div>

                  <S.Button type='submit' disabled={!isValid}>
                    Entrar para lista de espera
                  </S.Button>
                </Form>
              )
            }}
          </Formik>
        </S.FormWrapper>
      </S.Wrapper>
    </S.Container>
  )
}

export default FormData
