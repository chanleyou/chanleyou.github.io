import React from "react";
import { Card } from ".";

type Props = {
  title: string;
  company: string;
  startDate: Date;
  points: string[];
  endDate?: Date;
};

export default function Job({
  title,
  company,
  startDate,
  points,
  endDate,
}: Props) {
  return (
    <Card>
      <h1>{company}</h1>
      <h2>{title}</h2>
      <p>
        {startDate.toLocaleDateString()} -{" "}
        {endDate ? endDate.toLocaleDateString() : "Current"}
      </p>
      {points.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </Card>
  );
}
