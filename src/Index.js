import ReactDOM from 'react-dom';

ReactDOM.render(<div>hello webpack5</div>, document.getElementById('root'));

console.log(document.getElementById('root'))

const a = () => {
  return 1
}

new Promise(() => {
  console.log(12312312321)
})

export default ({
  a: 111111
})