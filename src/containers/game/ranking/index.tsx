import "./ranking.scss";

const Ranking = () => {
  return (
    <div className="ranking">
      <table>
        <tr>
          <th>Name</th>
          <th>Point</th>
          <th>Multiplier</th>
        </tr>
        <tr>
          <td>You</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>CPU 1</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>CPU 2</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>CPU 3</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>CPU 4</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  );
};

export default Ranking;
