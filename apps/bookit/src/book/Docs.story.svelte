<script context="module">
	import { Canvas, Frame, Docs, Callout, PropTable } from '$bookit/lib';
  import { Button } from '@packages/components';

	export const parent = 'Docs';
	export const title = 'Button';
</script>

<Canvas>
	<Docs>
		<h1>{title}</h1>
		<p>This is a basic Docs component that allows you to write docs within your stories.</p>
		<p>Below is a Frame that includes a component. A frame is a way to group related components.</p>
		<p>
			Both Docs and Frames live within a Canvas component. The canvas is where your frames and docs
			live and is the main area where you put your components. A canvas can be configured to have
			it's background color changed.
		</p>
    <Button>Test</Button>

    <Frame title="Button 1">
      <Button>Button 1</Button>
    </Frame>
    
		<h2>Call Outs</h2>
		<Callout>
			This is a {`<Callout />`} component. It can be used for information that should be made more obvious.
			It can be of three types.
		</Callout>
		<Callout type="warning">This is a 'warning'.</Callout>
		<Callout type="correct">This is a 'correct'.</Callout>
		<PropTable props={{
      
				title: {
					type: 'string',
					text: 'The text that is output in the test button'
				},
				margin: {
					type: 'string',
					text: 'Not a real prop on this component, but here for example purposes.',
					default: '0px'
				}
			}}/>
	</Docs>
</Canvas>
