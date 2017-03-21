/* Object destructuring */

var name = this.props.name
var value = this.props.value
// vs
const { name, value } = this.props

/* Array destructing */

var first = array[0]
var second = array[1]
// vs
const [first, second] = array
