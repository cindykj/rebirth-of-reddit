window.onload = function () {

  // Create Container Box
  const mainBox = document.getElementById('main');

  // Begin pulling data from Reddit and filling in cardBoxes
  function getReddit(url) {
    let nReq = new XMLHttpRequest();
    mainBox.innerHTML = '';
    nReq.addEventListener("load", function () {
      let fetched = JSON.parse(this.response);
      defaultFeed(fetched, mainBox);
    })
    nReq.open("GET", url);
    nReq.send();
  }

  // Build nav
  const topnav = document.getElementById('topnav');

  let catsStand = document.createElement('a');
  catsStand.id = 'catsStand';
  catsStand.innerHTML = 'CatsStandingUp';
  // catsStand.href = '#';
  catsStand.addEventListener('click', function () {
    getReddit('https://www.reddit.com/r/CatsStandingUp.json')
  });
  topnav.appendChild(catsStand);

  let catsAss = document.createElement('a');
  catsAss.id = 'catsAss';
  catsAss.innerHTML = 'CatsAreAssholes';
  // catsAss.href = '#';
  catsAss.addEventListener('click', function () {
    getReddit('https://www.reddit.com/r/CatsAreAssholes.json');
  })
  topnav.appendChild(catsAss);

  let catsGlass = document.createElement('a');
  catsGlass.id = 'catsGlass';
  catsGlass.innerHTML = 'CatsOnGlass';
  // catsGlass.href = '#';
  catsGlass.addEventListener('click', function () {
    getReddit('https://www.reddit.com/r/catsonglass.json');
  })
  topnav.appendChild(catsGlass);


  function defaultFeed(fetched, parentElem) {
    let array = fetched.data.children;

    let containerBox = document.createElement('div');
    containerBox.id = 'container';

    array.forEach(function (element) {

      let cardBox = document.createElement('div');
      cardBox.className = 'card';

      let imageBox = document.createElement('img');
      imageBox.className = 'imgcats';
      cardBox.appendChild(imageBox);
      imageBox.onerror = function () {
        imageBox.src = 'https://www.sciencedaily.com/images/2017/08/170809142044_1_540x360.jpg';
      }
      imageBox.src = element.data.url;

      let titleBox = document.createElement('div');
      titleBox.className = 'title';
      titleBox.innerText = element.data.title;
      cardBox.appendChild(titleBox);

      let taglineBox = document.createElement('div');
      taglineBox.className = 'tagline';
      cardBox.appendChild(taglineBox);

      let authorBox = document.createElement('li');
      authorBox.className = 'author';
      authorBox.innerText = 'by ' + element.data.author;
      taglineBox.appendChild(authorBox);

      let scoreBox = document.createElement('li');
      scoreBox.className = 'score';
      scoreBox.innerText = 'Score: ' + element.data.score;
      taglineBox.appendChild(scoreBox);

      let timeBox = document.createElement('li');
      timeBox.className = 'time';
      timeBox.innerText = 'updated ';
      taglineBox.appendChild(timeBox);

      containerBox.appendChild(cardBox);
    })
    parentElem.appendChild(containerBox);

  }

  
  getReddit('https://www.reddit.com/r/cats.json');
}


/* adding moment timestamp
let formatTimeStamp = moment.unix(element.data.created_utc)
moment(timestamp).fromNow() */