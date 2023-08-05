import NextHead from 'next/head'
import React from 'react'
import PropTypes from 'prop-types'


export default function Head({ title, description, image, url, googleAnalyticsId }) {
 
    const src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`

    return (
    <NextHead>
            {/* <!-- DESCOMENTAR QND FOR SUBIR PARA PROD --> */}
            <script async src={src}></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', ${googleAnalyticsId});
                    `
                }}
            />
                
        <title>{title}</title>
    </NextHead>
)
}

Head.propTypes = {
    title: PropTypes.string.isRequired,
}
