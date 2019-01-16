import axios from "axios";

let baseURL = "https://api.nytimes.com/svc/books/v3/lists/overview.json";
let apiKey = "COvXyTMbyTFArxUuNn9o42nXhWCcobkE";

export default axios.get(baseURL, {
  params: {
    "api-key": apiKey
  }
});
