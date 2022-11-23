import { GetStaticProps } from "next"
import Link from "next/link"
import { Card, Cointainer } from "../styles/pages/github"

export default function Github({ repos }) {
    return (
        <>
            <Cointainer>
                {repos.map((item) => {
                    return (<Card key={item.name}>
                        <h1>{item.name}</h1>
                        <desc>{item.description}</desc>
                        <Link href="https://github.com">veja o projeto</Link>
                    </Card>)
                }
                )}
            </Cointainer>
        </>)
}


export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://api.github.com/users/RCurvo/repos')
    const data = await response.json()
    return {
        props: {
            repos: data
        },
        revalidate: 60 * 60 * 2,
    }
}