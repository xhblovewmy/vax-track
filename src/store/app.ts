import { create } from "zustand";
import { IData } from "@/types/app";

export enum EMode {
  MAP = "MapOnly",
  TABLE = "DataTable",
  BOTH = "Both",
}

export interface IAppStore {
  mode: EMode;
  setMode: (mode: EMode) => void;
  mapData: IData[];
  updateMap: () => void;
}

export const useAppStore = create<IAppStore>((set) => ({
  mode: EMode.MAP,
  setMode: (mode: EMode) => set({ mode }),
  mapData: [],
  updateMap: async () => {
    const data: IData[] = await fetch(
      `${
        process.env.NODE_ENV === "development" ? "" : "/vax-track"
      }/data/world-data.json`
    ).then((res) => res.json());
    set({ mapData: data });
  },
}));
