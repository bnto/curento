# FullStackOpen

https://fullstackopen.com/

The mechanism of invoking event handlers is very common in JavaScript. Event handler functions are called callback functions. The application code does not invoke the functions itself, but the runtime environment - the browser, invokes the function at an appropriate time when the event has occurred.

```js
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // code that takes care of the server response
  }
};
```
