import GlobalStyle from '../assets/style/GlobalStyle/GlobalStyle'

function MyApp ({ Component, pageProps }) {
  return (
    <>
        <GlobalStyle/>
        <Component {...pageProps} />
    </>
  )
}

export default MyApp