# Qwik City Nprogress ⚡️

A simple [Qwik City][qwik-city] progress bar component using [Nprogress][nprogress].

## Installation

```bash
yarn  add @quasarwork/qwik-city-nprogress
```

## Usage

The component leverages the property `isNavigating` from [@builder.io/qwik-city useLocation()][use-location] hook.

In order to use the component, you just need to add it in a `layout` component.

_It is recommended to add it to the top-level `layout` component, so that it will work through the whole site._

`src/routes/layout.tsx`

```typescript
import QwikCityNprogress from '@quasarwork/qwik-city-nprogress'

export default component$(() => {
  return (
    <>
      <QwikCityNprogress />
      <main class="py-8">
        <Slot />
      </main>
    </>
  )
})
```

## Configuration

You can use any configuration property from the original [Nprogress][nprogress] package (see [Nprogress configuration](<(https://github.com/rstacruz/nprogress#configuration)>)).

Two other properties have been added to make it easier to customize the look of the progress bar.

### color

Typ: `string`
Default: `undefined`

Keeping the property `undefined` means keeping the original color provided by [Nprogress][nprogress], which is `#29d`.

### height

Typ: `string`
Default: `undefined`

Keeping the property `undefined` means keeping the original height provided by [Nprogress][nprogress], which is `2px`.

### Example configuration

`src/routes/layout.tsx`

```typescript
import QwikCityNprogress from '@quasarwork/qwik-city-nprogress'

export default component$(() => {
  return (
    <>
      <QwikCityNprogress
        options={{
          color: 'var(--primary-color)',
          height: '4px',
        }}
      />
      <main class="py-8">
        <Slot />
      </main>
    </>
  )
})
```

[qwik-city]: https://qwik.builder.io/
[nprogress]: https://ricostacruz.com/nprogress/
[use-location]: https://qwik.builder.io/docs/api/#uselocation
