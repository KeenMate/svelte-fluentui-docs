# Radio

The Radio component allows users to select a single option from a group.

## Import

```svelte
<script>
  import { Radio } from 'svelte-fluentui';
</script>
```

## Live Demo

<script>
  import { Radio } from 'svelte-fluentui';

  let selectedSize = 'medium';
  let selectedColor = 'blue';
</script>

<div style="padding: 20px; border: 1px solid #ccc; border-radius: 8px; margin: 20px 0;">
  <div>
    <strong>Size Options:</strong><br>
    <Radio name="size" value="small" bind:group={selectedSize}>Small</Radio><br>
    <Radio name="size" value="medium" bind:group={selectedSize}>Medium</Radio><br>
    <Radio name="size" value="large" bind:group={selectedSize}>Large</Radio>
  </div>

  <br><br>

  <div>
    <strong>Color Options:</strong><br>
    <Radio name="color" value="red" bind:group={selectedColor}>Red</Radio><br>
    <Radio name="color" value="blue" bind:group={selectedColor}>Blue</Radio><br>
    <Radio name="color" value="green" bind:group={selectedColor}>Green</Radio><br>
    <Radio name="color" value="disabled" disabled>Disabled option</Radio>
  </div>

  <div style="margin-top: 15px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
    <strong>Selected:</strong><br>
    Size: {selectedSize}<br>
    Color: {selectedColor}
  </div>
</div>

## Basic Usage

```svelte
<Radio name="size" value="small">Small</Radio>
<Radio name="size" value="medium">Medium</Radio>
<Radio name="size" value="large">Large</Radio>
```

## Checked by Default

```svelte
<Radio name="color" value="blue" checked>Blue</Radio>
<Radio name="color" value="red">Red</Radio>
```

## Disabled State

```svelte
<Radio name="option" value="disabled" disabled>Disabled option</Radio>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | `string` | `undefined` | Name attribute for grouping radios |
| `value` | `string` | `undefined` | Value of the radio button |
| `checked` | `boolean` | `false` | Whether the radio is selected |
| `disabled` | `boolean` | `false` | Whether the radio is disabled |

## Events

| Event | Description |
|-------|-------------|
| `on:change` | Fired when the radio selection changes |