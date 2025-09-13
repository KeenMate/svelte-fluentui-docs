# TextField

The TextField component allows users to input and edit text on a single line.

## Import

```svelte
<script>
  import { TextField } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<TextField label="Enter your name" />
```

## With Placeholder

```svelte
<TextField label="Email" placeholder="user@example.com" />
```

## Required Field

```svelte
<TextField label="Username" required />
```

## Disabled State

```svelte
<TextField label="Read-only field" value="Cannot edit" disabled />
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `undefined` | Label text for the field |
| `value` | `string` | `''` | Current value of the input |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `required` | `boolean` | `false` | Whether the field is required |
| `disabled` | `boolean` | `false` | Whether the field is disabled |
| `type` | `string` | `'text'` | Input type (text, email, password, etc.) |

## Events

| Event | Description |
|-------|-------------|
| `on:input` | Fired when the input value changes |
| `on:focus` | Fired when the input gains focus |
| `on:blur` | Fired when the input loses focus |