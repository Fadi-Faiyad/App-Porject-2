const React = require('react')
const Def = require('./default')

function Error404() {
    return (
      <Def>
          <div>
              <h1>404[PAGE NOT FOUND]</h1>
              <p>Oops, sorroy, we cant find this page!</p>
          </div>
      </Def>
    )
  }
  

module.exports = Error404