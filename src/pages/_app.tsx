import { globalStyles } from "../styles/global"
import Image from 'next/future/image'
import logo from '../assets/logogradientwhite.png'
import { Header } from "../styles/pages/app";
import Link from "next/link";
import { Button } from ".";

globalStyles();

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Header>

        <Image src={logo} alt="" width={120}></Image>
        <div>
          <Link href="/"><Button>Sobre</Button></Link>
          <Link href="/github"><Button>Github</Button></Link>
          <Link href="/contact"><Button>Contato</Button></Link>
        </div>
      </Header>
      <Component {...pageProps} />
    </div>)
}

export default MyApp
