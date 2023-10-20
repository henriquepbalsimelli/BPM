import { Modal } from '@fluentui/react'
import * as S from './style'	
import { useState } from 'react'
import { router } from 'next/router'
import { authService } from '@/services/authService/authService'

export default function ModalLogin({ open, setOpen }) {
    
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
                    <S.Title>Entrar</S.Title>
                    <S.ExitButton onClick={() => setOpen(false)}>X</S.ExitButton>
                </S.Header>
                <S.Form 
                    onSubmit={(e) => {
                        e.preventDefault()
                        authService.login({
                            email: values.email,
                            password: values.password
                        })
                        .then(()=>{
                            window.location.reload()
                        })
                        .catch((error)=> {
                            alert(error.message)
                        })
                    }}
                >
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
                    <S.Button
                        type="submit"
                    >Entrar</S.Button>
                </S.Form>
            </S.ModalContainer>
        </Modal>

    )
}