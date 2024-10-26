import PropTypes from 'prop-types';
import Available from './Available';
import Selected from './Selected';

const Players = ({ handleIsActiveBtn, isActive, handleSetPlapyers, selectedPlayers, coins, handleDelete, handleMorePlayer  }) => {
  //   console.log(handleIsActiveBtn);

  //#E7FE29
  return (
    <main className='md:container mx-auto mt-10 mb-32'>
      {/* Toggle Button */}
      <div className='mb-4'>
        <div className='flex items-centern justify-between'>
          {/* <h2 className='lg:text-2xl text-xl font-bold'>Available Players</h2> */}
          {isActive.selected ? (
            <h2 className='lg:text-2xl text-xl font-bold'>Available Players</h2>
          ) : (
            <h2 className='lg:text-2xl text-xl font-bold'>Selected Player (<span>{selectedPlayers.length}</span>/6)</h2>
          )}
          {/* ---------- Button ---------- */}
          <div className='flex gap-x-4'>
            {/* btn - 1 */}
            <button
              onClick={() => handleIsActiveBtn('selected')}
              className={`${
                isActive.selected ? 'activeBtn' : ''
              } font-bold px-4  md:px-6 md:py-3 border rounded-md`}
            >
              Available
            </button>
            {/* btn - 2 */}
            <button
              onClick={() => handleIsActiveBtn('available')}
              className={`${
                isActive.selected ? '' : 'activeBtn'
              } font-bold px-4  md:px-6 md:py-3 border rounded-md flex md:flex-none items-center gap-x-2`}
            >
              Selected <span>{selectedPlayers.length}</span>
            </button>
          </div>
        </div>
      </div>

      <hr className='border-b-2 border-gray-300 mb-4' />

      {/* Render Available & Selected Components render */}
      <div>
        {isActive.selected ? <Available handleSetPlapyers={handleSetPlapyers} coins={coins} ></Available> : <Selected selectedPlayers={selectedPlayers} handleDelete={handleDelete} coins={coins} isActive={isActive} handleMorePlayer={handleMorePlayer}></Selected> }
      </div>
    </main>
  );
};

Players.propTypes = {
  handleIsActiveBtn: PropTypes.func.isRequired,
  isActive: PropTypes.object.isRequired,
  handleSetPlapyers: PropTypes.func.isRequired,
  selectedPlayers: PropTypes.object.isRequired,
  coins: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleMorePlayer: PropTypes.func.isRequired,
};

export default Players;
