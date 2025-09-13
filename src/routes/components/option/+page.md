# Option

The Option component represents a selectable item within components like Select, Combobox, or Listbox.

## Import

```svelte
<script>
  import { Option } from 'svelte-fluentui';
</script>
```

## Basic Usage

Used within other components:

```svelte
<Select>
  <Option value="1">First Option</Option>
  <Option value="2">Second Option</Option>
</Select>
```

## With Custom Content

```svelte
<Listbox>
  <Option value="user1">
    <div class="user-option">
      <img src="avatar1.jpg" alt="User" />
      <span>John Doe</span>
    </div>
  </Option>
  <Option value="user2">
    <div class="user-option">
      <img src="avatar2.jpg" alt="User" />
      <span>Jane Smith</span>
    </div>
  </Option>
</Listbox>
```

## Disabled Option

```svelte
<Select>
  <Option value="enabled">Enabled Option</Option>
  <Option value="disabled" disabled>Disabled Option</Option>
</Select>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | `undefined` | Option value |
| `disabled` | `boolean` | `false` | Whether the option is disabled |
| `selected` | `boolean` | `false` | Whether the option is selected |

## Events

| Event | Description |
|-------|-------------|
| `on:click` | Fired when the option is clicked |