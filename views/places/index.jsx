const React = require('react')
const Def = require('../default')

function index  (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div>
          <h2>{place.name}</h2>
          <img src={place.pic} alt={place.name}/>
        </div>
      )
    })
    return (
        <Def>
            <div>
                <h1>This is the index</h1>
                {placesFormatted}
            </div>
        </Def>
      )
    }
  
  

module.exports = index