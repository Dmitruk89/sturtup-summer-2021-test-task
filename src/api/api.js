import * as axios from "axios";

export const usersAPI = {
    getProfile(userName) {
      return axios.get(`https://api.github.com/users/${userName}`)
          .then(response => response.data)
          .catch(err => console.log(err))
    },
    getRepos(userName, page, perPage) {
    return axios
      .get(`https://api.github.com/users/${userName}/repos?page=${page}&per_page=${perPage}`)
      .then(response => response.data)
      .catch(err => console.log(err))
  },
};