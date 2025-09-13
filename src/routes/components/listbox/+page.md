# Listbox

The Listbox component presents a list of selectable options, similar to a select but always visible.

## Import

```svelte
<script>
  import { Listbox, Option } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Listbox>
  <Option value="apple">Apple</Option>
  <Option value="banana">Banana</Option>
  <Option value="cherry">Cherry</Option>
</Listbox>
```

## Multiple Selection

```svelte
<Listbox multiple bind:value={selectedValues}>
  <Option value="red">Red</Option>
  <Option value="green">Green</Option>
  <Option value="blue">Blue</Option>
</Listbox>
```

## With Disabled Options

```svelte
<Listbox>
  <Option value="available">Available</Option>
  <Option value="out-of-stock" disabled>Out of Stock</Option>
  <Option value="coming-soon" disabled>Coming Soon</Option>
</Listbox>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string \| string[]` | `undefined` | Selected value(s) |
| `multiple` | `boolean` | `false` | Allow multiple selections |
| `disabled` | `boolean` | `false` | Whether the listbox is disabled |

## Events

| Event | Description |
|-------|-------------|
| `on:change` | Fired when selection changes |