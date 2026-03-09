import { Link } from "react-router";

interface ButtonProps {
    text: string;
    link: string;
}

const Buttons = ({text, link}: ButtonProps) => {

    return(

        <Link to={link}>
            <button className="border text-white bg-black font-medium hover:text-black hover:bg-white transition-all duration-400 rounded-full p-2 px-3">
                {text}
            </button>
        </Link>
        
    )
}

export default Buttons;