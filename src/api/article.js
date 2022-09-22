import $http from "./http";

export function publishArticle(data) {
  return $http({
    url: "/api/post",
    method: "post",
    data,
  });
}
