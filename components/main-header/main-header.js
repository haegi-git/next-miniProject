import Link from "next/link";

import logoImg from '@/assets/logo.png';

import classes from './main-header.module.css';
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function Header() {
    return (
        <>
        <MainHeaderBackground />
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
            <Image src={logoImg} alt="A plate with food on it" priority/>
                NextLevel food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li><Link href="/meals">meals</Link></li>
                    <li><Link href="/meals/share">meals share</Link></li>
                    <li><Link href="/community">커뮤니티</Link></li>
                </ul>
            </nav>            
        </header>
        </>
    );
}
