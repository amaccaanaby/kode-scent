import Philosophy from "../components/Philosophy";
import SkillsandProcess from "../components/SkillsandProcess";
import Values from "../components/Values";
import Devider from "../components/Devider";

function Concept(){

    return(
        <div className="min-h-screen">

            <div className="flex flex-col justify-center items-center p-6 my-25 mx-auto max-w-4xl text-center">
                <p className="text-5xl font-semibold mt-6 mb-16">Our Concept</p>
                <p className="text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>

            <div>
                <Philosophy />
            </div>

            <div>
                <Devider />
            </div>
            
            <div>
                <Values />
            </div>

            <div>
                <Devider />
            </div>

            <div>
                <SkillsandProcess />
            </div>
        </div>

    )
}

export default Concept;