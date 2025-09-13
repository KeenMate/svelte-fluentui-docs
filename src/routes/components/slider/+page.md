# Slider

The Slider component allows users to select a value from a range by dragging a handle along a track.

## Import

```svelte
<script>
  import { Slider } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Slider label="Volume" />
```

## With Min/Max Values

```svelte
<Slider label="Price range" min={0} max={1000} value={250} />
```

## With Step

```svelte
<Slider label="Rating" min={0} max={5} step={0.5} />
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `undefined` | Label text for the slider |
| `value` | `number` | `0` | Current slider value |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `step` | `number` | `1` | Step increment |
| `disabled` | `boolean` | `false` | Whether the slider is disabled |

## Events

| Event | Description |
|-------|-------------|
| `on:change` | Fired when the slider value changes |