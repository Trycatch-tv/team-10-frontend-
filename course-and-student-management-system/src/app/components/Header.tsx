import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header className="bg-gray-800 text-white">
        <div className="container flex justify-between items-center p-5">
          <div className="flex items-center justify-center sm:justify-start mr-4">Logo</div>
          <div className="flex flex-1 items-center justify-center sm:justify-start space-x-4">
            <input type="text" placeholder="Buscar..." className="p-2 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-gray-400" />
            <Link href="/" className="text-white hover:text-gray-400">
              Inicio
            </Link>
            <Link href="/pages/Courses" className="text-white hover:text-gray-400">
              Cursos
            </Link>
            <Link href="/pages/AboutUs" className="text-white hover:text-gray-400">
              Sobre nosotros
            </Link>
          </div>
          <div>
            <Link href="/pages/Perfil" className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-500">
              Perfil
            </Link>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-500 m-2">Cerrar sesion</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
