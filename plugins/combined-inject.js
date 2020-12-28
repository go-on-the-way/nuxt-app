export default ({ app, error }, inject) => {
  inject('myError', (string) => {
    /* eslint-disable */
    console.log(string)
  })
}
