let count = 0;
const counthead = document.getElementById("count");
const countzero = document.getElementById("zero");
const countadd = document.getElementById("plus");
const countmoins = document.getElementById("moins");

counthead.innerText = count;

countadd.addEventListener("click", () =>  {
count++;
counthead.innerText = count;
});

countmoins.addEventListener("click", () =>  {
count--;
counthead.innerText = count;
});

countzero.addEventListener("click", () =>  {
    count = 0;
    counthead.innerText = "Compte réunitialiser à " + count;
    });