import react, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RecommendationListing=({idType, idValue})=>{
    const navigate = useNavigate();
    const [bookData, setBookData] = useState([]);

    axios.get("http://localhost:8080/recommendation/search?idType="+idType+"&idValue="+idValue)
    .then(res=>setBookData(res.data))
    .catch(err=>console.log(err));

    return(
        <div>
        </div>
    );
}

export default RecommendationListing;