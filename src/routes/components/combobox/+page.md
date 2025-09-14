# Combobox

The Combobox component combines a text input with a dropdown list, allowing users to either type or select from options.

## Import

```svelte
<script>
  import { Combobox, Option } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Combobox label="Search or select city">
  <Option value="new-york">New York</Option>
  <Option value="london">London</Option>
  <Option value="tokyo">Tokyo</Option>
</Combobox>
```

## With Custom Values

```svelte
<Combobox label="Tags" allowCustomValue>
  <Option value="work">Work</Option>
  <Option value="personal">Personal</Option>
  <Option value="urgent">Urgent</Option>
</Combobox>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `undefined` | Label text for the combobox |
| `value` | `string` | `''` | Current value |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `allowCustomValue` | `boolean` | `false` | Allow typing custom values |
| `disabled` | `boolean` | `false` | Whether the combobox is disabled |

## Events

| Event | Description |
|-------|-------------|
| `on:change` | Fired when the value changes |
| `on:input` | Fired during typing |