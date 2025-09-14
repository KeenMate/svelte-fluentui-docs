# NumberField

The NumberField component allows users to input numeric values with optional increment/decrement controls.

## Import

```svelte
<script>
  import { NumberField } from 'svelte-fluentui';
</script>
```

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