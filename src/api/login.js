import $http from "./http";

export function userRegister(data) {
  return $http({
    url: "/api/user/register",
    method: "post",
    data,
  });
}

export function userLogin(data) {
  return $http({
    url: "/api/auth/login",
    method: "post",
    data,
  });
}
