/* eslint no-console: ["error", { allow: ["log"] }] */
module.exports = (...e) => {
  if (e.length === 1) {
    console.log(e[0])
    return
  }

  console.log(e)
}
