//style
import './TripList.css'
import { useFetch } from '../hooks/useFetch'
import { useState} from "react"

function TripList() {
   const [url ,setUrl] = useState('http://localhost:3000/trips')
   const {data:Trip,louding,errors} = useFetch(url);
   
    return (
        <div >
            <h1>TripList</h1>
            {louding && <div>Loading...</div>}
            {errors && <div>{errors}</div>}
            <ul >
                {Trip && Trip.map((trip)=>{
                    return(
                        <div className='trip-card' key ={trip.id}>
                        <h2>{trip.title}</h2>
                        <p>{trip.price}</p>
                        </div>
                    )
                })}
            </ul>
            <div className='filtres'>
                <button onClick={ () => {setUrl('http://localhost:3000/trips?loc=Europa')}}>Europa Trips</button>
                <button onClick={ () => {setUrl('http://localhost:3000/trips')}}>All Trips</button>
            </div>
        </div>
    )
}

export default TripList