import { create } from 'zustand'

interface State {
  country: string;
  state: string;
  setCountry: (country: string) => void;
  setState: (state: string) => void;
}

export const useStore = create<State>((set) => ({
    country: '',
    state: '',
    setCountry: (country: string) => set({ country }),
    setState: (state: string) => set({ state })
  })
)
