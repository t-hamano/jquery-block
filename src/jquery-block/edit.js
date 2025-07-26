import $ from "jquery";
import "select2";
import "jquery-validation";
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';

export default function Edit() {
	const select2Ref = useRef( null );
	const validationFormRef = useRef( null );

	useEffect( () => {
		if ( select2Ref.current ) {
			$( select2Ref.current ).select2( {
				dropdownParent: $( select2Ref.current ).parent(),
				width: '100%',
			} );
		}

		if ( validationFormRef.current ) {
			$( validationFormRef.current ).validate( {
				rules: {
					username: { required: true, minlength: 5 },
				},
			} );
		}

		return () => {
			if ( select2Ref.current ) {
				$( select2Ref.current ).select2( 'destroy' );
			}
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
			<form ref={ validationFormRef } onSubmit={ ( e ) => {
				e.preventDefault();
				window.alert( 'Form submitted' );
			} }>
				<input type="text" name="username" autoComplete="off" />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
