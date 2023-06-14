import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODRiNzcwMGZhNTBiZmM0OWU2ZTlmMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTAwNTc1OCwiZXhwIjoxNzAyNTQxNzU4fQ.7UqWe15AJjSfBeGBDjTyz7BaFGNUbyt9Tq7xSW0OO2o"; //postman admin token

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
