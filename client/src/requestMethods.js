import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmUwMWFjZDcxNWY2OTVkNjQxYWEzMiIsImlzQWRtaW4iOnRydWUsImlzRW50cmVwcmVuZXVyIjpmYWxzZSwiaWF0IjoxNjYyMTk1MTM4LCJleHAiOjE2NjI0NTQzMzh9.n2UUEt8i0eSk-BDHoB-ovwEsANxS6f5aXYtQSewtKYI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
