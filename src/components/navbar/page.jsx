import Link from "next/link";
import styles from "./page.module.css"

const Navbar = () => {
    return (
        <div className="nav">

            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/profile">Profile</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;