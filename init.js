import { videos } from "./db";
import app from "./app";

const PORT = 4000;

const handleListening = () => console.log(`✅  Lisning on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);