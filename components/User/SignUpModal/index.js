import { Modal } from '@fluentui/react'
import * as S from './style'
import { useState } from 'react'
import { router } from 'next/router'
import { authService } from '@/services/authService/authService'

export default function SignUpModal({ open, setOpen }) {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    return (
        <Modal
            isOpen={open}
        >
            <S.ModalContainer>
                <S.Header>
                    <S.Title>Cadastre-se</S.Title>
                    <S.ExitButton onClick={() => setOpen(false)}>X</S.ExitButton>
                </S.Header>
                <S.Form
                    onSubmit={(e) => {
                        e.preventDefault()
                        authService.signUp({
                            email: values.email,
                            password: values.password,
                            name: values.name
                        })
                            .then(() => {
                                router.push('/auth-page-ssr')
                            })
                            .catch((error) => {
                                alert(error.message)
                            })
                    }}
                >
                    <S.Input placeholder="Nome"
                        required
                        value={values.name}
                        onChange={(e) => setValues({ ...values, name: e.target.value })}
                    />
                    <S.Input placeholder="Email"
                        required
                        value={values.email}
                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                    />
                    <S.Input placeholder="Senha"
                        required
                        value={values.password}
                        onChange={(e) => setValues({ ...values, password: e.target.value })}
                        type={'password'}
                    />
                    <S.Input placeholder="Confirmar Senha"
                        type={'password'}
                        required
                        value={values.confirmPassword}
                        onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
                    />
                    <S.Button
                        type="submit"
                    >Cadastrar</S.Button>
                </S.Form>
            </S.ModalContainer>
        </Modal>

    )
}