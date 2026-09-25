const links = [
    { id: 1, text: 'Characters', href: '#', active: false },
    { id: 2, text: 'Comics', href: '#', active: true },
    { id: 3, text: 'Movies', href: '#', active: false },
    { id: 4, text: 'TV', href: '#', active: false },
    { id: 5, text: 'Games', href: '#', active: false },
    { id: 6, text: 'Collectibles', href: '#', active: false },
    { id: 7, text: 'Videos', href: '#', active: false },
    { id: 8, text: 'Fans', href: '#', active: false },
    { id: 9, text: 'News', href: '#', active: false },
    { id: 10, text: 'Shop', href: '#', active: false },
];

export default function Header() {
    return (
        <header className="bg-white">
            <div className="max-w-7xl mx-auto flex justify-between items-center h-28 px-4">
                <img src="/img/dc-logo.png" alt="DC Comics" className="h-20" />

                <nav className="h-full">
                    <ul className="flex gap-8 h-full uppercase text-sm font-bold text-gray-800">
                        {links.map((link) => (
                            <li
                                key={link.id}
                                className={
                                    link.active
                                        ? 'flex items-center border-b-4 border-blue-600 text-blue-600'
                                        : 'flex items-center'
                                }
                            >
                                <a href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}