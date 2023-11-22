const myPromise = new myPromise((resolve, reject)=>{
      if (true){
      setTimeout(() => {resolve ("I have succeeded");
    }, 20000);
}
   else{
    reject("didn't work out")
  }
});
    myPromise.then(value => console.log(value))

//     const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '44ce886db9mshd3af96ba10a36b9p1339bejsnf22fde949628',
// 		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }