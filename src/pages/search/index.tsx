import React from  'react'
import { useRouter } from 'next/router'
const SearchPage = () => {
    // pega os parametros na url
    // exemplo: localhost:3000/search?query="Hello world"
    const { query } = useRouter()
    console.log(query)
return(
    <div>
        <h1>Olá mundo</h1>
    </div>
)
}

export default SearchPage