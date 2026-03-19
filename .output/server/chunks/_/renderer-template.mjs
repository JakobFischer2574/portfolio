import { H as HTTPResponse } from "../../index.mjs";
import "node:http";
import "node:https";
import "hono";
import "node:fs";
import "node:url";
import "node:path";
const rendererTemplate = () => new HTTPResponse('<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" type="image/svg+xml" href="/vite.svg" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Vite + React + TS</title>\n    <script type="module" crossorigin src="/assets/index-JJXGSRVp.js"><\/script>\n    <link rel="stylesheet" crossorigin href="/assets/index-D8b4DHJx.css">\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>\n', { headers: { "content-type": "text/html; charset=utf-8" } });
function renderIndexHTML(event) {
  return rendererTemplate(event.req);
}
export {
  renderIndexHTML as default
};
