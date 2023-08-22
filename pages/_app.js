import AuthContext from '../contexts/AuthContext/Auth'
import GlobalStyle from '../assets/style/GlobalStyle/GlobalStyle'

function MyApp ({ Component, pageProps }) {
  return (
    <>
        <AuthContext>
          <GlobalStyle/>
          <Component {...pageProps} />
        </AuthContext>
    </>
  )
}

export default MyApp