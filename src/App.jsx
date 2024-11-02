import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Players from './components/Players';
import Footers from './components/Footers';
import { Bounce, toast } from 'react-toastify';

function App() {
  //TODO1: For Toggle Button
  const [isActive, setIsActive] = useState({
    selected: true,
    status: 'selected',
  });

  const handleMorePlayer = (status) => {
    if (status === 'selected') {
      setIsActive({ selected: true, status: 'morePlayer' });
    }
  };

  //TODO2: Handle Button
  const handleIsActiveBtn = (status) => {
    if (status === 'selected') {
      setIsActive({
        selected: true,
        status: 'selected btn',
      });
    } else if (status !== 'selected') {
      setIsActive({
        selected: false,
        status: 'available btn',
      });
    }
  };

  //TODO3: Add coin
  const [coins, setCoins] = useState(0);

  const handleCoin = (coin) => {
    setCoins(coins + coin);
    toast.success('Credit added to your account', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  };

  //TODO4: Select Player
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleSetPlapyers = (player, coins, bidding_price) => {
    const money = parseInt(bidding_price);

    if (selectedPlayers.length < 6) {
      if (coins === 0 || coins < money) {
        setCoins(coins);

        toast.error('Not enough money', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      } else if (coins >= money) {
        const isExistPlayer = selectedPlayers.find(
          (maxPlayer) => maxPlayer.playerId === player.playerId
        );

        if (!isExistPlayer) {
          setCoins(coins - bidding_price);
          const newSetPlayers = [...selectedPlayers, player];
          setSelectedPlayers(newSetPlayers);
          toast.success('You successfully added a player!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
          });
        } else {
          toast.warn('You already selected this player', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
          });
        }
      }
    } else {
      toast.error('Maximum player 6!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    }
  };

  const handleDelete = (playerId, coins, bidding_price) => {
    const priceToInt = parseInt(bidding_price);
    setCoins(coins + priceToInt)
    // console.log(playerId);
    const removePlayer = selectedPlayers.filter(
      (rmv) => rmv.playerId != playerId
    );
    setSelectedPlayers(removePlayer);


    toast.warn('Successfully remove player!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  };

  return (
    <>
      <div>
        <Header coins={coins}></Header>
      </div>
      <div>
        <Banner handleCoin={handleCoin}></Banner>
      </div>
      <div>
        <Players
          handleIsActiveBtn={handleIsActiveBtn}
          isActive={isActive}
          handleSetPlapyers={handleSetPlapyers}
          selectedPlayers={selectedPlayers}
          coins={coins}
          handleDelete={handleDelete}
          handleMorePlayer={handleMorePlayer}
        ></Players>
      </div>
      <div>
        <Footers></Footers>
      </div>
    </>
  );
}

export default App;

/*
const money = parseInt(bidding_price);
    if(coins == 0){
      coins;
    }else{
      setCoins(coins - bidding_price);
    }

    // console.log(`coin: ${coins}, bidding: ${money}`);
    if (coins == 0 || coins < money) {
      toast.error('Not enough money', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });

      
    } else if (coins >= money) {
      const isExistPlayer = selectedPlayers.find(
        (maxPlayer) => maxPlayer.playerId === player.playerId
      );



      if (!isExistPlayer) {
        const newSetPlayers = [...selectedPlayers, player];
        setSelectedPlayers(newSetPlayers);
        toast.success('You successfully added a player!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });

      } else {
        toast.warn('You already selected this player', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      }

    }
*/
