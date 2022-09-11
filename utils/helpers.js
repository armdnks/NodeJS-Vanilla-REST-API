const fs = require("fs")

function uniqueId() {
  function char6() {
    return Math.random().toString(16).slice(-6)
  }
  return char6() + char6() + char6() + char6()
}

function writeDataToFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", (err) => {
    if (err) throw err
  })
}

function getPostData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = ""
      req.on("data", (chunk) => (body += chunk.toString()))
      req.on("end", () => resolve(body))
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = { uniqueId, writeDataToFile, getPostData }
