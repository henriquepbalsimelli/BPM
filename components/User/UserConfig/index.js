import { AuthContext } from "@/contexts/AuthContext/Auth"
import { useContext, useEffect, useState } from "react"
import * as S from './style'
import { UserService } from "../../../services/user/ui/userService"


export default function UserConfig({ userId }) {

    const { session } = useContext(AuthContext)

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: ''
    })

    const validateEmail = (email) => {
        // Verifica se o campo está vazio
        if (!email) {
            return false;
        }

        // Verifica se o formato do e-mail é válido
        const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        const veredcit = regex.test(email);
        return veredcit
    }

    useEffect(() => {
        if (!session) {
            window.location.href = '/'
        }
        if (session) {
            if (session.user.id != userId) {
                window.location.href = '/'
            }
        }
    }, [session, session?.user?.id, userId])

    const [values, setValues] = useState({
        name: session?.user?.username ? session?.user?.username : '',
        email: session?.user?.email ? session?.user?.email : ''
    })

    return (
        <>
            <S.UserConfigWrapper>
                <S.Title>Configurações</S.Title>
                <S.Form
                    onSubmit={(e) => {
                        e.preventDefault()
                        UserService.updateUser({
                            name: values.name,
                            email: values.email,
                            password: values.password,
                            id: session?.user?.id
                        })
                            .catch((error) => {
                                alert(error.message)
                            })
                    }}
                >
                    <S.InputContainer>

                        <S.Label>Nome</S.Label>
                        <S.InputText
                            type="text"
                            name="name"
                            placeholder={session?.user?.username}
                            defaultValue={session?.user?.username}
                            onChange={(e) => {
                                if (e.target.value.length < 1) {
                                    setErrors({ ...errors, name: 'Nome muito curto' })
                                    return
                                }
                                setErrors({ ...errors, name: '' })
                                setValues({ ...values, name: e.target.value })
                            }}

                        />
                        <S.ErrorSpan>{errors.name ? errors.name : ''}</S.ErrorSpan>
                    </S.InputContainer>
                    <S.InputContainer>

                        <S.Label>E-mail</S.Label>
                        <S.InputText
                            type="text"
                            name="email"
                            placeholder={session?.user?.email}
                            defaultValue={session?.user?.email}
                            onChange={(e) => {
                                if (!validateEmail(e.target.value)) {
                                    setErrors({ ...errors, email: 'Email inválido' })
                                    return
                                }
                                setErrors({ ...errors, email: '' })
                                setValues({ ...values, email: e.target.value })

                            }}
                        />
                        <S.ErrorSpan>{errors.email ? errors.email : ''}</S.ErrorSpan>
                    </S.InputContainer>
                    <S.Label>Senha</S.Label>
                    <S.InputText
                        type="password"
                        name="name"
                        onChange={(e) => setValues({ ...values, password: e.target.value })}
                    />
                    <S.ConfirmButtion
                        type="submit"
                    >Confirmar</S.ConfirmButtion>
                </S.Form>
            </S.UserConfigWrapper>
        </>
    )
}