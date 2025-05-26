import "dotenv/config";
import express from "express";
import http from "http";
import cors from "cors";

const PORT = Number(process.env.PORT) || 80;

const application = express();
const server = http.createServer(application);

const quotes = [
    "You only live once, but if you do it right, once is enough.",
    "Be the change that you wish to see in the world.",
    "If you tell the truth, you don't have to remember anything.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "Be yourself; everyone else is already taken."
]

application.use([
    cors({
        origin: [ ...process.env.CORS_ORIGINS.split(",").map(origin => origin.trim()) ],
        methods: ["GET", "POST", "OPTIONS"],
        credentials: true
    })
]);

application.get("/", (_request, response) => {
    response.json({ quote: quotes[Math.floor(Math.random() * quotes.length)] });
});

application.get("/health", (_request, response) => {
    response.sendStatus(200);
});

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

process.on('SIGINT', () => {
    server.close();
    process.exit(0);
});