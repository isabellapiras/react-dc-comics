import comics from '../../Comic';
import Card from './Card';

export default function MainComponent() {
    return (
        <main className="bg-neutral-900">
            <div className="max-w-7xl mx-auto px-4 pt-14 pb-6 relative">

                <h2 className="absolute -top-7 left-4 bg-blue-600 text-white text-2xl font-bold uppercase px-7 py-3">
                    Current Series
                </h2>

                <div className="grid grid-cols-6 gap-x-8 gap-y-12">
                    {comics.map((comic) => (
                        <Card
                            key={comic.id}
                            thumb={comic.thumb}
                            series={comic.series}
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-blue-600 text-white text-sm font-bold uppercase px-16 py-2">
                        Load more
                    </button>
                </div>

            </div>
        </main>
    );
}