import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY' : 'badf1b4f-6a6a-4fe5-a6ed-482f613ccdfd'
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const getUsers = (currentPage, pageSize) => {
  return axiosInstance
    .get(`users?page=${currentPage}&count=${pageSize}`, {
      withCredentials : true
    })
    .then(response => response.data)
}