import axios from "axios";
const URL = "https://dog.ceo/api/breeds/image/random";

export default {
  search: function(query) {
    return axios.get(URL);
  }
};
