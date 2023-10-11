import { authService } from '@/services/authService/authService';
import * as React from 'react' 

export const AuthContext = React.createContext();

function AuthProvider({children}){
    
    const [user, setUser] = React.useState({})
    const [error, setError] = React.useState(null)
    const [session, setSession] = React.useState(null)

    React.useEffect(() => {
        const getSession = async () => {
            try {
                const session = await authService.getSessionClientSide()
                if(!session){
                    return
                }
                setSession(session)
                setLoading(false)

            } catch (err) {
                setError(err)
            }
        }
        getSession()
    }, [])

    const value = React.useMemo(
        () => [
            user,
            setUser,
            session
        ],
        [
            user,
            session
        ]
    )
    
    return (<AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>)
}

export default AuthProvider