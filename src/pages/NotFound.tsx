import { Link } from "react-router";

export const NotFound = () => {
    return (
        <>
        <div>
            <h2>The page is not found</h2>
            <button>
            <Link to={"/"}>Back</Link>
            </button>
        </div>
        </>
    )
    
};