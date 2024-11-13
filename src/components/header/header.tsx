import logo from '../../assets/logo.png'
const Header = () => {
  return (
   
    <div className="flex py-3 items-center justify-between m-2 rounded-lg md:border-b-2 :shadow-inner md:shadow-[#dde1e3]">
    <img className='h-[25pt] px-10' src={logo}/>
      
  <nav className="flex justify-center space-x-10 text-[12pt]  font-bold max-sm:hidden max-md:space-x-5">
      <a href='#about' className='border-x-2 border-transparent px-2 hover:font-extrabold  hover:text-[#1a61bf]   hover:border-x-[#1a61bf]  hover:rounded-md'>About</a>
      <a href='#projects'  className='border-x-2 px-2 border-transparent hover:font-extrabold  hover:text-[#1a61bf]   hover:border-x-[#1a61bf]  hover:rounded-md'>Projects</a>
      <a href='#about'  className='border-x-2 px-2 border-transparent hover:font-extrabold  hover:text-[#1a61bf]   hover:border-x-[#1a61bf]  hover:rounded-md'> Tools </a>
      <a href='#about'  className='border-x-2 px-2 border-transparent hover:font-extrabold  hover:text-[#1a61bf]   hover:border-x-[#1a61bf]  hover:rounded-md'> Principles </a>

   </nav>
   <button className="hover:bg-[#3638b6] max-md:px-1  hover:text-white hover:border-transparent mr-20 border-2 border-[#323232] px-3 py-1 rounded-lg text-[#323232] font-bold "> Contact Me</button>

    </div>
  )
}

export default Header