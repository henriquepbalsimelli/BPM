import Link from "@/components/infra/Link";
import Logo from "@/components/infra/Logo";
import styled from "styled-components";

const FlexContainer = styled.div`
    display: flex;
    width: 100;
    height: 100vh;
    justify-content: center;
`


export default function ErroPage() {
    return (
        <>
            <FlexContainer>
            <div style={{position: 'relative'}}>
                <Link href="/">
                    <Logo
                        width={300}
                        height={300}
                        src="/images/bpm_logo.svg"
                        alt="Logo"
                        priority={true}
                        fill={true}
                    />
                </Link>
                <h1>Ta perdido irmão?</h1>
            </div>
            </FlexContainer>
        </>
    )
}