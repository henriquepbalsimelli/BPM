import { useContext, useState } from 'react'
import * as S from './style'
import { AuthContext } from '@/contexts/AuthContext/Auth'
import ModalLogin from './SignInModal/index'
import SignUpModal from './SignUpModal/index'
import { authService } from '../../services/authService/ui/authService'

export default function User({ setCartModalState }) {

    const {session, setSession} = useContext(AuthContext)
    const [loginModalState, setLoginModalState] = useState(false)
    const [registerModalState, setRegisterModalState] = useState(false)


    return (
        <>
            <S.UserContainer>
                {
                    session?.user ? (
                        <>
                            <S.Column>
                                {
                                    session?.user?.id ? (
                                        <S.SLink
                                            href={`/user/${session?.user?.id}`}
                                        >
                                            <S.FlexLine>
                                                {session?.user?.username}
                                            </S.FlexLine>
                                        </S.SLink>
                                    ):
                                    (
                                        <S.SLink>
                                            <S.FlexLine>
                                                {session?.user?.username}
                                            </S.FlexLine>
                                        </S.SLink>
                                    )
                                }
                                <S.FlexLine>
                                    {session?.user?.coins_qty}
                                </S.FlexLine>
                            </S.Column>
                            <S.Column>
                                <S.CartItem
                                    iconName="ShoppingCart"
                                    onClick={() =>{
                                        setCartModalState(true)
                                        }}
                                />

                            </S.Column>
                            <S.Column>
                                <S.RegisterButton
                                        onClick={() =>{
                                            authService.logout(session?.user?.id)
                                            setSession(null)
                                        }}
                                    >
                                        Sair
                                    </S.RegisterButton>
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