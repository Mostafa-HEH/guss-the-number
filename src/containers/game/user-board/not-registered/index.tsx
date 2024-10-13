import { useState } from "react";

import Section from "@/components/Section";

import "./not-registered.scss";

const NotRegistered = () => {
  const [name, setName] = useState<string>("");

  return (
    <div className="not-registered">
      <Section>
        <h6 className="head">Welcome</h6>
        <form noValidate className="form">
          <span className="form-label">Please Insert Your Name</span>
          <input
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
