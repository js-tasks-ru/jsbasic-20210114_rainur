export default function promiseClick(button) {
  button.addEventListener('click', (event) => {
    let promise = new Promise();
    promise.then((event) => console.log(event))
  }, { once: true });
}
