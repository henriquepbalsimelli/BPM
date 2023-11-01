import { authService } from "../../services/authService/ui/authService"
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'

function useSession(){
    const [session, setSession] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const getSession = async () => {
            try{
                const session = await authService.getSessionClientSide()
                setSession(session)
                setLoading(false)

            }catch(err){
                setError(err)
            }
        }
        getSession()
    }, [])
    return {session, loading, error}
}

export default function AuthPageStatic(props) {
    const router = useRouter()
    const session = useSession()
    if (session.error){
        router.push('/?error=401')
    }
    return (
        <>
            <h1>AuthPageStatic</h1>
            <pre>
                {
                    JSON.stringify(session, null, 2)
                }
            </pre>
        </>
    )
}