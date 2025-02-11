function Home() {

    return (
        <div className="container h-full">
            <section className="mb-8">
                <h2 className="text-2xl text-white mb-4">
                    Welcome to Rifty Summoners
                </h2>
                <p className="text-white">
                    Discover the best products at the best prices.
                </p>
            </section>
            <section className="mb-8">
                <img
                    src="/assets/background.png"
                    alt="IMAGE"
                    className="w-full object-cover rounded shadow-lg"
                />
            </section>
        </div>
    );
}

export default Home;