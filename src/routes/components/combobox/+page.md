# Combobox

The Combobox component combines a text input with a dropdown list, allowing users to either type or select from options.

## Import

```svelte
<script>
  import { Combobox, Option } from 'svelte-fluentui';
</script>
```

## Live Demo

<script>
  import { Combobox, Option } from 'svelte-fluentui';

  let selectedCity = '';
  let selectedTag = '';
</script>

<div style="padding: 20px; border: 1px solid #ccc; border-radius: 8px; margin: 20px 0;">
  <Combobox label="Search or select city" bind:value={selectedCity} placeholder="Type or select...">
    <Option value="new-york">New York</Option>
    <Option value="london">London</Option>
    <Option value="tokyo">Tokyo</Option>
    <Option value="paris">Paris</Option>
    <Option value="berlin">Berlin</Option>
  </Combobox>

  <br><br>

  <Combobox label="Tags" bind:value={selectedTag} allowCustomValue placeholder="Type custom values...">
    <Option value="work">Work</Option>
    <Option value="personal">Personal</Option>
    <Option value="urgent">Urgent</Option>
    <Option value="important">Important</Option>
  </Combobox>

  <br><br>

  <Combobox label="Disabled Combobox" disabled>
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
  </Combobox>

  <div style="margin-top: 15px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
    <strong>Selected:</strong><br>
    City: {selectedCity || 'None selected'}<br>
    Tag: {selectedTag || 'None selected'}
  </div>
</div>

## Basic Usage

```svelte
<Combobox label="Search or select city">
  <Option value="new-york">New York</Option>
  <Option value="london">London</Option>
  <Option value="tokyo">Tokyo</Option>
</Combobox>
```

## With Custom Values

```svelte
<Combobox label="Tags" allowCustomValue>
  <Option value="work">Work</Option>
  <Option value="personal">Personal</Option>
  <Option value="urgent">Urgent</Option>
</Combobox>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `undefined` | Label text for the combobox |
| `value` | `string` | `''` | Current value |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `allowCustomValue` | `boolean` | `false` | Allow typing custom values |
| `disabled` | `boolean` | `false` | Whether the combobox is disabled |

## Events

| Event | Description |
|-------|-------------|
| `on:change` | Fired when the value changes |
| `on:input` | Fired during typing |