import * as React from 'react' 

export const AuthContext = React.createContext();

function AuthProvider({children}){
    
    const [user, setUser] = React.useState({})

    const value = React.useMemo(
        () => [
            user,
            setUser
        ],
        [
            user
        ]
    )
    
    return (<AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>)
}

export default AuthProvider