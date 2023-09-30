export default function AuthPageStatic(props) {
    return (
        <>
            <h1>AuthPageStatic</h1>
            <pre>
                {
                    JSON.stringify(props, null, 2)
                }
            </pre>
        </>
    )
}