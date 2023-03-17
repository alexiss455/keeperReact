import React from "react";

export default function footer() {
  const date = new Date();
  return (
    <footer>
      <div className="containers">
        <div className="foot">Copyright {date.getFullYear()}</div>
      </div>
    </footer>
  );
}
