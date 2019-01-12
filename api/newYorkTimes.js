import axios from "axios";

let baseURL = "https://api.nytimes.com/svc/books/v3/lists/overview.json";
let apiKey = "787cd9d413f64485905e74b194a6548e";

export default axios.get(baseURL, {
  params: {
    "api-key": apiKey
  }
});
