const socials = [
    { id: 1, name: 'Facebook', icon: '/img/footer-facebook.png', href: '#' },
    { id: 2, name: 'Twitter', icon: '/img/footer-twitter.png', href: '#' },
    { id: 3, name: 'YouTube', icon: '/img/footer-youtube.png', href: '#' },
    { id: 4, name: 'Pinterest', icon: '/img/footer-pinterest.png', href: '#' },
    { id: 5, name: 'Periscope', icon: '/img/footer-periscope.png', href: '#' },
];

export default function Footer() {
    return (
        <footer className="bg-neutral-800">
            <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">

                <button className="border-2 border-blue-600 text-white font-bold uppercase px-4 py-3">
                    Sign-up now!
                </button>

                <div className="flex items-center gap-4">
                    <span className="text-blue-600 text-xl font-bold uppercase mr-4">
                        Follow us
                    </span>
                    {socials.map((social) => (
                        <a key={social.id} href={social.href}>
                            <img src={social.icon} alt={social.name} />
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    );
}