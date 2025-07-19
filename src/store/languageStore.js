import { create } from "zustand";
import en from "@/utilits/en.json";
import geo from "@/utilits/geo.json";

const language = [en, geo];

const useLanguageStore = create((set) => ({
  lang: language[0],
  setLang: (index) => set({ lang: language[index] })
}));

export default useLanguageStore;
