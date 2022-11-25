import Link from "next/link";
import { Card, Container } from "../styles/pages/github";

export default function Contact() {
    return (
        <div>
        <h1>Entre em contato</h1>
<Container>
    <Card>
    <h1>E-mail</h1>
                        <Link href={""}>renan.curvo@gmail.com</Link>
    </Card>
    <Card>
    <h1>LinkedIn</h1>
                        <Link href={""}>renan.curvo@gmail.com</Link>
    </Card>
    <Card>
    <h1>Whatsapp</h1>
                        <Link href={""}>+552188102121</Link>
    </Card>
    <Card>
    <h1>Instagram</h1>
                        <Link href={""}>@renancurvo</Link>
    </Card>
</Container>
</div>
    )
}