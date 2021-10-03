interface User {}

let user: User | undefined = undefined;

export default function getInstance() {
  if (user) return user;

  user = {};

  return user;
}

/** Usage
import User from "./singleton/user";

const a = User();
const b = User();

function main() {
  console.log(a === b, "User instance are same instance");
}

main();

 */
