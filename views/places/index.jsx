const React = require('react')
const Default = require('../default')

function Index(data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className='col-sm-6'>

                <h2 className='text-center'>{place.name} - {place.city},{place.state}</h2>
                <img src={place.pic} alt={place.name} />
            </div>
        )
    })

    return (
        <Default>
            <main>
                <h1>Rave About</h1>
                <div className='row'>
                    {placesFormatted}
                </div>
            </main>
        </Default>
    )
}

module.exports = Index