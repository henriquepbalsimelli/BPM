import * as S from './style'

export default function User() {

    return ( 
        <>
            <S.UserContainer>
                <S.Column>
                    Imagem    
                </S.Column>
                <S.Column>
                    <S.FlexLine>
                        Nome usuario
                    </S.FlexLine>
                    <S.FlexLine>
                        FlexContainer
                    </S.FlexLine>
                </S.Column>
            </S.UserContainer>
        </>
    )
}