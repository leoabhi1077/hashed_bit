import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [teams, setTeams] = useState([]);

  const qualifiedTeams = [
    "Gujarat Titans",
    "Rajasthan Royals",
    "Lucknow Super Giants",
    "Royal Challengers Bangalore"
  ];

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((response) => response.json())
      .then((data) => {
        // for sorting NRR in ascending order
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      });
  }, []);

  return (
    <div className="container">
      <h2>IPL Season 2022 Points Table</h2>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
{teams.map((team, index) => (
  <tr key={team.No}>
    <td>{index + 1}</td>

    <td>
      {team.Team}
      {qualifiedTeams.includes(team.Team) && (
        <span style={{ color: "green", fontWeight: "bold", marginLeft: "10px" }}>
          Q
        </span>
      )}
    </td>

    <td>{team.Matches}</td>
    <td>{team.Won}</td>
    <td>{team.Lost}</td>
    <td>{team.Tied}</td>
    <td>{team.NRR}</td>
    <td>{team.Points}</td>
  </tr>
))}


        </tbody>
      </table>
    </div>
  );
}

export default App;
