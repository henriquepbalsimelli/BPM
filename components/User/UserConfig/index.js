import { AuthContext } from "@/contexts/AuthContext/Auth"
import { useContext, useEffect } from "react"


export default function UserConfig({userId}) {

    const {session} = useContext(AuthContext)

    useEffect(() => {
        if (session){
            if (session.user.id != userId){
                window.location.href = '/'
            }
        }
    }, [session, session?.user?.id, userId])

    return <h1>user config</h1>
}