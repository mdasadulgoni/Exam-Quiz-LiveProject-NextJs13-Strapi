// 1. Import Area 


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 2. Definations Area 
async function main(){
//await
console.log('hello');
const subjects = [
    {
        // propoerty:value
        name:'English'
    },
    {
        // propoerty:value
        name:'Malayalam'
    },
    {
        // propoerty:value
        name:'Hindi'
    }
]
for (subject of subjects) {
    // code block to be executed
    await prisma.subject2.create({
        data:subject
    })
  }

await prisma.$disconnect()
}
// calling/invock
//PO
// po.then().chatch().finally()
main().catch((err)=>{
    throw err;
})

// 3. Export Area 