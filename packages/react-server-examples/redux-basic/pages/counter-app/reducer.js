//TODO: make this a counter-specific reducer

export default function counter(state = {count: 13}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1}
    case 'DECREMENT':
      return {count: state.count - 1}
    case 'INIT':
      return action.val
    default:
      return state
  }
}
