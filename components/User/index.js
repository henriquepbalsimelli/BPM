import { use, useContext, useState } from 'react'
import * as S from './style'
import { AuthContext } from '@/contexts/AuthContext/Auth'
import ModalLogin from './SignInModal/index'
import SignUpModal from './SignUpModal/index'

export default function User() {

    const [user, setUser] = useContext(AuthContext)
    const [loginModalState, setLoginModalState] = useState(false)
    const [registerModalState, setRegisterModalState] = useState(false)

    return (
        <>
            <S.UserContainer>
                {
                    user.name ? (
                        <>
                            <S.Column>
                                Imagem
                            </S.Column>
                            <S.Column>
                                <S.FlexLine>
                                    Nome usuario
                                </S.FlexLine>
                                <S.FlexLine>
                                    Moedas
                                </S.FlexLine>
                            </S.Column>
                        </>
                    )
                        :
                        (
                            <>
                                <S.ColumnContainer>

                                    <S.RegisterButton
                                        onClick={() => setLoginModalState(true)}
                                    >
                                        Entre
                                    </S.RegisterButton>
                                    <S.RegisterButton
                                        onClick={() => setRegisterModalState(true)}
                                    >
                                        Cadastre-se
                                    </S.RegisterButton>
                                </S.ColumnContainer>
                            </>
                        )
                }
                <ModalLogin
                    setOpen={setLoginModalState}
                    open={loginModalState}
                />
                <SignUpModal
                    setOpen={setRegisterModalState}
                    open={registerModalState}
                />
            </S.UserContainer>

        </>
    )
}