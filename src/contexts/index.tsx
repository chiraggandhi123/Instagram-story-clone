import { IAppContext } from "@app/types/interfaces/appContext.interface";
import { createContext } from "react";
// import { IAppContext } from "./types.interface"

export const AppContext = createContext<null | IAppContext>(null)