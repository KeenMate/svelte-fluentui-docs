# Switch

The Switch component provides a toggle control for binary states like on/off or enabled/disabled.

## Import

```svelte
<script>
  import { Switch } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Switch>Enable notifications</Switch>
```

## Checked by Default

```svelte
<Switch checked>Auto-save enabled</Switch>
```

## Disabled State

```svelte
<Switch disabled>Feature unavailable</Switch>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `checked` | `boolean` | `false` | Whether the switch is on |
| `disabled` | `boolean` | `false` | Whether the switch is disabled |
| `value` | `string` | `undefined` | Value when used in a form |

## Events

| Event | Description |
|-------|-------------|
| `on:change` | Fired when the switch state changes |