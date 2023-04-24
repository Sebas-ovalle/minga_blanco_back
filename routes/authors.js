import {Router} from "express";


let router = Router();

router.get("/",(req,res,next)=>{
   return res.status(200).render("index",{
    title:"authors",
    subtitle:"endpoint of authors"
})

})
export default router