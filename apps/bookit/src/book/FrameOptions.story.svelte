<script context="module">
	import { Canvas, Frame } from '$bookit/lib';
  import { Button } from '@packages/components';

	export const title = 'Frame Options';
	export const parent = 'Components';

</script>

<Canvas>
	<Frame
    let:props
		size={[200, 'auto']}
		bg="#333"
		checker={true}
		padding={40}
		title="With Frame Options"
		controls={{
			title: 'Hello',
      description: 'this is a description'
		}}>

    <Button>{props.title}</Button>
	</Frame>
  
	<Frame
    title="First Frame"
    let:props
    controls={{
      title: 'Hello, you can control me'
    }}
  >
    <Button>{props.title}</Button>
  </Frame>
  <Frame
    size={[300, 300]}
    checker={true}
    bg="blue"
    title="Second Frame"
    let:props
    controls={{
      title: 'Hello, you can control me TOO'
    }}
  >
    <Button>{props.title}</Button>
  </Frame>
</Canvas>
