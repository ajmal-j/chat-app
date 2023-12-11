const notFount=(req,res,next)=>{
    console.log('Url not fount'+req.originalUrl);
    res.status(404)
    next()
}
module.exports=notFount;