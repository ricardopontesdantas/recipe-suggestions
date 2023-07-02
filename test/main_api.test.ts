import axios from "axios";

test("shoud show hello world message", async function() {
    const response = await axios.get("http://localhost:3000/hello-world");
    const output = response.data;
    expect(output.message).toBe("hello world");
})