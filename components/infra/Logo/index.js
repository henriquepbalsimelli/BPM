import React from "react"
import * as S from "./style"
import Image from "next/image"



export default function Logo({ width, height, src, alt, priority, fill, sizes, styles }) {
    return (
        <>
            <Image
                src={src}
                alt={alt}
                priority={priority}
                fill={fill}	
            />
            
        </>
    )
}