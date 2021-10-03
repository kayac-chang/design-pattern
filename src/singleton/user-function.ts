interface User {}

export default (function User() {
  let user: User | undefined = undefined;

  return function getInstance() {
    if (user) return user;

    user = {};

    return user;
  };
})();
