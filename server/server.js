const http = require("http");
const fs = require("fs");

const users = [
  {
    id: 1,
    firstName: "bob",
  },
  {
    id: 2,
    firstName: "Tom",
  },
];

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };
  res.writeHead(200, headers);

  switch (req.url) {
    case "/users":
      handleMethod(res, req.method);

      break;
    default:
      res.end();
      break;
  }

  //   let viewToDisplay = "./views/";
  //   switch (req.url) {
  //     case "/":
  //       viewToDisplay += "index.html";
  //       break;

  //     case "/about":
  //       viewToDisplay += "about.html";
  //       break;
  //     default:
  //       viewToDisplay += "notFound.html";
  //       break;
  //   }

  //   fs.readFile(viewToDisplay, (err, data) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       res.write(data);
  //     }
  //     res.end();
  //   });
});

const handleMethod = (res, req) => {
  switch (req.method) {
    case "GET":
      res.write(JSON.stringify(users));
      res.end();

      break;
    case "POST":
      users.push();

    default:
      break;
  }
};

server.listen(3000, () => {
  console.log(`listening to port 3000`);
});
