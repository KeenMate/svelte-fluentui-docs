# Textarea

The Textarea component allows users to input and edit multi-line text.

## Import

```svelte
<script>
  import { Textarea } from 'svelte-fluentui';
</script>
```

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