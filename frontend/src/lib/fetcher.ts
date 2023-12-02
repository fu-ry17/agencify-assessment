import axios from "axios"

export interface QueryKeyParams {
    country?: string;
    state?: string;
}

export const getCustomers = async({ state, country }: QueryKeyParams) => {
    const resp = await axios.get(`http://localhost:3001/api/customers`)
    const data = resp.data.customers

    let filteredData = data

    if (country !== "" && state !== "") {
      filteredData = data.filter((d: any) => d.country === country && d.state === state)
    } else if (country !== "") {
      filteredData = data.filter((d: any) => d.country === country)
    } else if (state !== "") {
      filteredData = data.filter((d: any) => d.state === state)
    }

    return { customers: filteredData };
}