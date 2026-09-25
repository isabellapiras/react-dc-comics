export default function Card(props) {
    return (
        <div>
            <div className="aspect-square overflow-hidden">
                <img
                    src={props.thumb}
                    alt={props.series}
                    className="w-full h-full object-cover object-top"
                />
            </div>
            <h3 className="text-white text-sm uppercase mt-3">
                {props.series}
            </h3>
        </div>
    );
}