# Select

The Select component provides a dropdown list of options for users to choose from.

## Import

```svelte
<script>
  import { Select, Option } from 'svelte-fluentui';
</script>
```

## Live Demo

<script>
  import { Select, Option } from 'svelte-fluentui';

  let selectedCountry = 'us';
  let selectedLanguage = 'en';
  let selectedPlan = '';
</script>

<div style="padding: 20px; border: 1px solid #ccc; border-radius: 8px; margin: 20px 0;">
  <Select label="Choose country" bind:value={selectedCountry}>
    <Option value="us">United States</Option>
    <Option value="ca">Canada</Option>
    <Option value="uk">United Kingdom</Option>
    <Option value="de">Germany</Option>
    <Option value="fr">France</Option>
  </Select>

  <br><br>

  <Select label="Language" bind:value={selectedLanguage}>
    <Option value="en">English</Option>
    <Option value="es">Spanish</Option>
    <Option value="fr">French</Option>
    <Option value="de">German</Option>
  </Select>

  <br><br>

  <Select label="Plan" bind:value={selectedPlan} placeholder="Select a plan">
    <Option value="free">Free</Option>
    <Option value="premium">Premium</Option>
    <Option value="enterprise" disabled>Enterprise (Coming Soon)</Option>
  </Select>

  <br><br>

  <Select label="Disabled Select" disabled>
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
  </Select>

  <div style="margin-top: 15px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
    <strong>Selected:</strong><br>
    Country: {selectedCountry}<br>
    Language: {selectedLanguage}<br>
    Plan: {selectedPlan || 'None selected'}
  </div>
</div>

## Basic Usage

```svelte
<Select label="Choose country">
  <Option value="us">United States</Option>
  <Option value="ca">Canada</Option>
  <Option value="uk">United Kingdom</Option>
</Select>
```

## With Default Selection

```svelte
<Select label="Language" value="en">
  <Option value="en">English</Option>
  <Option value="es">Spanish</Option>
  <Option value="fr">French</Option>
</Select>
```

## Disabled Options

```svelte
<Select label="Plan">
  <Option value="free">Free</Option>
  <Option value="premium">Premium</Option>
  <Option value="enterprise" disabled>Enterprise (Coming Soon)</Option>
</Select>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `undefined` | Label text for the select |
| `value` | `string` | `undefined` | Currently selected value |
| `disabled` | `boolean` | `false` | Whether the select is disabled |
| `required` | `boolean` | `false` | Whether a selection is required |
| `placeholder` | `string` | `undefined` | Placeholder text |

## Events

| Event | Description |
|-------|-------------|
| `on:change` | Fired when the selection changes |