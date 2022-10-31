// console.log(1);

// setTimeout(()=>{
// console.log(2);
// },2000)

// console.log(3);

// then - resolve ucun
// catch - reject
// const promis = new Promise( (resolve,reject)=>{
//     resolve('data geldi');
//     // reject('data gelmedi');
// } );

// promis
// .then((value)=>{
// console.log(value);
// })
// .catch((err)=>{
// console.log(err);
// })
// .finally(()=>{
//     console.log('hemise isle');
// })

// function GetUser(id) {
//   console.log(`${id} - idli useri al`);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ user_name: "Arif" });
//     }, 2000);
//   });
// }

// function GetKurs(userName) {
//   console.log(`${userName} - adli userin kurslarini`);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(["js", "php", "node js"]);
//     }, 2000);
//   });
// }

// function GetYorum(kurs_adi) {
//   console.log(`${kurs_adi} - adli kursa gelen ilk yorumu al`);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("kurs bomba idi");
//     }, 2000);
//   });
// }

// GetUser(1)
//   .then((user) => {
//     GetKurs(user.user_name)
//       .then((kurs) => {
//         GetYorum(kurs[1])
//           .then((yorum) => {
//             console.log(yorum);
//           })
//           .catch((err) => console.log(err));
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

// async function yorumuGoster() {
// try{
//     const user = await GetUser(1);
//     const kurs = await GetKurs(user.user_name);
//     const yorum = await GetYorum(kurs[1]);
//     console.log(yorum);
// }catch(err){
//     console.log(err);
// }
// }

// yorumuGoster();

let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  fetch("test.json").then((response) =>
    response.json().then((value) => console.log(value))
  );

  // let f = fetch('text.txt');

  // f.then(response=>{
  //  let r = response.text();
  //  r.then(value=>{
  //   console.log(value);
  //  })
  // })
});



btn.addEventListener("click",async(response)=>{
 const f= fetch("test.json")
   const promis=await response
  //  const text=await promis.json()
   
   console.log(promis);
})

