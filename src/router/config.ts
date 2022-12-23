import { RoutesProps } from "react-router-dom";
import { configHome } from "../layout/home";
import { configSecurity } from "../modules";

export const routes: RoutesProps[] = [configHome, configSecurity];
