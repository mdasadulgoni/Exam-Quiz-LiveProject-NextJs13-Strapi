// 1. Import Area 


// 2. Define Area
async function GET(){
    let response = await fetch('http://localhost:3000/api/getsubjects')
    // Every Function Retrun Somthing
        // object.method(actualArgument)
    let data = response.json()
    return Response.json({mag:data})
}

// 3. Export Area
    // 3.1 Default Area

    // 3.2 Named Export
    module.exports = {GET}