import { GetStaticProps } from "next"
import Link from "next/link"
import { Card, Container } from "../styles/pages/github"

interface Item {
    name: string,
    description: string,
    html_url: string,
    homepage: string
}

export default function Github({repos}) {
    return (
        <div>
            <Container>
                {repos.map((item: Item) => {
                    return (<Card key={item.name}>
                        <h2>{item.name}</h2>
                        <desc>{item.description}</desc>
                            {item.homepage && <Link href={item.homepage}>veja o projeto</Link>}
                    </Card>)
                }
                )}
            </Container>
            </div>
)
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://api.github.com/users/RCurvo/repos')
    const data = await response.json()
    return {
        props: {
            repos: data
        },
    }
}