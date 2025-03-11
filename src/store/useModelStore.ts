import { create } from "zustand";

interface ModelState {
  length: number;
  width: number;
  thickness: number;
  wheelDiameter: number;
  wheelThickness: number;
  wheelDistance: number;
  setModelParams: (params: Partial<ModelState>) => void;
}

export const useModelStore = create<ModelState>((set) => ({
  length: 100,
  width: 50,
  thickness: 15,
  wheelDiameter: 40,
  wheelThickness: 15,
  wheelDistance: 50,
  setModelParams: (params) => set((state) => ({ ...state, ...params })),
}));
