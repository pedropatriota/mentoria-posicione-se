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
    Mensagem: '',
  }

  const validationSchema = Yup.object().shape({
    Nome: Yup.string().required('Nome é um campo obrigatório'),
    Email: Yup.string().required('E-mail é um campo obrigatório'),
    Mensagem: Yup.string().required('Mensagem é um campo obrigatório'),
  })

  const handleSubmit = (values, actions) => {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    const body = encode({
      'form-name': 'allureForm',
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
      <h2> Contato </h2>

      <S.Wrapper>
        <S.FormWrapper>
          <p>Deixe sua mensagem!</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnBlur={false}
          >
            {({ values }) => {
              console.log(values)
              return (
                <Form
                  style={{ width: '100%' }}
                  name='allureForm'
                  data-netlify='true'
                  data-netlify-honeypot='bot-field'
                >
                  <Field type='hidden' name='form-name' value='allureForm' />
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
                    <Field as='textarea' name='Mensagem' />
                    <ErrorMessage name='Mensagem' component='div' />
                  </div>

                  <S.Button type='submit'>enviar mensagem</S.Button>
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
