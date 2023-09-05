import * as S from './style'

export default function HomeBody() {
    return(
        <>
            <S.Main>
                <S.Section>
                    <S.Container>
                        <S.SubContainer >
                            <S.Img alt="ecommerce" src="https://dummyimage.com/400x400"/>
                            <S.ProductInfoContainer >
                                <S.BrandName >THE BPM</S.BrandName>
                                <S.ProductName >Animated Night Hill Illustrations</S.ProductName>
                                <S.LinkContainer>
                                    <S.Link class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</S.Link>
                                    <S.Link class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</S.Link>
                                    <S.Link class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</S.Link>
                                </S.LinkContainer>
                                <S.Description class="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</S.Description>
                                <S.ConfigContainer class="flex">
                                    <S.ColorSpan class="mr-3">Color</S.ColorSpan>
                                    <S.ColorButton style={{ backgroundColor: '#fdd938'}} ></S.ColorButton>
                                    <S.ColorButton style={{ backgroundColor: '#c1795f' }}></S.ColorButton>
                                    <S.ColorButton style={{ backgroundColor: '#5883b4' }}></S.ColorButton>
                                </S.ConfigContainer>
                                <S.SizeOptions class="flex border-t border-gray-200 py-2">
                                    <span class="text-gray-500">Size</span>
                                    <S.SizeSelectOptions class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </S.SizeSelectOptions>
                                </S.SizeOptions>
                                <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                                    <span class="text-gray-500">Quantity</span>
                                    <span class="ml-auto text-gray-900">4</span>
                                </div>
                                <div class="flex">
                                    <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
                                    <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                                    <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </S.ProductInfoContainer>
                        </S.SubContainer>
                    </S.Container>
                </S.Section>
            </S.Main>
        </>
    )
}