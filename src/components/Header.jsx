import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-[5%] bg-black">
      <h1 className="logo py-2 text-white text-[2rem] font-bold cursor-pointer transition-all">
        LOJA<span className='text-[#95ff00]'>GAMER</span></h1>
        {/*Tag <nav> não aceita atributos de estilização*/}
      <nav>
        <ul className='flex list-none items-center gap-8'>
          <li>
            {/*Tag <Link> exerce a mesma funcão que a tag <a>
            e to='' é o mesmo que o atributo href=''*/}
            <Link to="/" className="text-white text-lg no-underline 
              hover:text-[#95ff00] hover:uppercase transition-all">Home</Link>
          </li>
          <li>
            <Link to="/jogos" className="text-white text-lg no-underline 
              hover:text-[#95ff00] hover:uppercase transition-all">Jogos</Link>
          </li>
          <li>
            <Link to="/contato" className="text-white text-lg no-underline 
              hover:text-[#95ff00] hover:uppercase transition-all">Contato</Link>
          </li>
          <li>
            <Link to="/login" className="text-white text-lg no-underline 
              hover:text-[#95ff00] hover:uppercase transition-all">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
