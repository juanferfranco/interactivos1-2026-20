// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
	base: '/interactivos1-2026-20',
	markdown: {
		syntaxHighlight: {
			type: 'shiki',
			excludeLangs: ['math'],
		},
		processor: unified({
			remarkPlugins: [remarkMath],
			rehypePlugins: [rehypeMathjax],
		}),
	},
	integrations: [
		starlight({
			title: 'Sistemas Físicos Interactivos 1',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Español', lang: 'es-ES' },
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Introducción',
					items: [
						{ label: '¿De qué se trata este curso?', slug: 'units/intro' },
					],
				},
				{
					label: 'Unidades',
					items: [
						{ label: 'U1 - Audio', slug: 'units/unit1' },
						{ label: 'U2 - Visuales', slug: 'units/unit2' },
						{ label: 'U3 - Integración audio-visual', slug: 'units/unit3' },
						{ label: 'U4 - Superficie de control', slug: 'units/unit4' },
						{ label: 'U5 - Input del performer', slug: 'units/unit5' },
						{ label: 'U6 - Creación', slug: 'units/unit6' },
						{ label: 'U7 - Performance', slug: 'units/unit7' },
						{ label: 'U8 - Síntesis', slug: 'units/unit8' },
					],
				},
				{
					label: 'Recursos',
					items: [
						{ label: 'Recursos interesantes', slug: 'units/resources' },
					],
				},
			],
		}),
	],
	site: 'https://jfUPB.github.io',
});
