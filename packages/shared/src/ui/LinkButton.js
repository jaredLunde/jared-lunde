import {withRouter} from 'react-router-dom'
import memoize from 'memoize-two-args'
import TypeButton from './TypeButton'


// necessary for keeping TypeButton purity
const getOnClick = memoize(
  function (to, push) {
    return () => push(to)
  },
  Map
)


export default withRouter(
  function LinkButton ({to, history, staticContext, match, location, ...props}) {
    props.onClick = getOnClick(to, history.push)
    return  TypeButton(props)
  }
)
