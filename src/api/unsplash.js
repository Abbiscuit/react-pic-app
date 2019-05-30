import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 52272278c5839d97aa78431e1cbda11ea9afd3e8562f06f09b1aba118a480a38"
  }
});
