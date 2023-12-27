import { useEffect, useState } from "react";
import axios from "axios";

const BooksList = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/")
    })
}