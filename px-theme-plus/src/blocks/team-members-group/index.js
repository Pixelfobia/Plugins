import { registerBlockType } from '@wordpress/blocks';
import { 
  useBlockProps, InspectorControls, InnerBlocks
} from '@wordpress/block-editor';
import {
  PanelBody, RangeControl, SelectControl
} from '@wordpress/components'
import { __ } from '@wordpress/i18n';
import icons from '../../icons.js';
import './main.css';

registerBlockType('px-theme-plus/team-members-group', {
  icon: {
    src: icons.primary
  },
  edit({ attributes, setAttributes }) {
    const { columns, imageShape } = attributes;
    const blockProps = useBlockProps({
      className: `cols-${columns}`
    });
   
    return (
      <>
        <InspectorControls>
          <PanelBody title={__('Settings', 'px-theme-plus')}>
            <RangeControl 
              label={__('Columns', 'px-theme-plus')}
              onChange={columns => setAttributes({columns})}
              value={columns}
              min={2}
              max={4}
            />
            <SelectControl 
              label={__('Image Shape', 'px-theme-plus')}
              value={ imageShape }
              options={[
                  { label: __('Hexagon', 'px-theme-plus'), value: 'hexagon' },
                  { label: __('Rabbet', 'px-theme-plus'), value: 'rabbet' },
                  { label: __('Pentagon', 'px-theme-plus'), value: 'pentagon' },
              ]}
              onChange={imageShape => setAttributes({ imageShape })}
            />
          </PanelBody>
        </InspectorControls>
        <div {...blockProps}>
          <InnerBlocks 
            orientation="horizontal"
            allowedBlocks={[
              'px-theme-plus/team-member'
            ]}
            template={[
              [
                'px-theme-plus/team-member',
                {
                  name: 'John Doe',
                  title: 'CEO',
                  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              ],
              ['px-theme-plus/team-member'],
              ['px-theme-plus/team-member']
            ]}
            // templateLock="insert"
          />
        </div>
      </>
    );
  },
  save({ attributes }) {
    const { columns } = attributes;
    const blockProps = useBlockProps.save({
      className: `cols-${columns}`
    });

    return (
      <div {...blockProps}>
        <InnerBlocks.Content />
      </div>
    )
  }
});