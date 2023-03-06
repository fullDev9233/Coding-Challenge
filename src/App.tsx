import { useQuery } from '@apollo/client'
import { tokensQuery } from './gql/tokensQuery'

const App = () => {
  const { loading, data } = useQuery(tokensQuery)

  console.log(data)

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
