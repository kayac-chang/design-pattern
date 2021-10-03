const $ = (id: string) => document.querySelector(id);

interface Store<T> {
  current: T;
}

const timeStore = {
  _current: new Date(),

  set current(value: Date) {
    this._current = value;

    update($("time"), timeStore);
  },
  get current() {
    return this._current;
  },
};

setInterval(() => {
  timeStore.current = new Date();
}, 1000);

function update(time: Element | null, state: Store<Date>) {
  if (!time) return;

  time.textContent = state.current.toUTCString();
}
