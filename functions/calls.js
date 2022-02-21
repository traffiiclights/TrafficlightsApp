import axios from "axios";

const BASE_URL = "localhost:3000";

const instance = axios.create({
  baseURL: "localhost:3000",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

async function sendPong(data) {
  console.log(`${BASE_URL}/sendPong`);
  return instance.post("/sendPong", {
    key: "ea4aef7e-805e-4eb8-a9a2-fd9a573a6787",
    usage: 0,
    data: {
      value: data.value,
      player: data.player,
    },
  });
}

module.exports = {
  sendPong,
};
