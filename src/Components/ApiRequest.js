import React, {useEffect} from 'react'

export default function ApiRequest(props) {
    

    useEffect(() => {
        async function fetchData() {
            try{
             fetch('https://fakestoreapi.com/products/', {})
                     .then(res=>res.json())
                     .then(json=>props.passData(json)) 
         }catch(error) {
             throw new Error(error)
         }}
     
        fetchData()
        console.log('fetching!')
    },[])

    return (
        <div>
            
        </div>
    )
}
