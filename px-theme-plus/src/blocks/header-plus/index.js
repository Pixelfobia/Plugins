import {registerBlockType} from '@wordpress/blocks'
import {RichText, useBlockProps, InspectorControls} from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'
import { PanelBody, ColorPalette } from '@wordpress/components' 
import block from './block.json'
import icons from '../../icons'
import './main.css'


registerBlockType(block.name, {
	icon: icons.primary,
	edit({attributes, setAttributes}) {
		const {content, underline_color } = attributes
		const blockProps = useBlockProps()

		return (
			<>
				<InspectorControls>
					<PanelBody title={__('Colors', 'px-theme-plus')}>
						<ColorPalette
							colors={[
								{color: '#f87171', name: 'Red'},
								{color: '#818cf8', name: 'Indigo'},
							]}
							value={underline_color}
							onChange={newVal => setAttributes({underline_color: newVal})}
						/> 
					</PanelBody>
				</InspectorControls>
				<div {...blockProps}>
					<RichText
						className="fancy-header"	
						tagName="h2"
						placeholder={__('Enter heading', 'px-theme-plus')} 
						value={content}
						onChange={newVal =>  setAttributes({content: newVal})}
						allowedFormats={['core/italic', 'core/bold']}
					/>
				</div>
			</>
		)
	},
	save({attributes}) {
		const { content, underline_color } = attributes
		const blockProps = useBlockProps.save({
				className: 'fancy-header',
				style: {
					'background-image': `
						linear-gradient(transparent, transparent),
						linear-gradient(${underline_color}, ${underline_color})
					`
				}
			})
		
		return (
		<RichText.Content
			{...blockProps}
			tagName="h2"
			value={content}
		/>
		)
	}
})