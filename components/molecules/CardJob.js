import React from "react";
import BadgeSkill from "../atoms/BadgeSkill";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
export default function CardJob(props) {
  const { data } = props;
  console.log(data[0]?.["user.fullname"][0]);
  return (
    <React.Fragment>
      <div className="row">
        {data.map((item, key) => {
          return (
            <div className="col-3 mb-3">
              <Link href={`/jobs/detail/${item.id}`}>
                <div className="card" style={{ height: "250px" }}>
                  <div className="card-body">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Avatar sx={{ bgcolor: deepPurple[500] }}>
                        {item["user.fullname"][0].toUpperCase()}
                      </Avatar>
                      <h5 style={{ color: "#1F2A36", marginLeft: "5px" }}>
                        {item["user.fullname"]}
                      </h5>
                    </div>
                    <p style={{ fontSize: "small", color: "#9EA0A5" }}>
                      {item.job}
                    </p>
                    <p style={{ fontSize: "small", color: "#9EA0A5" }}>
                      {item.domicile}
                    </p>
                    <div style={{ padding: "10px" }}>
                      <BadgeSkill data={item.skills} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
