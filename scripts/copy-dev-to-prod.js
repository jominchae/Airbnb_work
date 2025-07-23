// scripts/copy-dev-to-prod.js
const fs = require("fs");

const devFile = "index-dev.html";
const prodFile = "index.html";

// index-dev.html 내용 읽기
fs.readFile(devFile, "utf8", (err, data) => {
  if (err) {
    return console.error(`❌ ${devFile} 읽기 실패:`, err);
  }

  // "base" 태그 추가
  const baseTag = `<base href="https://jominchae.github.io/Airbnb_work/" />`;
  const updated = data.replace(/<!--\s*<base href=".*?"\s*\/>\s*-->/, baseTag);

  // index.html로 저장
  fs.writeFile(prodFile, updated, "utf8", (err) => {
    if (err) return console.error(`❌ ${prodFile} 쓰기 실패:`, err);
    console.log(`✅ ${prodFile}로 성공적으로 복사되었습니다.`);
  });
});
