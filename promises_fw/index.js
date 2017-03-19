function sync(cb) {
  setTimeout(() => {
    const res = deferred();
    cb(res);
  }, 1000);
}

function deferred() {
  return 'deferred';
}

sync((res) => console.log(res));
