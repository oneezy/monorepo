<script>
	import { page } from '$app/stores'
  import { fade, fly } from 'svelte/transition';
	import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_SEPARATOR, SITE_AUTHOR, SITE_DESCRIPTION } from '@packages/metadata'
	import { Section, Container, Content, TextAnimate, mediaQuery, Header, Scrollbar, Dialog, Nav, Logo, Theme, Button, Social, Device, Page, Link, Icon } from '@packages/components'

  import '@packages/components/css/global.css';
  import '$site/app.css';
  import Hero from '$site/lib/Hero.svelte'

	const sm = mediaQuery('(min-width: 0px) and (max-width: 767px)')
	const md = mediaQuery('(min-width: 0px) and (max-width: 1024px)')

	let device
</script>


<!-- Layout -->
<slot />