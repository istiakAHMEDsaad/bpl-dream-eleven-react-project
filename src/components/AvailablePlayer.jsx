import PropTypes from 'prop-types';
import { FaUserLarge } from 'react-icons/fa6';
import { FaFlag } from 'react-icons/fa6';

const AvailablePlayer = ({ player, handleSetPlapyers, coins }) => {
  const {
    playerId,
    name,
    country,
    image,
    role,
    batting_type,
    bowling_type,
    bidding_price,
  } = player;
  return (
    <div className='border rounded-md space-y-4 py-4 shadow-md'>
      {/* Image */}
      <div>
        <img
          className='w-96 h-96 object-contain mx-auto'
          src={image}
          alt={`image ${playerId}`}
        />
      </div>
      {/* Text Content */}
      <div className='px-5 space-y-1'>
        {/* Name */}
        <div className='flex items-center text-xl font-bold space-x-3'>
          <FaUserLarge></FaUserLarge> <span>{name}</span>
        </div>
        {/* nationality & role */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center text-gray-400 space-x-2'>
            <FaFlag></FaFlag> <span>{country}</span>
          </div>
          <p className='text-sm border px-4 py-1 rounded-lg bg-gray-300'>{role}</p>
        </div>
        {/* horizontal bar */}
        <hr className='border-b border-gray-200' />
        {/* Rating */}
        <h2 className='text-lg font-bold'>Rating</h2>
        {/* Left or Right Handed */}
        <div className='flex items-center justify-between font-semibold'>
          <div>
            {batting_type ? (
              <p>{batting_type}</p>
            ) : bowling_type ? (
              <p>{bowling_type}</p>
            ) : (
              ''
            )}
          </div>
          <div>
            {batting_type ? (
              <p>{batting_type}</p>
            ) : bowling_type ? (
              <p>{bowling_type}</p>
            ) : (
              ''
            )}
          </div>
        </div>
        {/* Price & Choose Player */}
        <div className='flex items-center justify-between font-semibold'>
          <p>Price: ${bidding_price}</p>
          <button onClick={() => handleSetPlapyers(player, coins, bidding_price)} className='border px-4 py-2 rounded-lg hover:bg-gray-300 transition-all'>Choose Player</button>
        </div>
      </div>
    </div>
  );
};

AvailablePlayer.propTypes = {
  player: PropTypes.object.isRequired,
  handleSetPlapyers: PropTypes.func.isRequired,
  coins: PropTypes.number.isRequired,
};

export default AvailablePlayer;
