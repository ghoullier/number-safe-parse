# number-safe-parse

[Credit](https://twitter.com/buildsghost/status/1766273406608294298)

A safer way to parse string to number. It is designed to only parse strings that are *exactly* valid JavaScript numbers. This means it will not parse strings with trailing non-numeric characters (e.g., "123foo" will result in `null`, not `123`).

> This Project rely on [bun](https://bun.sh) toolchain

## How to use it?

```ts
import { numberSafeParse } from "@ghoullier/number-safe-parse"

const parsed = numberSafeParse('42')

parsed === 42
```

## Install project

```sh
bun install
```

## Run test

```sh
bun test
```

## Build the project

```sh
bun run build
```
