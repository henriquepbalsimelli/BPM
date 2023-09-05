import { use, useContext, useState } from 'react'
import * as S from './style'
import { AuthContext } from '@/contexts/AuthContext/Auth'
import ModalLogin from './ModalLogin/index'

export default function User() {

    const [user, setUser] = useContext(AuthContext)
    const [loginModalState, setLoginModalState] = useState(false)

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
                        <S.RegisterButton
                                onClick={() => setLoginModalState(true)}
                        >
                            Cadastre-se
                        </S.RegisterButton>
                    )
                }
            <ModalLogin
                setOpen={setLoginModalState}
                open={loginModalState}
            />
            </S.UserContainer>

        </>
    )
}