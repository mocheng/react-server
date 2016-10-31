export default function counter(state = 13, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'INIT':
      return action.val
    default:
      return state
  }
}
