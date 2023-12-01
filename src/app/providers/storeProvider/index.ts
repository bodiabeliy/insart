import axios from "axios";
import { log } from "console";
import { transformCurrencyList } from "shared/lib/currenciesData/currenciesData";
import { create } from "zustand";
import {persist} from "zustand/middleware"

export const useCurrenciesState = create(
    (set, get) => ({
        currenciesList: [],
        currenciesSelectList:[],
        currencyData: {
            text:"",
            exchange:0
        },
        isLoading:false,
        
        getCurrencyList: async() => { 
          set({isLoading:true})           
           
          try {

             const response = await axios.get(`${__ONEFORGE_URL}/symbols?api_key=${__ONEFORGE_API_KEY}`);
            set({currenciesSelectList:transformCurrencyList(response.data)})
            set({isLoading:false})

          } catch (error) {
              
          }
        },

        getCurrencyExchange: async(fromCurrency:string, toCurrency:string, amount:string ) => {
          set({isLoading:true})

          try {
            const response = await axios.get(`${__ONEFORGE_URL}/convert?from=${fromCurrency}&to=${toCurrency}&quantity=${amount}&api_key=${__ONEFORGE_API_KEY}`)            
            set(() => ({
                currencyData: {
                  text: response.data.text,  
                  exchange: response.data.value 
            }}))
            // set({isLoading:false})

          } catch (error) {
              
          }
        },

        getCCurrentCurrency: async() => {

          try {
            const response = await axios.get(`${__IPDATA_URL}/currency?api-key=${__IPDATA_API_KEY}`)

          } catch (error) {
              
          }
        }
      })
)
        

export const useStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state: { bears: number; }) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
  }))