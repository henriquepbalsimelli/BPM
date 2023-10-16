import { AuthContext } from "@/contexts/AuthContext/Auth"
import { useContext, useEffect, useState } from "react"
import * as S from './style'
import { UserService } from "@/services/User/userService"


export default function UserConfig({ userId }) {

    const { session } = useContext(AuthContext)

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
        name: '',
        email: '',
        password: ''
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
                            password: values.password
                        })
                            .catch((error) => {
                                alert(error.message)
                            })
                    }}
                >
                    <S.Label>Nome</S.Label>
                    <S.InputText
                        type="text"
                        name="name"
                        placeholder={session?.user?.username}
                        defaultValue={session?.user?.username}
                        onChange={(e) => setValues({ ...values, name: e.target.value })}

                    />
                    <S.Label>E-mail</S.Label>
                    <S.InputText
                        type="text"
                        name="email"
                        placeholder={session?.user?.email}
                        defaultValue={session?.user?.email}
                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                    />
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