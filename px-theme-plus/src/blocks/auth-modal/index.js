import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import icons from '../../icons.js'
import './main.css'

registerBlockType('px-theme-plus/auth-modal', {
  icon: {
    src: icons.primary
  },
  edit({ attributes, setAttributes }) {
    const { showRegister } = attributes;
    const blockProps = useBlockProps();

    return (
      <>
        <InspectorControls>
          <PanelBody title={ __('General', 'px-theme-plus') }>
            <ToggleControl
              label={__('Show Register', 'px-theme-plus')}
              help={
                showRegister ?
                __('Showing registration form', 'px-theme-plus') :
                __('Hiding registration form', 'px-theme-plus')
              }
              checked={showRegister}
              onChange={showRegister => setAttributes({ showRegister })}
            />
          </PanelBody>
        </InspectorControls>
        <div { ...blockProps }>
          {__('This block is not previewable from the editor. View your site for a live demo.', 'px-theme-plus')}
        </div>
      </>
    );
  }
});