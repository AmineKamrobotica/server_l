//var re = [];
//function interception(tab, tab2) {
/* for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab2.length; j++) {
      if (tab[i] == tab2[j]) {
        re.push(tab[i]);
      }
    }
  } */
/* tab.map((el) =>
    tab2.map((e) => {
      if (el == e) {
        re.push(el);
      }
    })
  ); */
//re = tab.filter((el) => tab2.includes(el));
//}
//interception([1, 2, 3, 4, 5], [2, 5]);
//console.log(re);
/* console.log("hello");
setTimeout(() => {
  console.log("word");
}, 0);
console.log("test");

var obj = {
  name: "tes",
  func() {
    return "pst";
  },
};
console.log(obj.func());
console.log(obj.func);
console.log(obj.func);

const str = "amine";
console.log(obj); */
var elAll = document.querySelectorAll("#content").forEach((e) => {
  /* e.addEventListener("click", () => {
    console.log(e.textContent);
  }); */
});
var el = document.querySelectorAll("span#content");
console.log(el);
