import { browserHistory } from 'react-router';
import axios from 'axios';

axios.defaults.baseURL = '/api';
axios.defaults.headers.post[ 'Content-Type' ] = 'application/x-www-form-urlencoded';

function parseJSON ( response ) {
  return response.data;
}

function handleError ( response ) {
  let err = JSON.stringify( response );
      err = JSON.parse( err );

  throw err.response.data;
}


export function getRequest ( url ) {
  return axios.get( url )
    .then( parseJSON )
    .catch( handleError );
}

export function postRequest ( url, body ) {
  return axios.post( url, body )
    .then( parseJSON )
    .catch( handleError );
}

export function putRequest ( url, body ) {
  return axios.put( url, body )
    .then( parseJSON )
    .catch( handleError );
}

export function deleteRequest ( url ) {
  return axios.delete( url )
    .then( parseJSON )
    .catch( handleError );
}

export function setAuthorizationToken ( token ) {
  if ( token ) {
    axios.defaults.headers.common.Authorization = `bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
}
