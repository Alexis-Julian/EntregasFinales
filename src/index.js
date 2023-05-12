import app from "./app.js";
import { PORT } from "./config.js";
import middlewares from "./middlewares.js";

middlewares(app);

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
