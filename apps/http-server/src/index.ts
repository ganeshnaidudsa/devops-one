import express, { Request, Response } from "express";
import { client } from "@repo/db/client";

const app = express();

const PORT = 8002;
app.use(express.json())
app.post("/signup", async (req: Request, res: Response) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await client.user.create({
        data: {
            username,
            password
        }
    })

    res.json({
        message: "User Created Successfully !",
        id : user.id
    })

})

app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`)
})