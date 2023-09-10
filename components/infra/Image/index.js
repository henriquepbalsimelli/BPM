import React from "react"
import Image from "next/image"



export default function ImageBpm({ width, height, src, alt, priority, fill, sizes, styles }) {
    return (
        <>
            <Image
                width={width}
                height={height}
                src={src}
                alt={alt}
                priority={priority}
                fill={fill}
                sizes={sizes}
                style={styles}
            />

        </>
    )
}