import Blog from "Frontend/generated/com/service/todo/entity/Blog"
import { BlogService } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react"

export default function home(){

const [blogs,setBlogs] = useState<Blog[]>([]);

useEffect(()=>{
BlogService.findAll().then(setBlogs);
},[])

return(
<div>
<h1>Hello Bhupendra sambare</h1>
<ul>
    {blogs.map(blog =>(

    <li key={blog.id}>
    {blog.title}
</li>
))}
</ul>
        </div>
        )
        }