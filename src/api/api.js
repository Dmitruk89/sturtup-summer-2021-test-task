import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://api.github.com/",
});

export const usersAPI = {
    getProfile(userName) {
        return instance
          .get(`users/${userName}`)
          .then((response) => response.data);
      },
    getRepos(userName, page, perPage) {
    return instance
      .get(`users/${userName}/repos?page=${page}&count=${perPage}`)
      .then((response) => response.data);
  },
};