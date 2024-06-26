import axios from "axios";
// " process.env.REACT_URL"
const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const getTimelinePosts = (id) => API.get(`/posts/${id}/timeline`);
export const getAllPost = () => API.get(`/posts/getAllPost`);
export const addCommentToPost = (data) => API.post(`/posts/comment`, data);
export const likePost = (id, userId) =>
  API.put(`posts/${id}/like`, { userId: userId });
