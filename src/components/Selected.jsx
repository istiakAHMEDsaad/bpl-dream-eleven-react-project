import PropTypes from 'prop-types';
import SelectedPlayers from './SelectedPlayers';


const Selected = ({selectedPlayers, handleDelete, coins, handleMorePlayer}) => {
  

  return (
    
    <div>
      <div>
      {selectedPlayers.map((player, idx) => <SelectedPlayers key={idx} player={player} handleDelete={handleDelete} coins={coins}></SelectedPlayers>)}
      </div>
      <div>
        <button onClick={() => handleMorePlayer('selected')} className='border border-blue-900 text-base font-bold px-5 py-3 rounded-xl bg-[#E7FE29] hover:bg-yellow-200 transition-all'>Add More Player</button>
      </div>
    </div>
  );
};

Selected.propTypes = {
  selectedPlayers: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  coins: PropTypes.number.isRequired,
  handleMorePlayer: PropTypes.func.isRequired,
};


export default Selected;

