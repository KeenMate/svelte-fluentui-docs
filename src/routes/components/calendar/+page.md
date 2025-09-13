# Calendar

The Calendar component provides date selection functionality with a visual calendar interface.

## Import

```svelte
<script>
  import { Calendar } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Calendar />
```

## With Default Date

```svelte
<Calendar value={new Date()} />
```

## Date Range Selection

```svelte
<Calendar mode="range" />
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `Date \| Date[]` | `undefined` | Selected date(s) |
| `mode` | `'single' \| 'range' \| 'multiple'` | `'single'` | Selection mode |
| `minDate` | `Date` | `undefined` | Minimum selectable date |
| `maxDate` | `Date` | `undefined` | Maximum selectable date |
| `disabled` | `boolean` | `false` | Whether the calendar is disabled |

## Events

| Event | Description |
|-------|-------------|
| `on:change` | Fired when date selection changes |