import React from "react";

export default function BadgeSkill(props) {
  const { data } = props;
  return (
    <React.Fragment>
      <div className="row">
        {data.map((item, key) => {
          return (
            <span className="badge text-bg-warning me-1 w-auto">{item}</span>
          );
        })}
      </div>
    </React.Fragment>
  );
}
