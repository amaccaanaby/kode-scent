import Devider from "./Devider";
import Buttons from "./Buttons";


interface VariantsProps {
    name: string;
    description: string;
    image: string;  
    topNotes: string;
    middleNotes: string;
    baseNotes: string;
    showButton?: boolean;
}

const Variants = ({ name, description, image, topNotes, middleNotes, baseNotes, showButton = true}: VariantsProps) => {

    return(
        <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between my-25 p-6 gap-6 max-w-7xl mx-auto">
            <div>
                <img src={image} alt={name}/>
            </div> 

            <div className="flex flex-col justify-center gap-6">
                <div className="flex flex-col gap-4">
                    <p className="text-3xl font-semibold">{name}</p>
                    <p className="text-gray-700">{description}</p>
                </div>
                
                <div>
                    <div className="flex flex-col justify-center border-black border-t h-1 pt-12 pb-12">
                        <p className="font-medium">Top Notes:</p>
                        <p className="text-gray-700">{topNotes}</p>
                    </div>
                
                    <div className="flex flex-col justify-center border-black border-t h-1 pt-12 pb-12">
                        <p className="font-medium">Middle Notes:</p>
                        <p className="text-gray-700">{middleNotes}</p>
                    </div>
                    <div className="flex flex-col justify-center border-black border-t h-1 pt-12 pb-4">
                        <p className="font-medium">Base Notes:</p>
                        <p className="text-gray-700">{baseNotes}</p>
                    </div>
                </div>
                
                <div>
                    {showButton && (
                        <Buttons 
                        text={"Contact Us"} 
                        link={"https://wa.me/081398858995"} 
                    />
                    )}
                    
                </div>
            </div>
        </section>
    )
}

export default Variants;