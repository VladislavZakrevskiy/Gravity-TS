import Canvas from '../components/Canvas'
import Settings from '../components/Settings'

const Game = () => {
    return (
        <div style={{display: 'grid', gridTemplate: "1fr / 1fr"}}>
            <Canvas/>
            <Settings/>
        </div>
    )
}

export default Game