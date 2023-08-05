import React from "react"
import * as S from "./style"
import Image from "next/image"



export default function Logo({width, height, src, alt, priority}) {
    return (
        <>
            <Image
                width={width}
                height={height}
                src={src}
                alt={alt}
                priority={priority}
            />
            
        </>
    )
}