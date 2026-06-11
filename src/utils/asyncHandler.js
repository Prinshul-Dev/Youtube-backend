const asyncHandler = () => {}


export {asyncHandler}

const asyncHandler = (fn) => (req,res,next) => {
    try{
        await fn(req,res,next);
    }
    catch(error){
        res.status(err.code || 500).json({
            sucess : false,
            message : err.message || "server error"
        })
    }
}
