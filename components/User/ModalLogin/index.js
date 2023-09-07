import { Modal } from '@fluentui/react'
import * as S from './style'	

export default function ModalLogin({ open, setOpen }) {
    return (
        <Modal
            isOpen={open}
        >
            <S.ModalContainer>
                <S.Header>
                    <S.Title>Cadastre-se</S.Title>
                    <S.ExitButton onClick={() => setOpen(false)}>X</S.ExitButton>
                </S.Header>
                <S.Form>
                    <S.Input placeholder="Nome" 
                        required
                    />
                    <S.Input placeholder="Email" 
                        required
                    />
                    <S.Input placeholder="Senha" 
                        required
                    />
                    <S.Input placeholder="Confirmar Senha" 
                        required
                    />
                    <S.Button
                        type="submit"
                    >Cadastrar</S.Button>
                </S.Form>
            </S.ModalContainer>
        </Modal>

    )
}