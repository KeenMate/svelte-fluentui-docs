import { defaultTheme } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: defaultTheme({
				navbar: [
					{
						title: 'Getting Started',
						to: '/getting-started'
					},
					{
						title: 'Components',
						to: '/components'
					}
				],
				sidebar: {
					'/': [
						{
							title: 'Getting Started',
							to: '/getting-started'
						},
						{
							title: 'Components',
							collapsible: true,
							items: [
								{
									title: 'Overview',
									to: '/components'
								},
								{
									title: 'Form Components',
									collapsible: true,
									items: [
										{ title: 'Button', to: '/components/button' },
										{ title: 'TextField', to: '/components/textfield' },
										{ title: 'Textarea', to: '/components/textarea' },
										{ title: 'NumberField', to: '/components/numberfield' },
										{ title: 'Checkbox', to: '/components/checkbox' },
										{ title: 'Radio', to: '/components/radio' },
										{ title: 'RadioGroup', to: '/components/radiogroup' },
										{ title: 'Switch', to: '/components/switch' },
										{ title: 'Select', to: '/components/select' },
										{ title: 'Combobox', to: '/components/combobox' },
										{ title: 'Search', to: '/components/search' },
										{ title: 'Slider', to: '/components/slider' },
										{ title: 'Calendar', to: '/components/calendar' }
									]
								},
								{
									title: 'Data Display',
									collapsible: true,
									items: [
										{ title: 'DataGrid', to: '/components/datagrid' },
										{ title: 'Badge', to: '/components/badge' },
										{ title: 'Card', to: '/components/card' },
										{ title: 'Divider', to: '/components/divider' },
										{ title: 'Progress', to: '/components/progress' },
										{ title: 'Tooltip', to: '/components/tooltip' }
									]
								},
								{
									title: 'Navigation',
									collapsible: true,
									items: [
										{ title: 'Breadcrumb', to: '/components/breadcrumb' },
										{ title: 'Menu', to: '/components/menu' },
										{ title: 'Tabs', to: '/components/tabs' },
										{ title: 'Anchor', to: '/components/anchor' },
										{ title: 'Paginator', to: '/components/paginator' }
									]
								},
								{
									title: 'Layout',
									collapsible: true,
									items: [
										{ title: 'Accordion', to: '/components/accordion' },
										{ title: 'Stack', to: '/components/stack' },
										{ title: 'Spacer', to: '/components/spacer' }
									]
								},
								{
									title: 'Overlays',
									collapsible: true,
									items: [
										{ title: 'Dialog', to: '/components/dialog' },
										{ title: 'Toast', to: '/components/toast' }
									]
								},
								{
									title: 'Other',
									collapsible: true,
									items: [
										{ title: 'Listbox', to: '/components/listbox' },
										{ title: 'Option', to: '/components/option' },
										{ title: 'Tree', to: '/components/tree' },
										{ title: 'Toolbar', to: '/components/toolbar' }
									]
								}
							]
						}
					]
				},
				github: 'https://github.com/keenmate/svelte-fluentui',
				logo: '/sveltepress.svg',
			}),
			siteConfig: {
				title: 'Svelte FluentUI',
				description: 'Microsoft FluentUI components for Svelte',
			},
		}),
	],
})

export default config
