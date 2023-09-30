import nookies from "nookies"
import { tokenService } from "@/services/authService/tokenService"

export default function AuthPageSSR(props) {
    return (
        <>
            <h1>AuthPageSSR</h1>
            <pre>
                {
                    JSON.stringify(props, null, 2)
                }
            </pre>
        </>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            token: tokenService.get(context)
        }
    }
}