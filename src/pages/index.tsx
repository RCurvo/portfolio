import { GetStaticProps } from "next";
import Image from "next/future/image";
import { REPL_MODE_SLOPPY } from "repl";
import { styled } from "../styles";

export const Button = styled('button', {
  borderRadius: 8,
  fontWeight: 'bold',
  backgroundColor: '$secondary',
  border: 'none',
  padding: '4px 8px',
  marginLeft: '0.25rem',
  marginRight: '0.5rem'
})


export default function Home() {
  return (
    <>
      <h1>Renan Curvo</h1>
      <h2>Web Developer</h2>
      <Image src="https://www.github.com/rcurvo.png" alt="Renan Curvo" width={150} height={150}></Image>
      <Button>Entre em contato</Button>
    </>
  )
}


