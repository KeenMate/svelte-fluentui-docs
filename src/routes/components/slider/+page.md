# Slider

The Slider component allows users to select a value from a range by dragging a handle along a track.

## Import

```svelte
<script>
  import { Slider } from 'svelte-fluentui';
</script>
```

## Live Demo

<script>
  import { Slider } from 'svelte-fluentui';

  let volume = 50;
  let price = 250;
  let rating = 3.5;
  let brightness = 75;
</script>

<div style="padding: 20px; border: 1px solid #ccc; border-radius: 8px; margin: 20px 0;">
  <Slider label="Volume" bind:value={volume} min={0} max={100} />
  <br><br>

  <Slider label="Price range" bind:value={price} min={0} max={1000} />
  <br><br>

  <Slider label="Rating" bind:value={rating} min={0} max={5} step={0.5} />
  <br><br>

  <Slider label="Brightness" bind:value={brightness} min={0} max={100} />
  <br><br>

  <Slider label="Disabled Slider" value={30} min={0} max={100} disabled />

  <div style="margin-top: 15px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
    <strong>Values:</strong><br>
    Volume: {volume}%<br>
    Price: ${price}<br>
    Rating: {rating}/5<br>
    Brightness: {brightness}%
  </div>
</div>

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