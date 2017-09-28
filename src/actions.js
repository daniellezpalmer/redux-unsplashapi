import token from './token.js'
const encode = encodeURIComponent;

export const getUnsplashImg = (token) => {
  return (dispatch, getState) => {
    fetch(`https://api.unsplash.com/photos/?client_id=${token}/?`)
      .then(response => {
        return response.json();
      })
  }
}
