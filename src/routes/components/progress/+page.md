# Progress

The Progress component indicates the completion progress of a task or process.

## Import

```svelte
<script>
  import { Progress } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Progress value={50} max={100} />
```

## With Label

```svelte
<Progress label="Download progress" value={75} max={100} />
```

## Indeterminate Progress

```svelte
<Progress indeterminate />
```

## Circular Progress

```svelte
<Progress variant="circular" value={60} />
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `number` | `0` | Current progress value |
| `max` | `number` | `100` | Maximum progress value |
| `variant` | `'linear' \| 'circular'` | `'linear'` | Progress bar style |
| `indeterminate` | `boolean` | `false` | Show indeterminate progress |
| `label` | `string` | `undefined` | Progress label |

## Events

| Event | Description |
|-------|-------------|
| `on:complete` | Fired when progress reaches maximum |