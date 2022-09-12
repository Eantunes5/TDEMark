import mongoose from "mongoose";
import Blog from "./model/Blog.js"

mongoose.connect("mongodb+srv://eantunes:darlyse2002@cluster0.grcvbki.mongodb.net/?retryWrites=true&w=majority");

const article = new Blog({
    title:"Novo Blog",
    slug:"Novo Blog pt2",
    published: true,
    content: " Conteúdo do novo blog ",
    tags:['Blog','Novo'],
 });
 
 await article.save();
 
 const firstArticle = await Blog.findOne({});
 console.log(firstArticle);