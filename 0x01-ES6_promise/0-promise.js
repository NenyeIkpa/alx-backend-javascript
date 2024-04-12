function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Resolve');
      resolve('https://www.google.com');
    }, 200);
  });
}
export default getResponseFromAPI;
