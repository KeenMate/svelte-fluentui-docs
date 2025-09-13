# Select

The Select component provides a dropdown list of options for users to choose from.

## Import

```svelte
<script>
  import { Select, Option } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Select label="Choose country">
  <Option value="us">United States</Option>
  <Option value="ca">Canada</Option>
  <Option value="uk">United Kingdom</Option>
</Select>
```

## With Default Selection

```svelte
<Select label="Language" value="en">
  <Option value="en">English</Option>
  <Option value="es">Spanish</Option>
  <Option value="fr">French</Option>
</Select>
```

## Disabled Options

```svelte
<Select label="Plan">
  <Option value="free">Free</Option>
  <Option value="premium">Premium</Option>
  <Option value="enterprise" disabled>Enterprise (Coming Soon)</Option>
</Select>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `undefined` | Label text for the select |
| `value` | `string` | `undefined` | Currently selected value |
| `disabled` | `boolean` | `false` | Whether the select is disabled |
| `required` | `boolean` | `false` | Whether a selection is required |
| `placeholder` | `string` | `undefined` | Placeholder text |

## Events

| Event | Description |
|-------|-------------|
| `on:change` | Fired when the selection changes |