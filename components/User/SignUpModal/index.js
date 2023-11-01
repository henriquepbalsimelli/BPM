import { Modal } from '@fluentui/react'
import * as S from './style'
import { useEffect, useState } from 'react'
import { authService } from '../../../services/authService/ui/authService'
import { validateCPF } from '../../../src/tools/tools'

export default function SignUpModal({ open, setOpen }) {

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        general: ''
    })

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        if(values.password !== values.confirmPassword && values.confirmPassword !== ''){
            setErrors({...errors, confirmPassword: 'As senhas não coincidem'})
        }else{
            setErrors({...errors, confirmPassword: ''})
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values.confirmPassword])

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
                        setLoading(true)
                        setErrors({ ...errors, general: '' })
                        e.preventDefault()
                        authService.signUp({
                            email: values.email,
                            password: values.password,
                            name: values.name,
                            cell: values.cell,
                            documentNumber: values.documentNumber

                        })
                            .then(() => {
                                setLoading(false)
                                window.location.reload()
                            })
                            .catch((error) => {
                                setLoading(false)
                                setErrors({ ...errors, general: error.message })
                            })
                        }}
                        >
                    <S.ErrorSpan>{errors.general ? errors.general : ''}</S.ErrorSpan>
                    <S.Input placeholder="Nome completo *"
                        required
                        value={values.name}
                        onChange={(e) => setValues({ ...values, name: e.target.value })}
                    />
                    <S.Input placeholder="Email *"
                        required
                        value={values.email}
                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                    />
                    <S.Input placeholder="Telefone para contato *"
                        required
                        value={values.cell}
                        onChange={(e) => setValues({ ...values, cell: e.target.value })}
                    />
                    <S.Input placeholder="CPF *"
                        required
                        value={values.documentNumber}
                        onChange={(e) => {
                            setErrors({ ...errors, documentNumber: '' })
                            setValues({ ...values, documentNumber: e.target.value })
                        }}
                        onBlur={(e) => {
                            const validCpf = validateCPF(e.target.value)
                            if (!validCpf && e.target.value !== '') {
                                setErrors({...errors, documentNumber: 'CPF inválido' })
                                return
                            }
                            setErrors({ ...errors, documentNumber: '' })
                        }}
                    />
                    <S.ErrorSpan>{errors.documentNumber ? errors.documentNumber : ''}</S.ErrorSpan>
                    <S.Input placeholder="Senha *"
                        required
                        value={values.password}
                        onChange={(e) => setValues({ ...values, password: e.target.value })}
                        type={'password'}
                    />
                    <S.Input placeholder="Confirmar Senha *"
                        type={'password'}
                        required
                        value={values.confirmPassword}
                        onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
                    />
                    <S.ErrorSpan>{errors.confirmPassword ? errors.confirmPassword : ''}</S.ErrorSpan>
                    <S.Button
                        type="submit"
                    >{
                            loading ?
                                <S.SSpinner /> :
                                'Cadastrar'
                    }</S.Button>
                </S.Form>
            </S.ModalContainer>
        </Modal>

    )
}