const Values = () => {

    const items = [
        {
            title: "Authenticity",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            title: "Exclusivity",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            title: "Quality",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            title: "Sustainability",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
    ]
    return(
        <section className="flex flex-col justify-center items-center p-6 max-w-5xl mx-auto">
            <p className="font-medium text-4xl">Our Values</p>
            <div className="grid grid-cols-1 justify-center text-center sm:grid-cols-2 gap-12 mt-12 w-full">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <p className="font-medium text-xl">{item.title}</p>
                        <p className="text-gray-700">{item.description}</p>
                     </div>
                ))}

            </div>
        </section>
    )
}

export default Values;