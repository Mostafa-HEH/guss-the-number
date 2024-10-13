import Table from "@/components/Table";
import "./ranking.scss";

const Ranking = () => {
  return (
    <div className="ranking">
      <Table
        header={["No.", "Name", "Score"]}
        data={[
          ["1", "-", "-"],
          ["2", "-", "-"],
          ["3", "-", "-"],
          ["4", "-", "-"],
          ["5", "-", "-"],
        ]}
      />
    </div>
  );
};

export default Ranking;
