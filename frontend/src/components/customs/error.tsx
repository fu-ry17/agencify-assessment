
const Error = ({ error }: { error: string }) => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
       <h1 className="font-bold text-3xl mb-4" > 
         {error} 
       </h1>
    </div>
  )
}

export default Error