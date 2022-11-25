
import Image from "next/future/image";
import Link from "next/link";
import { GetStaticProps } from "next/types";
import { styled } from "../styles";
import { BioContainer, BioHeaderContainer } from "../styles/pages";
import Github from "./github";

export const Button = styled('button', {
  borderRadius: 8,
  fontWeight: 'bold',
  backgroundColor: '$secondary',
  border: 'none',
  padding: '4px 8px',
  marginLeft: '0.25rem',
  marginRight: '0.5rem'
})


export default function Home({repos}) {
  return (
    <div>
      <BioContainer>
        <BioHeaderContainer>
      <h1>Renan Curvo</h1>
      <h2>Web Developer</h2>
      <Image src="https://www.github.com/rcurvo.png" alt="Renan Curvo" width={150} height={150}></Image>
      </BioHeaderContainer>
      <div>
        <div>
        <p>
          Desenvolvedor full-stack Node React enfrentando esses mares da internet. Viver não é preciso, codar é preciso.
          </p>
          <p>Carioca Formado em economia.</p>
          <Button><Link href={"/contact"}>Entre em contato</Link></Button>
          </div>
      </div>
      </BioContainer>

      <Github repos={repos} />
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