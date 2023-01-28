import { Link } from "react-router-dom";

function PrimaryButton ({link, action, addClass}) {
    return(
        <Link to={link}>
            <button type="button" className={`py-1.5 rounded-md w-60 bg-white text-black outline-none mb-20 border-2 border-solid border-black ${addClass}`}>{action}</button>
        </Link>
    )
}

export default PrimaryButton;