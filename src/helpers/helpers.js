export const getLang = () => {
  if (navigator.languages != undefined) return navigator.languages[0];
  return navigator.language;
};

export const getCurrencyRate = (base, target, amount, callback) => {
  var requestURL = `https://api.exchangerate.host/latest?base=${base}&symbols=${target}&amount=${amount}&places=2`;
  var request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();

  request.onload = function () {
    var response = request.response;
    callback(response);
  };
};
