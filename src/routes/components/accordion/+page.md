# Accordion

The Accordion component provides collapsible content sections that can be expanded or collapsed.

## Import

```svelte
<script>
  import { Accordion, AccordionItem } from 'svelte-fluentui';
</script>
```

## Basic Usage

```svelte
<Accordion>
  <AccordionItem header="Section 1">
    <p>Content for section 1...</p>
  </AccordionItem>
  <AccordionItem header="Section 2">
    <p>Content for section 2...</p>
  </AccordionItem>
</Accordion>
```

## Multiple Open Sections

```svelte
<Accordion multiple>
  <AccordionItem header="FAQ 1" expanded>
    <p>Answer to first question...</p>
  </AccordionItem>
  <AccordionItem header="FAQ 2">
    <p>Answer to second question...</p>
  </AccordionItem>
</Accordion>
```

## Properties

### Accordion

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `multiple` | `boolean` | `false` | Allow multiple sections to be open |

### AccordionItem

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `header` | `string` | `undefined` | Header text for the section |
| `expanded` | `boolean` | `false` | Whether the section is expanded |
| `disabled` | `boolean` | `false` | Whether the section is disabled |

## Events

| Event | Description |
|-------|-------------|
| `on:toggle` | Fired when an accordion item is toggled |