# RadioGroup

The RadioGroup component groups multiple Radio components together, ensuring only one can be selected at a time.

## Import

```svelte
<script>
  import { RadioGroup, Radio } from 'svelte-fluentui';
</script>
```

## Live Demo

<script>
  import { RadioGroup, Radio } from 'svelte-fluentui';

  let selectedSize = 'medium';
  let selectedTheme = 'light';
</script>

<div style="padding: 20px; border: 1px solid #ccc; border-radius: 8px; margin: 20px 0;">
  <RadioGroup label="Choose size" name="size" bind:value={selectedSize}>
    <Radio value="small">Small</Radio>
    <Radio value="medium">Medium</Radio>
    <Radio value="large">Large</Radio>
  </RadioGroup>

  <br><br>

  <RadioGroup label="Theme" name="theme" bind:value={selectedTheme}>
    <Radio value="light">Light</Radio>
    <Radio value="dark">Dark</Radio>
    <Radio value="auto">Auto</Radio>
  </RadioGroup>

  <br><br>

  <RadioGroup label="Disabled Group" name="disabled" disabled>
    <Radio value="option1">Option 1</Radio>
    <Radio value="option2">Option 2</Radio>
  </RadioGroup>

  <div style="margin-top: 15px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
    <strong>Selected:</strong><br>
    Size: {selectedSize}<br>
    Theme: {selectedTheme}
  </div>
</div>

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