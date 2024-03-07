import { registerBlockType } from '@wordpress/blocks';
import { 
  useBlockProps, RichText, InspectorControls
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n';
import icons from '../../icons.js'
import './main.css'

registerBlockType('px-theme-plus/page-header', {
  icon: icons.primary,
	edit({ attributes, setAttributes }) {
		const { content, showCategory } = attributes
    const blockProps = useBlockProps();

    return (
      <>
				<InspectorControls>
					<PanelBody title={__('General', 'px-theme-plus')}>
						<ToggleControl 
							label={__('Show Category', 'px-theme-plus')}
							checked={showCategory}
							onChange={showCategory => setAttributes({ showCategory })}
							help={
								showCategory ? 
								__('Category Shown', 'px-theme-plus') : 
								__('Custom Content Shown', 'px-theme-plus')
							}
						/>
					</PanelBody>
				</InspectorControls>
        <div {...blockProps}>
					<div className="inner-page-header">
						{
							showCategory ? 
							<h1>{__('Category: Some Category', 'px-theme-plus')}</h1> : 
							<RichText 
								tagName="h1"
								placeholder={__('Heading', 'px-theme-plus')}
								value={content}
								onChange={content => setAttributes({ content })}
							/>
						}
					</div>
				</div>
      </>
    );
  }
});