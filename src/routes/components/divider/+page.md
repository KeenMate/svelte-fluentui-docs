# Divider

The Divider component provides visual separation between content sections.

## Import

```svelte
<script>
  import { Divider } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<p>Content above</p>
<Divider />
<p>Content below</p>
```

## Vertical Divider

```svelte
<div style="display: flex; align-items: center;">
  <span>Left content</span>
  <Divider orientation="vertical" />
  <span>Right content</span>
</div>
```

## With Text

```svelte
<Divider>OR</Divider>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Divider orientation |
| `variant` | `'solid' \| 'dashed' \| 'dotted'` | `'solid'` | Line style |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Text content to display in the divider |