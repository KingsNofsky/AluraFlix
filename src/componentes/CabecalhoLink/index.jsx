import { Link } from "react-router-dom";

export default function CabecalhoLink({url, children}){
    return(
        <Link to={url}>
            {children}
        </Link>
    )
}