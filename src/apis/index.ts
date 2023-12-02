import axios from "axios";

const timeout: number = 5000;

const instance = axios.create({
  baseURL: `/api`,
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true,
  timeout: timeout,
  timeoutErrorMessage: `timeout of ${timeout}ms exceeded`
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    // request data processing
    return config;
  },
  (error) => {
    const { status, message } = error.request.data;
    console.log(`request error: ${status} (${message})`);
    return Promise.reject({ status, message });
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    // response data processing
    return response?.data;
  },
  (error) => {
    const { status, message } = error.response.data;
    console.log(`response error: ${status} (${message})`);
    return Promise.reject({ status, message });
  }
);

export default instance;
