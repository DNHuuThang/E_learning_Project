import axios from "axios";
import { keyLocalStorage, localStorageUtil } from "../components/util/localStorage";

const BASE_URL = "https://elearningnew.cybersoft.edu.vn/api";

export const axiosCustom = axios.create({ baseURL: BASE_URL });

// ✅ Thêm interceptor để tự động đính kèm token vào mỗi request
axiosCustom.interceptors.request.use((config) => {
  const token = localStorageUtil.get(keyLocalStorage.INFO_USER)?.accessToken;

  config.headers = {
    ...(config.headers || {}),
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4NSIsIkhldEhhblN0cmluZyI6IjExLzAyLzIwMzAiLCJIZXRIYW5UaW1lIjoiMTk3MDc2ODAwMDAwMCIsIm5iZiI6MTc0MzAxMjAwMCwiZXhwIjoxNzcwOTE5MjAwfQ._5a1o_PuNL8CuHuGdsi1TABKYJwuMsnG5uSKAILfaY8",
  };

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }

  return config;
});
