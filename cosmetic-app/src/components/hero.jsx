import backgroundImage from "../assets/background.jpeg"

export default function Hero() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat h-[70vh] w-full flex items-center justify-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <div className="relative z-20 text-center font-bold text-white">
                <h1 className="text-4xl">Shop</h1>
                <p className="text-2xl">Home / Shop</p>
            </div>
        </section>
    );
}