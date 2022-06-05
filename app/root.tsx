import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useBeforeUnload
} from "@remix-run/react";
import Nav from "./components/Nav";

import styles from "./tailwind.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "REST Countries",
  viewport: "width=device-width,initial-scale=1"
});

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    crossOrigin: "anonymous",
    href: "https://fonts.gstatic.com"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
  },
  { rel: "stylesheet", href: styles }
];

export default function App() {
  return (
    <html
      lang="en"
      className="text-text-dark bg-background-light dark:bg-background-dark h-full"
    >
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Nav />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
