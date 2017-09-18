import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'

const ParamsExample = ({ match }) => (
  <div>
    <h2>Accounts</h2>
    <Route path={`${match.url}/:id`} render={() => <div>hello</div>}/>

    <ul>
      <li><Link to={`${match.url}/netflix`}>Netflix</Link></li>
      <li><Link to={`${match.url}/zillowGroup`}>Zillow Group</Link></li>
      <li><Link to={`${match.url}/yahoo`}>Yahoo</Link></li>
      <li><Link to={`${match.url}/modusCreate`}>Modus Create</Link></li>
    </ul>

  </div>
);

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

export default ParamsExample