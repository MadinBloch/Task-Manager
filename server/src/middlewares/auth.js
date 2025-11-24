import jwt from 'jsonwebtoken';

export const  auth = (req,res,next)  => {
    
    try{
        const authHeader = req.headers.authorization;

            console.log(authHeader);
        if(!authHeader || !authHeader.startsWith("Bearer")){
            return res.status(401).json({
                message : "Token is not provided"
            })
        }

        const token = authHeader.split(" ")[1];

        const decode = jwt.verify(token, process.env.SECRET_KEY);
        req.user =  decode
        next();
    }catch (error){
          res.status(401).json({
            error: "Invalid or expired token",
            }   );
    }
}   