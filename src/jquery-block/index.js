import { registerBlockType } from '@wordpress/blocks';
import './editor.scss';
import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata.name, {
	edit: Edit,
} );
