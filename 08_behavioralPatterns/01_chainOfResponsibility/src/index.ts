import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import Server from "./servers/Server";
import * as readline from 'readline';
import CheckPassWeakness from "./middlewares/CheckPassWeakness";

declare var process;

const middleware = new CheckUserMiddleware();
middleware.linkWith(new CheckPermissionMiddleware());
middleware.linkWith(new CheckPassWeakness());

const server = new Server();
server.setMiddleware(middleware);

function setPromptQuestions() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Email: ", (email: string) => {
    rl.question("Password: ", (password: string) => {
      server.login(email, password);
      rl.close();
    })
  });

  rl.on("close", () => setPromptQuestions());
}

setPromptQuestions();
