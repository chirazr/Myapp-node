//require bach enjib elcodes ta3 express library w ne5dm bihom

const express = require("express");
const mongoose = require("mongoose")

//app ne5dem bih 
const app = express();


//yoPMTpWOJnHese26
//ajroudichiraz
//mongodb+srv://ajroudichiraz:<password>@cluster0.mlnbosj.mongodb.net/?retryWrites=true&w=majority

mongoose.connect("mongodb+srv://ajroudichiraz:yoPMTpWOJnHese26@cluster0.mlnbosj.mongodb.net/?retryWrites=true&w=majority")
.then(()=>
{
    console.log("connected successfully");
}
).catch(()=>{
    console.log("error with connecting with the DB ", error);

}
);

const Article = require("./models/Article");

// body param
// app.use(express.json());



app.get("/hello", (req, res)=>{
res.send("hello");
});

app.get("/", (req, res)=>{
    res.send("hello in nod js");
    });

////
    app.get("/numbers", (req, res)=>{
        let numbers=""
        for (let ii=0; i<= 100; i++){
            numbers +=i +"-";
        }


        res.send(`the numbers ${numbers}`);
      
        res.render( "numbers.ejs",{
            name:"Yull"
        }  );
        });

////body

app.get("/findsum/:number1/:number2", (req, res)=>{
    const num1= req.params.number1
    const num2= req.params.number2
    const total = Number(num1 )+ Number(num2)
    res.send(`the numbers are : ${num1} /${num2}` )
    });
////
app.get("/sayhello", (req, res)=>{
    
res.send(`hello ${req.body.name}`  )
    })
//// query
app.get("/sayhello", (req, res)=>{

res.send(`age is: ${req.query.age}`  )
})

app.post("/addComment", (req, res)=>{
    res.send("post comment")
});

app.put("/test", (req, res)=>{
    res.send("hello world")
});

app.delete("/testdelet", (req, res)=>{
    res.send("delet")

});



//json 
app.get("/sayhello", (req, res)=>{

    res.json({
        
        name: req.body.name,
        age: req.body.age,
    })
    })


    /// html
req.send ("<h1>hello world</h1>");

// njib html file 

app.get("/sayhi", (req, res)=>{
    
    res.sendFile(__dirname + "/views/numbers.html"  )
        })





        //  ARTICLES 
app.post("/articles", async (req, res) => {
	const newArticle = new Article();

	const artTitle = req.body.articleTitle;
	const artBody = req.body.articleBody;

    //res.send(artTitle+" ")+artBody)
    //return;

	newArticle.title =  artTitle;
	newArticle.body = artBody;
	newArticle.numberOfLikes = 0;
	await newArticle.save();

	res.json(newArticle);
});

app.get("/articles", async (req, res) => {
	const articles = await Article.find();
	console.log("the articles are", articles);

	res.json(articles);
});

app.get("/articles/:articleId", async (req, res) => {
	const id = req.params.articleId;

	try {
		const article = await Article.findById(id);
		res.json(article);
		return;
	} catch (error) {
		console.log("error while reading article of id ", id);
		return res.send("error");
	}
});

app.delete("/articles/:articleId", async (req, res) => {
	const id = req.params.articleId;

	try {
		const article = await Article.findByIdAndDelete(id);
		res.json(article);
		return;
	} catch (error) {
		console.log("error while reading article of id ", id);
		return res.json(error);
	}
});

app.get("/showArticles", async (req, res) => {
	const articles = await Article.find();

	res.render("articles.ejs", {
		allArticles: articles,
	});
});




app.listen(3000, ()=>{

    console.log("I am listening port 3000");
});



