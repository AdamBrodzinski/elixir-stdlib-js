# Elixir Standard Library Helpers

#### Why? I want to use the same API on the front and back end while being immutable

All objects and arrays are copied and the originals are never mutated. Keys are camel cased instead of snake cased. Some Elixir specific functions have not been included.

[ ![Codeship Status for AdamBrodzinski/elixir-stdlib-js](https://codeship.com/projects/961d6080-b158-0132-e813-32bd639983ea/status?branch=master)](https://codeship.com/projects/69814)

### IO

- IO.puts
- IO.inspect
- [Elixir docs - IO](http://elixir-lang.org/docs/stable/elixir/IO.html)

### Map

- Map.delete
- Map.drop
- Map.equal
- Map.get
- Map.hasKey
- Map.keys
- Map.merge
- Map.new/0
- Map.new/1
- Map.pop
- Map.put
- Map.putNew
- Map.split
- Map.take
- Map.toList
- Map.update
- Map.values
- [Elixir docs - Map](http://elixir-lang.org/docs/stable/elixir/Map.html)


### String

- String.at
- String.capitalize
- String.contains
- String.downcase
- String.duplicate


### Function piping

Elixir encourages the use of function "pipelines" and has a similar style to lodashes `_.chain` method. For convenience we've exposed a `pipe` function that aliases chain. We've also mixed in the `IO.inspect` function so that you can call `.inspect()` without any extra work. To add a function to the pipeline just use the `.run(yourFunc, arg1, arg2)` to include it. This works the same as `|> yourFunc(arg1, arg2)` in Elixir.

```javascript
import {String, pipe} from "elixir-stdlib-js"

function stripChars(str, char) {
  return str.replace(char, "")
}

let phone = pipe("555-222-000 ")
  .run(String.trim)
  .run(stripChars, "-")
  .inspect()
  .run(str => "+1" + str)
  .value()

>>> "+1555222000"
```

See [history.md](https://github.com/AdamBrodzinski/elixir-stdlib-js/blob/master/history.md) for changes and updates
