import { useEffect, useState } from 'react';
import './App.css';
const _ = require('lodash');

class Team {
  name = '';
  played = 0;
  won = 0;
  drawn = 0;
  lost = 0;
  point = 0;

  constructor(nameTeam) {
    this.name = nameTeam;
  }

  addPlayed() {
    this.played += 1;
  }

  // updatedMatchResults(result) {
  //   switch (result) {
  //     case won:
  //       this.won += 1;
  //       this.point += 3;
  //       break;
  //     case lost:
  //       this.lost += 1;
  //       break;
  //     case drawn:
  //       this.drawn += 1;
  //       this.point += 1;
  //       break;
  //     default:
  //       break;
  //   }
  // }
}

//Fetch Clubs
const fetchClubsData = async () => {
  let resClubs = await fetch('/en.1.clubs.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  resClubs = await resClubs.json();
  resClubs = resClubs.clubs;

  return resClubs;
};

//Fetch Rounds
const fetchRoundsData = async () => {
  let resRounds = await fetch('/en.1.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  resRounds = await resRounds.json();
  resRounds = resRounds.rounds;

  const reduceResRounds;

  return resRounds;
};

//Updated Match Results
// const updatedMatchResults = (newMatchResults, resRounds) => {
//   let matchResults = { ...newMatchResults };
//   _.forEach(resRounds, (round) => {
//     _.forEach(round.matches, (match) => {
//       if (match.score.ft[0] > match.score.ft[1]) {
//         matchResults[match.team1].updatedMatchResults('won');
//         matchResults[match.team2].updatedMatchResults('lost');
//       }
//       if (match.score.ft[0] < match.score.ft[1]) {
//         matchResults[match.team1].updatedMatchResults('lost');
//         matchResults[match.team2].updatedMatchResults('won');
//       }
//       if (match.score.ft[0] === match.score.ft[1]) {
//         matchResults[match.team1].updatedMatchResults('drawn');
//         matchResults[match.team2].updatedMatchResults('drawn');
//       }
//     });
//   });

//   return matchResults;
// };

//Sort Match Results By Points and Change Object to Array
const sortRankForEachClub = (matchResults) => {
  const sortPointsByDesc = _.sortBy(matchResults, 'point').reverse();
  return sortPointsByDesc;
};

function App() {
  const [clubs, setClubs] = useState([]);
  const [rounds, setRounds] = useState([]);
  const [sumClubs, setSumClubs] = useState([]);

  useEffect(async () => {
    const fetchClubs = await fetchClubsData();
    const fetchRounds = await fetchRoundsData();
    console.log(fetchRounds);
    // let matchResults = fetchClubs.map((item) => new Team(item.name));
    // const matchResults = updatedMatchResults(newMatchResults, fetchRounds);
    // const rankClubs = sortRankForEachClub(matchResults);

    setClubs(fetchClubs);
    setRounds(fetchRounds);
    // setSumClubs(rankClubs);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h2>Premier League 2017/18</h2>

        <table className="table container">
          <thead>
            <tr>
              <th colSpan="2">Club</th>
              <th>Played</th>
              <th>Won</th>
              <th>Drawn</th>
              <th>Lost</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {/* {sumClubs.map((club, i) => (
              <tr key={club.name}>
                <td>{i + 1}</td>
                <td>{club.name}</td>
                <td>{club.played}</td>
                <td>{club.won}</td>
                <td>{club.drawn}</td>
                <td>{club.lost}</td>
                <td>{club.point}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
