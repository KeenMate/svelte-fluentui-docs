# Switch

The Switch component provides a toggle control for binary states like on/off or enabled/disabled.

## Import

```svelte
<script>
  import { Switch } from 'svelte-fluentui';
</script>
```

## Live Demo

<script>
  import { Switch } from 'svelte-fluentui';

  let notifications = false;
  let autoSave = true;
  let darkMode = false;
</script>

<div style="padding: 20px; border: 1px solid #ccc; border-radius: 8px; margin: 20px 0;">
  <Switch bind:checked={notifications}>Enable notifications</Switch>
  <br><br>
  <Switch bind:checked={autoSave}>Auto-save enabled</Switch>
  <br><br>
  <Switch bind:checked={darkMode}>Dark mode</Switch>
  <br><br>
  <Switch disabled>Feature unavailable</Switch>
  <br><br>
  <Switch checked disabled>Always enabled</Switch>

  <div style="margin-top: 15px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
    <strong>Settings:</strong><br>
    Notifications: {notifications ? 'On' : 'Off'}<br>
    Auto-save: {autoSave ? 'On' : 'Off'}<br>
    Dark mode: {darkMode ? 'On' : 'Off'}
  </div>
</div>

## Basic Usage

```svelte
<Switch>Enable notifications</Switch>
```

## Checked by Default

```svelte
<Switch checked>Auto-save enabled</Switch>
```

## Disabled State

```svelte
<Switch disabled>Feature unavailable</Switch>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `checked` | `boolean` | `false` | Whether the switch is on |
| `disabled` | `boolean` | `false` | Whether the switch is disabled |
| `value` | `string` | `undefined` | Value when used in a form |

## Events

| Event | Description |
|-------|-------------|
| `on:change` | Fired when the switch state changes |