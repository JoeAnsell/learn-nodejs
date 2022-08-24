const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    console.log(method);
    res.setHeader("Conent-Type", "text/html");
    res.write("<html>");
    res.write("<header><title>Hello</title></header>");
    res.write(
      "<body><h1>Welcome youdddd</h1><form action='/create-user' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  ``;
  if (url === "/users") {
    console.log(method);
    res.setHeader("Conent-Type", "text/html");
    res.write("<html>");
    res.write("<header><title>Users</title></header>");
    res.write(
      "<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[0];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
      console.log(message);
    });
  }
  res.setHeader("Conent-Type", "text/html");
  res.write("<html>");
  res.write("<header><title>Createds</title></header>");
  res.write("<body><h1>Creat user page</h1></body>");
  res.write("</html>");
};

module.exports = requestHandler;
