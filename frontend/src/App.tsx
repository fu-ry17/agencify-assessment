import { useQuery } from "@tanstack/react-query"
import { customerColumns } from "./components/customs/customers/columns"
import { DataTable } from "./components/customs/datatable/data-table"
import Error from "./components/customs/error"
import Loader from "./components/customs/loader"
import { QueryKeyParams, getCustomers } from "./lib/fetcher"
import { useStore } from "./store/featureStore"

const HomePage = () => {
  // zustand mainage state
  const { state, country} = useStore()

  const { data, error, isLoading } = useQuery({
    queryKey: ["customers", { country, state }] as [string, QueryKeyParams],
    queryFn: ({ queryKey }) => getCustomers(queryKey[1]),
  });
 

  if(isLoading) return <Loader />
  
  if(error) return <Error error={error.message} />


  return (
    <div className="max-w-5xl p-4 mx-auto">
       <h1 className="font-bold text-xl mb-4">
         Phone numbers, country, state ({ data?.customers.length })
       </h1>

       <DataTable
         columns={customerColumns} 
         data={data?.customers || []} // pass an empty array in case of an error
        />

    </div>
  )
}

export default HomePage