
import React from "react";
export function Card({ children }) {
  return <div className="bg-white shadow rounded-2xl p-6 max-w-md mx-auto">{children}</div>;
}
export function CardContent({ children }) {
  return <div>{children}</div>;
}
