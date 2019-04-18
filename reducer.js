// let state = {count: 0}
 
// function reducer(state, action){
//   switch (action.type) {
//     case 'INCREASE_COUNT':
//       return {count: state.count + 1};
//     default:
//       return state;
//   }
// }

let state;
function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

let button = document.getElementById('button');
 
button.addEventListener('click', function(){
    dispatch({type: 'INCREASE_COUNT'})
})

function dispatch(action){
    state = reducer(state, action);
    render();
}

function render(){
    let container = document.getElementById('container');
    container.textContent = state.count;
}
dispatch({type: '@@INIT'})
