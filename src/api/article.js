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

export const upLoad = (formData) => {
  const url = "/api/file/upload";
  var configs = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  return $http.post(url, formData, configs);
};

export function getArticleDetail(id) {
  let _url = `/api/post?id=${id}`;
  return $http({
    url: _url,
    method: "get",
  });
}
