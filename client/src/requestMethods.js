import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmUwMWFjZDcxNWY2OTVkNjQxYWEzMiIsImlzQWRtaW4iOnRydWUsImlzRW50cmVwcmVuZXVyIjpmYWxzZSwiaWF0IjoxNjYxNzUwODQ1LCJleHAiOjE2NjIwMTAwNDV9.IRhHpCR_n3yqxpwekFsG64v_yjYfuTFnyULUl0bojUo";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
