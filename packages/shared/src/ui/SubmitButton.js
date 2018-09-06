import SpinnerButton from './SpinnerButton'
import TypeButton from './TypeButton'


export default function SubmitButton (props) {
  return SpinnerButton({type: 'submit', ...props, children: props.children || 'Save'})
}
