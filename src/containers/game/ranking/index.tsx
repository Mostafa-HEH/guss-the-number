import Table from "@/components/Table";
import "./ranking.scss";
import { useSelector } from "react-redux";
import { GameState } from "@/store/gameSlice";

const Ranking = () => {
  const { bots, currentPlayer } = useSelector(
    (state: { game: GameState }) => state.game
  );

  return (
    <div className="ranking">
      <Table
        header={["No.", "Name", "Score"]}
        data={
          [{ ...currentPlayer, name: "You" }, ...bots]
            ?.sort((a, b) => (b?.winningPoints ?? 0) - (a?.winningPoints ?? 0))
            ?.map((bot, idx) => [
              idx + 1,
              bot?.name,
              bot?.winningPoints,
            ]) as string[][]
        }
      />
    </div>
  );
};

export default Ranking;
