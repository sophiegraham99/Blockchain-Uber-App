import { useContext } from 'react'
import { UberContext } from '../context/uberContext'

const style = {
  nav: `h-18 w-full  md:justify-around bg-white  flex items-center fixed z-20`,
  logo: `italic text-4xl text-teal-500 font-bold flex mr-20`,
  navItem: ` text-xl text-black md:p-4 py-2 block hover:text-teal-500 cursor-pointer`,
  navAccount: ` text-xl text-teal-500 md:p-4 py-2 block cursor-pointer`,
  rightNav: `flex gap-3 items-center`,
  leftNav: `flex gap-3`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
  loginText: `ml-2`,
}

const Navbar = () => {
  const { currentAccount, connectWallet, currentUser } = useContext(UberContext)

  return (
    <div className={style.nav}>
      <div className={style.leftNav}>
        <div className={style.logo}>Block <span className ={style.logo2}>Taxi</span></div>
        <div className={style.navItem}>Account:  Sophie</div>
        {currentAccount ? (
          <div className={style.navAccount}>
            {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
          </div>
        ) : (
          <div className={style.loginButton} onClick={() => connectWallet()}>
            <span className={style.loginText}>Log in</span>
          </div>
        )}
      </div>
      <div className={style.rightNav}>
        <div className={style.navItem}>Contact</div>
        <div className={style.navItem}>About</div>
      </div>
    </div>
  )
}

export default Navbar
