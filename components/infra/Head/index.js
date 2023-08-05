import NextHead from 'next/head'
import React from 'react'
import PropTypes from 'prop-types'
import Script from '../Script'

export default function Head ({title, description, image, url}) {
 

    return (
    <NextHead>
            {/* <!-- DESCOMENTAR QND FOR SUBIR PARA PROD --> */}
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-LL0Z33DF7M"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-LL0Z33DF7M');
                    `
                }}
            /> */}
                
        <title>{title}</title>
    </NextHead>
)
}

Head.propTypes = {
    title: PropTypes.string.isRequired,
}
