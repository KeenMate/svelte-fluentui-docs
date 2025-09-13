# Textarea

The Textarea component allows users to input and edit multi-line text.

## Import

```svelte
<script>
  import { Textarea } from 'svelte-fluentui';
</script>
```

## Live Demo

<script>
  import { Textarea } from 'svelte-fluentui';

  let comment = '';
  let description = 'This is a default value in the textarea.';
</script>

<div style="padding: 20px; border: 1px solid #ccc; border-radius: 8px; margin: 20px 0;">
  <Textarea label="Comments" bind:value={comment} placeholder="Enter your comments here..." />
  <br><br>
  <Textarea label="Description" bind:value={description} rows={6} />
  <br><br>
  <Textarea label="Large Text Area" placeholder="This has 10 rows..." rows={10} />
  <br><br>
  <Textarea label="Disabled" value="This textarea is disabled" disabled />

  <div style="margin-top: 15px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
    <strong>Values:</strong><br>
    Comment: {comment}<br>
    Description length: {description.length} characters
  </div>
</div>

## Basic Usage

```svelte
<Textarea label="Comments" />
```

## With Placeholder

```svelte
<Textarea label="Description" placeholder="Enter your description here..." />
```

## Custom Size

```svelte
<Textarea label="Large text area" rows={10} />
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `undefined` | Label text for the textarea |
| `value` | `string` | `''` | Current value of the textarea |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `rows` | `number` | `3` | Number of visible text lines |
| `disabled` | `boolean` | `false` | Whether the textarea is disabled |
| `required` | `boolean` | `false` | Whether the field is required |

## Events

| Event | Description |
|-------|-------------|
| `on:input` | Fired when the textarea value changes |
| `on:focus` | Fired when the textarea gains focus |
| `on:blur` | Fired when the textarea loses focus |