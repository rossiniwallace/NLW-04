import { app } from "./app";

app.listen(process.env.PORT, () => {
  console.log(`[+] 🌀 Application is running on port ${process.env.PORT}`);
})