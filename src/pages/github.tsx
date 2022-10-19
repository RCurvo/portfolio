import { GetStaticProps } from "next"

export default function Github({ repos }) {
    return (
        <>
            {repos.map((item) => {
                return (<h1 key={item.name}>{item.name}</h1>)
            }
            )}
        </>)
}


export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://api.github.com/users/RCurvo/repos')
    const data = await response.json()
    data.map((item) => {
        console.log(item.name)
    })




    return {
        props: {
            repos: data
        },
        revalidate: 60 * 60 * 2,
    }
}