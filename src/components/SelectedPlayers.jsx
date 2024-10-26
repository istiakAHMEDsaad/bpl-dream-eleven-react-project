import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa6';

const SelectedPlayers = ({ player, handleDelete, coins }) => {
  const { name, image, role, playerId, bidding_price } = player;
  return (
    <div className='border md:py-8 py-4 shadow-md rounded-lg md:px-4 flex items-center justify-between'>
      <div className='flex items-center'>
        <div className='h-2w-24 w-24'>
          <img className='h-full w-full' src={image} alt={`image ${role}`} />
        </div>
        <div>
            <h2 className='text-xl font-bold'>{name}</h2>
            <p className='text-sm text-gray-500'>{role}</p>
        </div>
      </div>
      <button onClick={() => handleDelete(playerId, coins, bidding_price)} className='text-xl text-red-500 hover:text-red-400 transition-all'>
        <FaTrash></FaTrash>
      </button>
    </div>
  );
};

SelectedPlayers.PropTypes = {
    player: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    coins: PropTypes.number.isRequired,
};

export default SelectedPlayers;

