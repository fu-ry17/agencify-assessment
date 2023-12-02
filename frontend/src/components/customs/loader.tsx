import { Loader2 } from "lucide-react"

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
        <Loader2 className="animate-spin h-8 w-8" />
    </div>
  )
}

export default Loader