# Checkbox

The Checkbox component allows users to select one or more options from a set.

## Import

```svelte
<script>
  import { Checkbox } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Checkbox>Accept terms and conditions</Checkbox>
```

## Checked by Default

```svelte
<Checkbox checked>Subscribe to newsletter</Checkbox>
```

## Disabled State

```svelte
<Checkbox disabled>Unavailable option</Checkbox>
```

## Indeterminate State

```svelte
<Checkbox indeterminate>Partially selected</Checkbox>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `checked` | `boolean` | `false` | Whether the checkbox is checked |
| `indeterminate` | `boolean` | `false` | Whether the checkbox is in indeterminate state |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `value` | `string` | `undefined` | Value when used in a form |

## Events

| Event | Description |
|-------|-------------|
| `on:change` | Fired when the checkbox state changes |