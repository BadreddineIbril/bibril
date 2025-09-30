import { createRoot } from "react-dom/client";
import "@/assets/styles/main.css";
import AppRouter from "@/routes";

createRoot(document.getElementById("root")!).render(<AppRouter />);
