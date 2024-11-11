const Navbar = () => {
  return (
    <nav className= 'bg-orange-500 border-b border-orange-300'>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                <div className="flex flex-1 justify-center md:items-stretch md:justify-start">
                    <a>
    
                    </a>
                    <div className="md:ml-auto">
                        <div className="flex space-x-2">
                            <a 
                                href="/index.html"
                                className="text-white bg-black hover:bg-gray-600 hover:text-white rounded-md px-3 py-2">
                                home
                            </a>
                            <a 
                                href="/projects.html"
                                className="text-white bg-black hover:bg-gray-600 hover:text-white rounded-md px-3 py-2">
                                projects
                            </a>
                            <a 
                                href="/about.html"
                                className="text-white bg-black hover:bg-gray-600 hover:text-white rounded-md px-3 py-2">
                                about
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