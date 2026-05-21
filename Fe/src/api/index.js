import { ROUTER_API } from "../util";
import DemoApi from "./demoApi";
import authApi from "./authApi";
import hostApi from "./hostApi";
import servicdeApi from "./serviceApi";

const demoApi = new DemoApi(ROUTER_API.DEMO);
const AuthApi = new authApi(ROUTER_API.AUTH);
const HostApi = new hostApi(ROUTER_API.HOST);
const ServiceApi = new servicdeApi(ROUTER_API.BOOKING);

export { demoApi, AuthApi, HostApi, ServiceApi };
