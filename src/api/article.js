import $http from "./http";

export function publishArticle(data) {
  return $http({
    url: "/api/post",
    method: "post",
    data,
  });
}

export function getArticleList(pageSize, pageNum) {
  let _url = `/api/post/list?pageSize=${pageSize}&pageNum=${pageNum}`;
  return $http({
    url: _url,
    method: "get",
  });
}
