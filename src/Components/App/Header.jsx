export default function Header() {
    return (
        <header className="bg-white">
            <div className="max-w-7xl mx-auto flex justify-between items-center h-28 px-4">
                <img src="/img/dc-logo.png" alt="DC Comics" className="h-20" />

                <nav className="h-full">
                    <ul className="flex gap-8 h-full uppercase text-sm font-bold text-gray-800">
                        <li className="flex items-center"><a href="#">Characters</a></li>
                        <li className="flex items-center border-b-4 border-blue-600 text-blue-600"><a href="#">Comics</a></li>
                        <li className="flex items-center"><a href="#">Movies</a></li>
                        <li className="flex items-center"><a href="#">TV</a></li>
                        <li className="flex items-center"><a href="#">Games</a></li>
                        <li className="flex items-center"><a href="#">Collectibles</a></li>
                        <li className="flex items-center"><a href="#">Videos</a></li>
                        <li className="flex items-center"><a href="#">Fans</a></li>
                        <li className="flex items-center"><a href="#">News</a></li>
                        <li className="flex items-center"><a href="#">Shop</a></li>

                    </ul>
                </nav>
            </div>
        </header>
    );
}