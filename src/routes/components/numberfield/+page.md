# NumberField

The NumberField component allows users to input numeric values with optional increment/decrement controls.

## Import

```svelte
<script>
  import { NumberField } from 'svelte-fluentui';
</script>
```

## Live Demo

<script>
  import { NumberField } from 'svelte-fluentui';

  let quantity = 1;
  let age = 25;
  let price = 19.99;
</script>

<div style="padding: 20px; border: 1px solid #ccc; border-radius: 8px; margin: 20px 0;">
  <NumberField label="Quantity" bind:value={quantity} min={0} max={100} />
  <br><br>
  <NumberField label="Age" bind:value={age} min={0} max={120} />
  <br><br>
  <NumberField label="Price" bind:value={price} step={0.01} min={0} />
  <br><br>
  <NumberField label="Disabled" value={42} disabled />

  <div style="margin-top: 15px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
    <strong>Values:</strong><br>
    Quantity: {quantity}<br>
    Age: {age}<br>
    Price: ${price}
  </div>
</div>

## Basic Usage

```svelte
<NumberField label="Quantity" />
```

## With Min/Max Values

```svelte
<NumberField label="Age" min={0} max={120} />
```

## With Step

```svelte
<NumberField label="Price" step={0.01} />
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `undefined` | Label text for the field |
| `value` | `number` | `0` | Current numeric value |
| `min` | `number` | `undefined` | Minimum allowed value |
| `max` | `number` | `undefined` | Maximum allowed value |
| `step` | `number` | `1` | Step increment for controls |
| `disabled` | `boolean` | `false` | Whether the field is disabled |
| `required` | `boolean` | `false` | Whether the field is required |

## Events

| Event | Description |
|-------|-------------|
| `on:input` | Fired when the numeric value changes |
| `on:increment` | Fired when increment button is clicked |
| `on:decrement` | Fired when decrement button is clicked |