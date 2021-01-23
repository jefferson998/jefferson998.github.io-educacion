import {NextApiRequest,NextApiResponse} from 'next'

import DB from '@database'


const allAvos =async (request:NextApiRequest,response:NextApiResponse)=>{
    //  
    const db =new DB()
    const id=request.query.id





    // const allEntries=await db.getAll()
    const avocado = await db.getById(id as string)
     // const length =allEntries.length
    // response.statusCode=200
    // response.setHeader('Content-type','application/json')
     // response.end(JSON.stringify({data:allEntries,length}))
    // response.end(JSON.stringify({data:entry}))
     // other forma
    response.status(200).json(avocado)
}

export default allAvos;