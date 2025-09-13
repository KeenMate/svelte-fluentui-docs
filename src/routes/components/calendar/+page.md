# Calendar

The Calendar component provides date selection functionality with a visual calendar interface.

## Import

```svelte
<script>
  import { Calendar } from 'svelte-fluentui';
</script>
```

## Live Demo

<script>
  import { Calendar } from 'svelte-fluentui';

  let selectedDate = new Date();
  let dateRange = [];
  let multipleDates = [];
</script>

<div style="padding: 20px; border: 1px solid #ccc; border-radius: 8px; margin: 20px 0;">
  <h4>Single Date Selection</h4>
  <Calendar bind:value={selectedDate} />
  <br>

  <h4>Date Range Selection</h4>
  <Calendar mode="range" bind:value={dateRange} />
  <br>

  <h4>Multiple Date Selection</h4>
  <Calendar mode="multiple" bind:value={multipleDates} />
  <br>

  <h4>Disabled Calendar</h4>
  <Calendar disabled />

  <div style="margin-top: 15px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
    <strong>Selected:</strong><br>
    Single date: {selectedDate ? selectedDate.toLocaleDateString() : 'None'}<br>
    Date range: {dateRange.length > 0 ? `${dateRange[0]?.toLocaleDateString()} - ${dateRange[1]?.toLocaleDateString()}` : 'None'}<br>
    Multiple dates: {multipleDates.length > 0 ? `${multipleDates.length} dates selected` : 'None'}
  </div>
</div>

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