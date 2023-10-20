import UserConfig from "@/components/User/UserConfig"
import { useRouter } from 'next/router'
import Header from "@/components/infra/Header"


export default function UserPage(){
    const router = useRouter()

    return (
        <>
            <Header/>
            <UserConfig
                userId={router.query.id}
            />
        
        </>
    )
    
}