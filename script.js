//You can edit ALL of the code here
const mainContainer = document.getElementById('main');
// const searchForm = document.getElementById('searchForm');
// const term = document.getElementById('inputSearch');
// const select = document.querySelector('.select');
//searchSelect.addEventListener('change', search);
//searchForm.addEventListener('submit', input);


function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
};

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;
const movie = episodeList.map(item =>{
 return `<div>
 <h3 class="epname">${item.name} - <span class="seanumber">${item.number}</span></h3>
 <h5 class="epnumber">${item.name}</h5>
 <h5 class="seaname">${item.number}</h5>
 <h6 class="epnumber">${item.id}</h6>
 <img class="epmedium" src='${item.image['medium']}' alt='${item.image}' />
 <p>${item.summary}</p>
</div>`
}).join('');
mainContainer.innerHTML = movie;
};

// const search = (items) =>{
//   const val = searchSelect.value;
//   const rem = items.map(st =>{
//     return`<select class="selectBtn" id="searchSelect">
//     <option value='${st.name}'>${st.name}</option>
//     </select>`
//   }).join('')
//   if(items.indexOf(val) === 0){
//     return items;
//   }
// select.innerHTML = rem;
// };
// const searchSelect = document.getElementById('searchSelect');


const list = async () =>{
  const URL = 'https://api.tvmaze.com/shows/82/episodes';
  let resp = await fetch(URL);
  let data = await resp.json();
 console.log(data); 
}

 window.onload = setup;
list();
window.onload = console.log(data);
