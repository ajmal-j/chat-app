const errorHandler=(err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
	err.message = err.message || "Internal Server Error";
	console.log(err.message);
	console.log('ooooooooooooooooooooooooooooooooooooooooooooooooops!');

	res.status(err.statusCode).json({
		success: false,
		message: err.message,
	});
}
module.exports=errorHandler;