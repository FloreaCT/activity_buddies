function ActivityListItem(props) {
    const { country } = props

    return (
        <li key={country.id}>
            <h3>{country.title} </h3>
            <p>Description: {country.description}</p>
            <br/>
        </li>
    )
}

export default ActivityListItem