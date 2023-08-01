import React from "react"
import * as S from "./style"
import Image from "next/image"

const LOGO_IMAGE_URL = '/images/vercel.svg'

export default function Logo() {
    return (
        <>
            <Image
                width={100}
                height={50}
                src={LOGO_IMAGE_URL}
                alt="Logo"
            />
            
        </>
    )
}