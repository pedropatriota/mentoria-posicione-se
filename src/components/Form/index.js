/* eslint-disable react/jsx-curly-newline */
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

import * as S from './styles'

const encode = (values) => {
  return Object.keys(values)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(values[key])}`
    )
    .join('&')
}

function FormData() {
  const initialValues = {
    Nome: '',
    Email: '',
    WhatsApp: '',
  }

  const validationSchema = Yup.object().shape({
    // Nome: Yup.string().required('Nome é um campo obrigatório'),
    // Email: Yup.string().required('E-mail é um campo obrigatório'),
    // WhatsApp: Yup.string().required('WhatsApp é um campo obrigatório'),
  })

  const handleSubmit = (values, actions) => {
    console.log('here')
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
          <h2>Eleve Seu Posicionamento Digital para o Próximo Nível!</h2>
          <p>
            Você irá transformar não apenas sua presença online, mas também sua
            confiança, seu impacto e suas perspectivas. Você descobrirá como
            criar uma marca pessoal forte que ressoa com seu público, atraindo
            seguidores leais e oportunidades incríveis.
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnBlur={false}
          >
            {() => {
              return (
                <Form
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

                  <S.Button
                    type='action'
                    onClick={() =>
                      window.location.replace(
                        'https://chat.whatsapp.com/EjkCh65xkKO2kxd1nWPYqF'
                      )
                    }
                  >
                    Entrar para lista VIP
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
