import styles from '@/styles';
import Logo from '@/public/images/logo.svg';
import Image from 'next/image';

const Navbar = () => {


  return (
    <header className={`${styles.xPaddings} sm:py-8 py-4 relative`}>
      <nav className={`${styles.innerWidth} mx-auto`}>
        <ul className={`flex justify-between items-center text-white`}>
          <li className="font-bold text-3xl">
            NGWOROCKS
          </li>
          <li>
            <Image
              src={Logo}
              alt="Christian Onoh"
              width={60}
              height={60}
            />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;