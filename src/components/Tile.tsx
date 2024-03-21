type Props = {
  icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop'
  title: string
  info: string | JSX.Element
  description: string
}

const Tile = ({ icon, title, info, description }): JSX.Element => {
  return (
    <div>
      <p> Tile</p>
    </div>
  )
}
export default Tile
