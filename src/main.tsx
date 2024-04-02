import App from "@/app";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const HELLO_TEXT = "Hello from";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App helloMessage={HELLO_TEXT} />
	</React.StrictMode>,
);
