import express from 'express';




const app =express();
app.use(express.json());

let todos =[
   
        { id: 1, title: "Task 1", description: "This is the first task" },
        { id: 2, title: "Task 2", description: "This is the second task" }
    
];



app.get('/', (req,res)=>{
    res.send(todos);
})
app.get('/todos/:id', (req, res) => {
    
    const id = parseInt(req.params.id);

    
    const todo = todos.find((todo) => todo.id === id);

    if (todo) {
        res.json(todo);
    } else {
        res.status(404).send("Todo item not found with id " + id);
    }
});



app.post('/', (req,res)=>{

    const {title,discription}=req.body;

    const todo =[{
        id:todos.length+1,
        title:title,
        discription:discription

    }]


    todos.push(todo);


    res.status(201).send(todo)
})







app.put('/todos/:id', (req,res)=>{

    const id =parseInt(req.params.id)

    const todo =todos.find((todo)=>todo.id===id);


    if(todo){
        const{title,discription}=req.body;


        todo.title=title;
        todo.discription=discription;

        res.send(todo)
    } else{
        res.status(404).send("Todo item not found with id " + id);

    }

})



app.delete("/todos/:id",(req,res)=>{


    const id = parseInt(req.params.id);

    const index =todos.findIndex((todo)=>todo.id==id);

    if(index!==1){
        todos.splice(index,1);
        res.status(200).send("todos deletede suceesfully")
        
    }else{
        res.status(404).send("Todo item not found with id " + id);

    }
})




app.all("*", (req, res) => {
    res.status(404).send("Route Not Found");
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})