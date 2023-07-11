import express, { Request, Response } from "express";
import CreateRecipe from "./CreateRecipe";
const app = express();
app.use(express.json());
app.post("/recipes", async function(request: Request, response: Response) {
    const createRecipe = new CreateRecipe();
    try {
        const output = await createRecipe.execute(request.body);
        return response.json(output);
    } catch (e: any) {
        return response.status(422).json({
            message: e.message
        })
    }
});
app.listen(3000);