# TextField

The TextField component allows users to input and edit text on a single line.

## Import

```svelte
<script>
  import { TextField } from 'svelte-fluentui';
</script>
```

## Live Demo

<script>
  import { TextField } from 'svelte-fluentui';

  let name = '';
  let email = '';
  let password = '';
</script>

<div style="padding: 20px; border: 1px solid #ccc; border-radius: 8px; margin: 20px 0;">
  <TextField label="Name" bind:value={name} placeholder="Enter your name" />
  <br><br>
  <TextField label="Email" bind:value={email} type="email" placeholder="user@example.com" />
  <br><br>
  <TextField label="Password" bind:value={password} type="password" placeholder="Password" />
  <br><br>
  <TextField label="Disabled Field" value="Cannot edit" disabled />
  <br><br>
  <TextField label="Required Field" required />

  <div style="margin-top: 15px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
    <strong>Values:</strong><br>
    Name: {name}<br>
    Email: {email}<br>
    Password: {password ? '•'.repeat(password.length) : ''}
  </div>
</div>

## Basic Usage

```svelte
<TextField label="Enter your name" />
```

## With Placeholder

```svelte
<TextField label="Email" placeholder="user@example.com" />
```

## Required Field

```svelte
<TextField label="Username" required />
```

## Disabled State

```svelte
<TextField label="Read-only field" value="Cannot edit" disabled />
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `undefined` | Label text for the field |
| `value` | `string` | `''` | Current value of the input |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `required` | `boolean` | `false` | Whether the field is required |
| `disabled` | `boolean` | `false` | Whether the field is disabled |
| `type` | `string` | `'text'` | Input type (text, email, password, etc.) |

## Events

| Event | Description |
|-------|-------------|
| `on:input` | Fired when the input value changes |
| `on:focus` | Fired when the input gains focus |
| `on:blur` | Fired when the input loses focus |