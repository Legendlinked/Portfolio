const Navbar = () => {
  return (
    <nav className= 'bg-orange-300 border-b border-orange-300'>
        <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                <div className="flex flex-1 justify-center md:items-stretch md:justify-start">
                    <a className="text-4xl text-shadow font-bold text-white">
                        Ahmed Alkhateeb
                    </a>
                    <div className="md:ml-auto">
                        <div className="flex space-x-2">
                            <a 
                                href="/index.html"
                                className="text-white bg-black hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 box-shadow">
                                Resume
                            </a>
                            <a 
                                href="/projects.html"
                                className="text-white bg-black hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 box-shadow">
                                Projects
                            </a>
                            <a 
                                href="/about.html"
                                className="text-white bg-black hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 box-shadow">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar