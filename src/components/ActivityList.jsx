import { useState, useEffect } from 'react'

import { findAll } from '../services/activities.jsx'

import ActivityListItem from './ActivityListItem.jsx'

function ActivityList() {
    const [loading, setLoading] = useState(false)
    const [countries, setCountries] = useState([])

    const fetchData = async () => {
        setLoading(true)

        const res = await findAll()

        setCountries([...res])
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section>
            <header>
                <h1>Activities available</h1>
                <br/>
            </header>

            { loading && 
                <p>loading...</p>
            }

            <ul>
                {countries.length > 0 && countries.map(country => (
                    <ActivityListItem country={country}/>
                ))}
            </ul>
        </section>
    )
}

export default ActivityList