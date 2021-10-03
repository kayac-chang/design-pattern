interface User {
  name: {
    first: string;
    last: string;
  };

  age: number;
}

const user: User = {
  name: {
    first: "kirby",
    last: "hello",
  },
  age: 29,
};

const proxy = {
  get name(): string {
    return user.name.first + " " + user.name.last;
  },
  set name(value: string) {
    console.log(`previous: ${this.name}, next: ${value}`);

    const [first, last] = value.split(" ");

    user.name = {
      first,
      last,
    };
  },
};

export default proxy;
