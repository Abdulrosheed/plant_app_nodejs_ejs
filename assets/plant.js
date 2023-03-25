const ul = document.getElementById('ul-tag');
const dropDown = document.getElementById('dropdown-tag');

ul.addEventListener('click', (event) => {
    console.log("clicked" , event.target.tagName);
  if (event.target.tagName === 'A') {
    // Do something when an li element is clicked
    fetch(`/plant/getPlantbyLanguage?lang=${event.target.textContent}`)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log(res);
        insertData(res , event.target.textContent)
    })
    .catch(err => {
        console.log(err);
    })
  }
});

const insertData = (data , lang) =>{
    dropDown.innerHTML = "";
    Array.from(data.data).forEach(element => {
        const keys = Object.keys(element);
        const url = `/plants?id=${element[keys[0]]}&name=${element[keys[1]]}&lang=${lang}`;
        dropDown.innerHTML += `<li><a href="${url}">${element[keys[1]]}</a></li>`
    });
    console.log(dropDown)

}
