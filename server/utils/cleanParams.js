const cleanParams = (param) => {
  return param.replace(/ /g, '-')
}

module.exports = cleanParams