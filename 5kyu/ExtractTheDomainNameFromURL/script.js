function domainName(url) {
  if (url.includes("//")) {
    const start = url.split("//")[1];
    if (start.includes("www")) {
      const start = url.split("www.")[1];
      return start.split(".")[0];
    } else {
      return start.split(".")[0];
    }
  }
  if (url.includes("www")) {
    const start = url.split("www.")[1];
    return start.split(".")[0];
  } else return url.split(".")[0];
}

console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites");
console.log(domainName("https://www.cnet.com"), "cnet");
