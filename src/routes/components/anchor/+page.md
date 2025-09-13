# Anchor

The Anchor component provides navigation links with FluentUI styling.

## Import

```svelte
<script>
  import { Anchor } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Anchor href="/about">About Us</Anchor>
```

## External Link

```svelte
<Anchor href="https://example.com" target="_blank">External Link</Anchor>
```

## Disabled Link

```svelte
<Anchor disabled>Disabled Link</Anchor>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `href` | `string` | `undefined` | Link URL |
| `target` | `string` | `undefined` | Link target (_blank, _self, etc.) |
| `disabled` | `boolean` | `false` | Whether the link is disabled |

## Events

| Event | Description |
|-------|-------------|
| `on:click` | Fired when the link is clicked |