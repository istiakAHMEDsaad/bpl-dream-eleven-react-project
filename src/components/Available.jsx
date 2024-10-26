import { useEffect, useState } from 'react';
import AvailablePlayer from './AvailablePlayer';
import PropTypes from 'prop-types';

const Available = ({handleSetPlapyers, coins}) => {
  //TODO1: Fetch data
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('players_data.json')
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error(error));
  }, []);


  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {players.map((player) => (
          <AvailablePlayer
            key={player.playerId}
            player={player}
            handleSetPlapyers={handleSetPlapyers}
            coins={coins}
          ></AvailablePlayer>
        ))}
      </div>
    </div>
  );
};

Available.propTypes = {
  handleSetPlapyers: PropTypes.func.isRequired,
  coins: PropTypes.number.isRequired,
};


export default Available;
