import express, { Request, Response } from "express";
const app = express();
app.use(express.json());
app.post("/recipes", function(request: Request, response: Response) {
    if (!request.body.description) {
        return response.json({
            message: "Invalid description"
        });
    }
    if (!request.body.ingredients.length) {
        return response.json({
            message: "Invalid ingredients"
        });
    }
})
app.listen(3000);