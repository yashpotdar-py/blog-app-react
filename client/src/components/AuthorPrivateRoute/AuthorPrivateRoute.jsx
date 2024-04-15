import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthorPrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser && currentUser.isAuthor ? (
    <Outlet />
  ) : (
    <Navigate to={"/dashboard"} />
  );
}
