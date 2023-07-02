import express, { Request, Response } from "express";
const app = express();
app.get("/hello-world", function(request: Request, response: Response) {
    return response.json({ message: "hello world" })
});
app.listen(3000);