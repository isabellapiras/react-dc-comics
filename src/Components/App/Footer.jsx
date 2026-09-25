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
                    <img src="/img/footer-facebook.png" alt="Facebook" />
                    <img src="/img/footer-twitter.png" alt="Twitter" />
                    <img src="/img/footer-youtube.png" alt="YouTube" />
                    <img src="/img/footer-pinterest.png" alt="Pinterest" />
                    <img src="/img/footer-periscope.png" alt="Periscope" />
                </div>

            </div>
        </footer>
    );
}