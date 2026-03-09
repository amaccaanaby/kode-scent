import Adventages from "../components/Adventages";
import Buttons from "../components/Buttons";
import Hero from "../components/Hero";

function Home(){

    return(
        <div className="min-h-screen">
            <div>
                <Hero />
            </div>

            <div>
                <Adventages />
            </div>

            <div className="flex flex-col items-center justify-center gap-8 mt-32 mb-32 p-8 text-center">
                <p className="text-5xl font-medium">The Code in Every Scent</p>
                <p className="text-gray-700">Decode your true self with our signature collection of exquisite scent</p>

                <Buttons text="Learn Our Concept" link="/concept" />

            </div>
        </div>



    )
}

export default Home;