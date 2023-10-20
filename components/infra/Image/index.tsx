import React from "react"
import Image from "next/image"



export default function ImageBpm({ width, height, src, alt, priority, sizes, style }: any) {
    return (
        <>
            <Image
                width={width}
                height={height}
                src={src}
                alt={alt}
                priority={priority}
                sizes={sizes}
                style={style}
            />

        </>
    )
}