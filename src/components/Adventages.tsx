const Adventages = () => {

    const items = [
        {
            title: "Premium Quality",
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            title: "Long Lasting",
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            title: "Exclusive",
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
    ]

    return(
        <section className="bg-black text-white py-20 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
                {items.map((item, index) => (
                        <div key={index} className="text-center">
                            <p className="font-bold">{item.title}</p>
                            <p className="font-light">{item.description}</p>
                        </div>
                ))}
            </div>
        </section>
    )
}

export default Adventages;