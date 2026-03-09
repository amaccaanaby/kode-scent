import Variants from "../components/Variants";

function Variant(){

    return(
        <div min-h-screen>
            <div className="flex flex-col items-center justify-center my-25 p-6 text-center max-w-4xl mx-auto">
                <p className="text-5xl font-semibold mt-6 mb-16">Our Collection</p>
                <p className="text-gray-700">Discover your KODE. Every scent is an ode to a different persona, a different moment, 
                and the rarity of being you.</p>
            </div>

            <div>
                <Variants
                    name="KODE 001 - Noir"
                    description="A bold, masculine scent with a touch of mystery. The perfect combination
                    of cedarwood, vanilla, and amber creates a strong and confident character."
                    image="/images/Variant1.jpeg"
                    topNotes="Bergamot, Black Pepper"
                    middleNotes="Cedarwood, Patchouli"
                    baseNotes="Vanilla, Amber, Musk"
                    showButton={true}
                />

                <Variants
                    name="KODE 002 - Blanc"
                    description="Elegant freshness with a touch of white flowers. A clean and sophisticated 
                    scent, perfect for those who appreciate simplicity with class."
                    image="/images/Variant2.jpeg"
                    topNotes="Lemon, White Tea"
                    middleNotes="Jasmine, White Rose"
                    baseNotes="White Musk, Sandalwood"
                    showButton={true}
                />

                <Variants
                    name="KODE 003 - Vert"
                    description="Natural and refreshing. Inspired by nature with crisp green notes, 
                    it brings positive energy and tranquility at the same time."
                    image="/images/Variant3.jpeg"
                    topNotes="Mint, Green Apple"
                    middleNotes="Basil, Lavender"
                    baseNotes="Vetiver, Oakmoss, Cedar"
                    showButton={true}
                />  
            </div>

            <div className="flex flex-col items-center justify-center text-center gap-10 p-20 bg-black text-white">
                <div className="flex flex-col gap-4">
                    <p className="text-5xl font-semibold">Interested in KŌDE?</p>
                    <p>Contact us for more information on availability and pricing</p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-2">
                        <img src="/images/Whatsapp-logo.svg" alt="Whatsapp Logo" className="size-6"/>
                        <p>:<a href="https://wa.me/6281398858995" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"> 0813-9885-8995</a></p>
                    </div>

                    <div className="flex gap-2">
                        <img src="/images/Instagram-logo.svg" alt="Instagram Logo" className="size-6"/>
                        <p>:<a href="https://www.instagram.com/kode.scent?igsh=dG1wOG5hZGcybjFs&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"> @kode.scent</a></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Variant;