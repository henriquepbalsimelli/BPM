import ImageBpm from '../infra/Image'
import Logo from '../infra/Logo'
import * as S from './style'


export default function HomeBody() {
    return (
        <>
            <S.Section class="text-gray-600 body-font">
                <S.Container>
                    <S.ImgDiv>
                        <S.DropImg
                            alt="content"
                            src="https://dummyimage.com/1000x300"
                            fill={true}
                        />
                    </S.ImgDiv>
                    <S.ContentDiv >
                        <S.SubContainer >
                            <S.SVGDiv >
                                <Logo
                                    src='/images/bpm_logo.svg'
                                    alt={'Logo'}
                                    fill={true}
                                />
                            </S.SVGDiv>
                            <S.TextDiv>
                                <h2>Phoebe Caulfield</h2>
                                <S.DesciptionDiv>
                                    <S.TextP>Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</S.TextP>
                                </S.DesciptionDiv>
                            </S.TextDiv>
                        </S.SubContainer>
                        <S.SubContainerRight>
                            <S.TextPAlignRight class="leading-relaxed text-lg mb-4"><strong>Texto sobre o último drop: </strong>Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90s scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</S.TextPAlignRight>
                        </S.SubContainerRight>
                    </S.ContentDiv>
                </S.Container>
            </S.Section>
        </>
    )
}