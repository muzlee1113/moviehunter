import axios from "axios";
const BASEURL_OMDB = "https://www.omdbapi.com/?i=";
const APIKEY_OMDB = "&apikey="+process.env.REACT_APP_APIKEY_OMDB;
const BASEURL_TMDB = "https://api.themoviedb.org/3"
const APIKEY_TMDB="?api_key="+process.env.REACT_APP_APIKEY_TMDB+"&language=en-US"


export default {
  getMovie_TMDB: function(query) {
    return axios.get(BASEURL_TMDB + "/movie/" + query + APIKEY_TMDB);
  },
  getMovie_OMDB: function(query) {
    return axios.get(BASEURL_OMDB + query + APIKEY_OMDB);
  }
};
