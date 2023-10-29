// 1. Import Area 
// comst namedimport require somelibarary
const { PrismaClient } = require("@prisma/client")
// const classobject = new classname()
const prisma = new PrismaClient()


// 2. Define Area
async function GET(){
    // let response = await fetch('http://localhost:3000/api/getsubject')
    // Every Function Retrun Somthing
        // object.method(actualArgument)
    // let data = response.json()

    // let object = await Prisma.model.method()
    let subjects2 = await prisma.subject2.findMany();
    let subjects = [
                      {
                        name:"English"
                      },
                      {
                        name:'Malayalam'
                      },
                      {
                        name:"Hinsi"
                      }
                   ]
    return Response.json({data:subjects2})
}

// 3. Export Area
    // 3.1 Default Area

    // 3.2 Named Export
    module.exports = {GET}