# Checkbox

The Checkbox component allows users to select one or more options from a set.

## Import

```svelte
<script>
  import { Checkbox } from 'svelte-fluentui';
</script>
```

## Live Demo

<script>
  import { Checkbox } from 'svelte-fluentui';

  let acceptTerms = false;
  let newsletter = true;
  let notifications = false;
</script>

<div style="padding: 20px; border: 1px solid #ccc; border-radius: 8px; margin: 20px 0;">
  <Checkbox bind:checked={acceptTerms}>Accept terms and conditions</Checkbox>
  <br><br>
  <Checkbox bind:checked={newsletter}>Subscribe to newsletter</Checkbox>
  <br><br>
  <Checkbox bind:checked={notifications}>Enable notifications</Checkbox>
  <br><br>
  <Checkbox indeterminate>Partially selected</Checkbox>
  <br><br>
  <Checkbox disabled>Disabled option</Checkbox>
  <br><br>
  <Checkbox checked disabled>Disabled checked</Checkbox>

  <div style="margin-top: 15px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
    <strong>Selected:</strong><br>
    Terms accepted: {acceptTerms}<br>
    Newsletter: {newsletter}<br>
    Notifications: {notifications}
  </div>
</div>

## Basic Usage

```svelte
<Checkbox>Accept terms and conditions</Checkbox>
```

## Checked by Default

```svelte
<Checkbox checked>Subscribe to newsletter</Checkbox>
```

## Disabled State

```svelte
<Checkbox disabled>Unavailable option</Checkbox>
```

## Indeterminate State

```svelte
<Checkbox indeterminate>Partially selected</Checkbox>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `checked` | `boolean` | `false` | Whether the checkbox is checked |
| `indeterminate` | `boolean` | `false` | Whether the checkbox is in indeterminate state |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `value` | `string` | `undefined` | Value when used in a form |

## Events

| Event | Description |
|-------|-------------|
| `on:change` | Fired when the checkbox state changes |