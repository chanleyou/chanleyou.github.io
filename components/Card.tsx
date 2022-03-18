import React from "react";

export default function Card({
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="card">{children}</div>;
}
