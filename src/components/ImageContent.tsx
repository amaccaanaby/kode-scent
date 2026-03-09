import Buttons from "./Buttons";

interface ImageContentProps {
    title: string;
    description: string;
    image: string;
    isReverse?: boolean;
    showButton?: boolean;
    buttonText?: string;
    buttonLink?: string;
}

const ImageContent = ({title, description, image, isReverse = false, showButton = false}: ImageContentProps) => {
    return(

        <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between my-25 p-6 gap-8 max-w-7xl mx-auto">
            <div className={`flex flex-col justify-center gap-6 pr-8 w-full order-2 ${isReverse ? 'md:order-2' : 'md:order-1'}`}>
                <p className="text-4xl font-medium">{title}</p>
                <p className="leading-relaxed text-gray-700">{description}</p>

                {showButton && (
                    <Buttons 
                        text={"Explore Collection"} 
                        link={"/variant"} 
                    />
                )}
            </div>

            <div className={`flex justify-center order-1 ${isReverse ? 'md:order-1 md:justify-start' : 'md:order-2 md:justify-end'}`}>
                <div className="flex justify-center w-full max-w-125 aspect-square overflow-hidden shadow-sm">
                    <img src={image} alt={title} className="w-full h-auto object-cover" />
                </div>
            </div>
        </section>


    )
}

export default ImageContent;