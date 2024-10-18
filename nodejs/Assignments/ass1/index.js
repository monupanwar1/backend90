import express from "express";


const app = express();


app.use(express.json());



let users =[
    {
        name:"john",
        kidney:[
            {
                heaalty:false,
            }
        ]
    }
]





// getting all the kidney 

app.get('/', (req, res)=>{

    const johnKindney =users[0].kidney;

    const numberofKindney = johnKindney.length;

    const numberofHealthyKindney = johnKindney.filter((kidney)=>kidney.heaalty).length;

    const numberofUhealthyHealthy = numberofKindney=numberofHealthyKindney;
 

    res.json({
        numberofKindney,
        numberofHealthyKindney,
        numberofUhealthyHealthy
    })

})




app.post("/",(req,res)=>{
    
    const isHealthy = req.body.isHealthy;

    users[0].kidney.push({
        heaalty:isHealthy,
    })



    res.json({
        message:"kidney added successfully"
    })


})


app.put("/",(req,res)=>{


    if(oneUnhealtyKidney()){
        for(let i =0;i<users[0].kidney.length;i++){
            users[0].kidney[i].heaalty = true;
        }
        res.json({
            message:"all kidneys are replaced succesfukly"
        })

    } else{
        res.json({
            message:"No unhealthy kidneys found"
        })
    }

})


app.delete("/", function (req, res) {
    // check if there is atleast one unhealthy kidney, then remove all the unhealthy kidneys
    if (isThereAtleastOneUnhealthyKidney()) {
        // create a new array to store the healthy kidneys
        const newKidneys = [];

        // loop through the kidneys of the first user in the users array and add the healthy kidneys to the new array
        for (let i = 0; i < users[0].kidneys.length; i++) {
            // if the kidney is healthy, add it to the new array of kidneys
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true,
                });
            }
        }

        // update the kidneys of the first user in the users array with the new array of kidneys
        users[0].kidneys = newKidneys;

        // send the response in JSON format with a message that the "unhealthy kidney is removed successfully"
        res.json({
            message: "Unhealthy Kidney Removed Successfully!",
        });
    } else {
        // send the response with status code 411 and a message that "You have no unhealthy kidney to remove"
        res.status(411).json({
            message: "You have no unhealthy kidney to remove",
        });
    }
});

// Helper function to check if there is atleast one unhealthy kidney
function isThereAtleastOneUnhealthyKidney() {
    // loop through the kidneys of the first user in the users array
    for (let i = 0; i < users[0].kidneys.length; i++) {
        // if the kidney is unhealthy, return true
        if (!users[0].kidneys[i].healthy) {
            return true;
        }
    }

    // if there is no unhealthy kidney, return false
    return false;
}


app.listen(3000,()=>{
    console.log("server is running")
})