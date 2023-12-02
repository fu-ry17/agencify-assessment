import { Request, Response } from "express"
import { connectDB } from "../lib/sqlite"
import { newUser } from "../lib/valid"

const customerCtrl = {
   healthCheck: async(_: Request, res: Response) => {
      return res.status(200).json({ 
          msg: "Hello health check route"
      })
   },
   getCustomers: async (req: Request, res: Response) => {
      try {
        const db = await connectDB()
        // get all customers && do frotend filter & pagination 41 records
        const data = await db.all(`SELECT * FROM customer`) 
    
        // Recreate customers response with country and state (valid, invalid)
        const customers = data.map(c => newUser(c))
        
        return res.status(200).json({
            msg: 'success',
            status: 200,
            count: customers.length,
            customers,
        })

      } catch (error) {
        if (error instanceof Error) {
          console.log(`SERVER_ERROR`, error.message);
          return res.status(500).json({ msg: 'Something went wrong' });
        }
      }
    }
}

export default customerCtrl