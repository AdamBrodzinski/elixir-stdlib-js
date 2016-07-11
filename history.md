# Version History


## v 1.4.0

Adds the following funcitons to the String module.

- String.at
- String.capitalize
- String.contains
- String.downcase
- String.duplicate


## v 1.3.0

Adds `inspect` and `run` lodash mixins. Now you can call `.inspect()` in a pipeline and it will print out the contents. Using `.run` allows you to use normal functions in a pipeline like Elixir does (passing arguments in when the function is called).

```
function stripChars(str, char) {
  return str.replace(char, "")
}


pipe("555 222-000)
  .run(stripChars, "-")
  .inspect()
  .run(stripChars, " ")
  .inspect()
  .value()
```

## v 1.2.1

Adds the Map module with:

- `hasKey`
- `keys`
- `merge`
- `new/`
- `new/1`
- `pop`
- `put`
- `putNew`
- `split`
- `take`
- `toList`
- `update`
- `values`

## v 1.1.0

Adds the Map module with `delete`, `drop`, `equal`, and `get`.

## v 1.0.0

Adds the IO module with `puts` and `inspect` functions.
