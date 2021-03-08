import Router from "next/router"

export const redirect = ({ res, target, code = 302 }) => {
  if (res) {
    res.writeHead(code, { Location: target })
    res.end()
  } else {
    Router.replace(target)
  }
}
