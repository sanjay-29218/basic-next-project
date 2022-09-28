import Link from 'next/link'
import Image from 'next/image';
const Navbar = () => {
    return ( <>
    <div className="navbar">
    <Image classname='img' src="/favicon.ico" width={40} height={40} />
        <Link href='/'><a >Home</a></Link>
        <Link href='/about' ><a >About</a></Link>
        <Link href='/friends/'><a >More</a></Link>
    </div>
    </> );
}
 
export default Navbar;