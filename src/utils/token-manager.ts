import { Request, Response, NextFunction } from "express";
import  Jwt  from "jsonwebtoken";
import { resolve } from "path";
export const createToken = (id: string, email: string, expiresIn: string) => {
    const payload = { id, email}
    const token = Jwt.sign(payload, process.env.JWT_SECRET,{
        expiresIn,
    });
    return token;
};

export const verifyToken = async(
    req: Request,
    res: Response,
    next: NextFunction,

) => {
    const token = req.signedCookies['${COOKIE_NAME}'];
    if (!token || token.trim() === ""){
        return res.status(401).json({ message: "Token Not Recieved" })
    }
    return new Promise<void>((resolve,reject) =>{
        return Jwt.verify(token, process.env.JWT_SECRET, (err, success) =>{
            if (err){
                reject(err.message);
                return res.status(401).json({ message: "Token expired" });
            }else {
                resolve();
                res.locals.jwtData = success;
                return next();
            };
        });
    });
};