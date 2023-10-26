import AuthContext from '../contexts/AuthContext/Auth'
import GlobalStyle from '../assets/style/GlobalStyle/GlobalStyle'
import * as S from '../components/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContext>
          <GlobalStyle />
          <Component {...pageProps} />
      </AuthContext>
    </>
  )
}

export default MyApp