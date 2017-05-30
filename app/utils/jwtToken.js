import CryptoJS from 'crypto-js';
// import { setAuthorizationToken } from './request';

/**
 * Parses the JWT token received from the server. Sets the token on the
 * localStorage and add the token to the axios request headers.
 *
 * @param  {Object} data A hash with an access_token
 *
 * @return {Object} Returns the decoded token
 */
export function handleJwtToken ( data ) {
  const encrypt = CryptoJS.AES.encrypt( JSON.stringify( data.user ), data.token );

	localStorage.setItem( 'appToken', data.token );
  localStorage.setItem( 'appUser', encrypt );
	// setAuthorizationToken( Token );
}

/**
 * This method removes the current JwtToken, invalidating the session
 *
 * @return null
 */
export function expireJwtToken () {
	localStorage.removeItem( 'appToken' );
	localStorage.removeItem( 'appUser' );
	// setAuthorizationToken();
	return null;
}
