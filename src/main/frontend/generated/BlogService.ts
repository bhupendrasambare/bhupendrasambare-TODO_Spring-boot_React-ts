import { EndpointRequestInit as EndpointRequestInit_1 } from "@vaadin/hilla-frontend";
import type Blog_1 from "./com/service/todo/entity/Blog.js";
import client_1 from "./connect-client.default.js";
async function findAll_1(init?: EndpointRequestInit_1): Promise<Array<Blog_1>> { return client_1.call("BlogService", "findAll", {}, init); }
async function findById_1(id: number, init?: EndpointRequestInit_1): Promise<Blog_1> { return client_1.call("BlogService", "findById", { id }, init); }
async function save_1(blog: Blog_1, init?: EndpointRequestInit_1): Promise<Blog_1> { return client_1.call("BlogService", "save", { blog }, init); }
export { findAll_1 as findAll, findById_1 as findById, save_1 as save };
