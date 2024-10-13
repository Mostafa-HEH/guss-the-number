import { useDispatch } from "react-redux";
import { useState } from "react";

import Section from "@/components/Section";

import { addPlayer } from "@/store/gameSlice";

import "./not-registered.scss";

const NotRegistered = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(addPlayer({ name: name, points: 50 }));
    setName("");
  };

  return (
    <div className="not-registered">
      <Section>
        <h6 className="head">Welcome</h6>
        <form noValidate className="form" onSubmit={handleSubmit}>
          <span className="form-label">Please Insert Your Name</span>
          <input
            value={name}
            placeholder="Enter your name"
            className="form-textfield"
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn btn-primary" disabled={name?.length <= 3}>
            Accept
          </button>
        </form>
      </Section>
    </div>
  );
};

export default NotRegistered;
