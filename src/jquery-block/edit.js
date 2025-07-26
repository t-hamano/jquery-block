import $ from 'jquery';
import 'select2';
import 'jquery-validation';
import { useBlockProps } from '@wordpress/block-editor';
import { useRefEffect } from '@wordpress/compose';

export default function Edit() {
	const select2Ref = useRefEffect( ( element ) => {
		$( element ).select2( {
			dropdownParent: $( element ).parent(),
			width: '100%',
		} );

		return () => {
			$( element ).select2( 'destroy' );
		};
	}, [] );

	const validationFormRef = useRefEffect( ( element ) => {
		$( element ).validate( {
			rules: {
				username: { required: true, minlength: 5 },
			},
		} );

		return () => {
			$( element ).validate( 'destroy' );
		};
	}, [] );

	return (
		<div { ...useBlockProps() }>
			<h2>Select2</h2>
			<select className="select2" ref={ select2Ref }>
				<option value="apple">Apple</option>
				<option value="banana">Banana</option>
				<option value="cherry">Cherry</option>
			</select>
			<h2>jQuery Validation</h2>
			<form
				ref={ validationFormRef }
				onSubmit={ ( e ) => {
					e.preventDefault();
					window.alert( 'Form submitted' );
				} }
			>
				<input type="text" name="username" autoComplete="off" />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
