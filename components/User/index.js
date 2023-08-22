import { use, useContext, useState } from 'react'
import * as S from './style'
import { AuthContext } from '@/contexts/AuthContext/Auth'

export default function User() {

    const [user, setUser] = useContext(AuthContext)

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
                            onClick={() => alert('Cadastrar')}
                        >
                            Cadastre-se
                        </S.RegisterButton>
                    )
                }
            </S.UserContainer>
        </>
    )
}