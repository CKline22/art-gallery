import {useState, useEffect} from 'react'
import Gallery from './Gallery'

function App() {
  {/* state variables here... */}
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  useEffect(()=> {
    document.title = 'Welcome to ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])
  {/* return jsx down here... */}
  <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />

}

export default App;
