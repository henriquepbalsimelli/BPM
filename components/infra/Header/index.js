import { useEffect, useState } from 'react'
import { getCurrentDimension } from '@/assets/style/GlobalStyle/GlobalStyle'


import CollapseHeader from './CollapseHeader/CollapseHeader'
import DefaultHeader from './DefaultHeader/DefaultHeader'


export default function Header() {

    const [widowSize, setWindowSize] = useState()

    useEffect(() => {
        const size = getCurrentDimension()
        setWindowSize(size)
    }, [])

    return (
        <>
            {
                widowSize?.width < 768 ? (
                    <>
                        <CollapseHeader />
                    </>
                ) : (
                    <>
                        <DefaultHeader />
                    </>
                )
            }

        </>
    )
}