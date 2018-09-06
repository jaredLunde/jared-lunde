import TypeButton from './TypeButton'
import {Spinner} from '@jaredlunde/curls-addons'


export default function SpinnerButton ({
  children,
  spinnerSize,
  bg,
  typeColor,
  spinnerColor,
  status,
  outline,
  ...props
}) {
  spinnerColor = spinnerColor
    ? spinnerColor
    : typeColor
      ? typeColor
      : outline
        ? (bg || 'primary')
        : 'white'

  const buttonProps = {
    typeColor,
    outline,
    ...props,
    children: status === 'loading'
      ? Spinner({size: spinnerSize || 16, color: spinnerColor})
      : children
  }

  if (bg) {
    buttonProps.bg = bg
  }

  return  TypeButton(buttonProps)
}
