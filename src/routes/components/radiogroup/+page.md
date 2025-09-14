# RadioGroup

The RadioGroup component groups multiple Radio components together, ensuring only one can be selected at a time.

## Import

```svelte
<script>
  import { RadioGroup, Radio } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<RadioGroup label="Choose size" name="size">
  <Radio value="small">Small</Radio>
  <Radio value="medium">Medium</Radio>
  <Radio value="large">Large</Radio>
</RadioGroup>
```

## With Default Selection

```svelte
<RadioGroup label="Theme" name="theme" value="light">
  <Radio value="light">Light</Radio>
  <Radio value="dark">Dark</Radio>
  <Radio value="auto">Auto</Radio>
</RadioGroup>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `undefined` | Label for the radio group |
| `name` | `string` | `undefined` | Name attribute for all child radios |
| `value` | `string` | `undefined` | Currently selected value |
| `disabled` | `boolean` | `false` | Whether the entire group is disabled |
| `required` | `boolean` | `false` | Whether a selection is required |

## Events

| Event | Description |
|-------|-------------|
| `on:change` | Fired when the selected value changes |