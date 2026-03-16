import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number.parseInt(process.env.PORT || "3000", 10);
const HOST = "0.0.0.0";
const distPath = path.join(__dirname, "dist");

app.use(
  express.static(distPath, {
    index: "index.html",
    extensions: ["html"],
  })
);

app.get("/favicon.ico", (_req, res) => {
  res.sendFile(path.join(distPath, "favicon.ico"), error => {
    if (error) {
      res.status(204).end();
    }
  });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, HOST, () => {
  console.log(`App running on http://${HOST}:${PORT}`);
});
