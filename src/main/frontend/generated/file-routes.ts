import type { AgnosticRoute } from "@vaadin/hilla-file-router/types.js";
import { createRoute } from "@vaadin/hilla-file-router/runtime.js";
import * as Page0 from "../views/Add.js";
import * as Page1 from "../views/Home.js";
const routes: readonly AgnosticRoute[] = [
    createRoute("Add", Page0),
    createRoute("Home", Page1)
];
export default routes;
