import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

export function GetUser() {
  useEffect(() => {
    const url = "http://localhost:3000/api/users/myprofile/";
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);

    const userId = decoded.userId;

    fetch(url + userId, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "BEARER " + token,
      },
    }).then((response) => {
      return response
        .json()
        .then((data) => {
          DisplayUser(data);
          return data;
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
}

export function DisplayUser(data) {
  const space = " ";
  const User = data.firstName + space + data.lastName;

  const firstLetter = data.firstName.substring(0, 1);
  const secondLetter = data.lastName.substring(0, 1);


  localStorage.setItem("UserName", User);
  localStorage.setItem("UserInitials", firstLetter + secondLetter);
  
}

export function getUserId() {
  let dataUser = JSON.parse(sessionStorage.getItem("token"));
  console.log("userId" + dataUser);
  return dataUser.userId;
}
