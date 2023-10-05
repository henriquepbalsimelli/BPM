import { authService } from "@/services/authService/authService"

export async function getServerSideProps(context) {
    const session = await authService.getSession(context)
    return {
        props: {
            session
        }
    }
}
export default function AuthPageSSR(props) {
    return (
        <>
            <h1>AuthPage Server Side Renderig</h1>
            <pre>
                {
                    JSON.stringify(props.session, null, 2)
                }
            </pre>
        </>
    )
}
