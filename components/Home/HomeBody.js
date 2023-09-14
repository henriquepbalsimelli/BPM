import ImageBpm from '../infra/Image'
import Logo from '../infra/Logo'
import * as S from './style'


export default function HomeBody() {
    return (
        <>
            <S.Section>
                <S.ImgDiv>
                    <ImageBpm
                        width={700}
                        height={475}
                        alt="content"
                        src="https://dummyimage.com/1000x300"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '100%',
                            minWidth: '80%',
                        }}
                    />
                </S.ImgDiv>
                <S.ContentContainer>
                    <S.ContentDiv>
                        <h2>Phoebe Caulfield</h2>
                        <S.DesciptionDiv>
                            <S.TextP>Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</S.TextP>
                        </S.DesciptionDiv>
                    </S.ContentDiv>
                    <S.DropText>
                        <S.TextP>
                            <strong>Texto sobre o último drop: </strong>Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90s scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.
                        </S.TextP>
                    </S.DropText>
                </S.ContentContainer>
            </S.Section>
        </>
    )
}