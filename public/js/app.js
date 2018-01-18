window.onload = function () {
  // console.log('sanity check')

  // Create Header
  let headerBox = document.createElement('div');
  headerBox.className = 'header';
  document.body.appendChild(headerBox);

  // Create Nav Bar
  let navBox = document.createElement('div');
  navBox.className = 'topnav';
  document.body.appendChild(navBox);

  // Create Random Link
  let randomBox = document.createElement('a');
  randomBox.href = '#';
  randomBox.innerHTML = 'RANDOM';
  navBox.appendChild(randomBox);

  // Create My Boards Link
  let myBoardBox = document.createElement('a');
  myBoardBox.href = '#';
  myBoardBox.innerHTML = 'MY BOARDS';
  navBox.appendChild(myBoardBox);

  // Create Get the App Link
  let getAppBox = document.createElement('a');
  getAppBox.href = '#';
  getAppBox.innerHTML = 'GET THE APP';
  navBox.appendChild(getAppBox);

  // Create main box
  let mainBox = document.createElement('div');
  mainBox.id = 'main';
  // mainBox.innerHTML = ''; //drop first then create new content
  document.body.appendChild(mainBox);

  // Create Container Box
  let containerBox = document.createElement('div');
  containerBox.className = 'container';
  mainBox.appendChild(containerBox);

  // Create Footer + insert FB/Insta logos
  let footerBox = document.createElement('div');
  footerBox.className = 'footer';
  // footerBox.innerHTML = 'Feet!';
  document.body.appendChild(footerBox);

  let fbBox = document.createElement('div');
  fbBox.className = 'fb';
  footerBox.appendChild(fbBox);

  let instaBox = document.createElement('div');
  instaBox.className = 'insta';
  footerBox.appendChild(instaBox);

  // Begin pulling data from Reddit and filling in cardBoxes
  let getMain = document.getElementsByClassName('container');

  function getReddit(url) {
    let nReq = new XMLHttpRequest();
    nReq.addEventListener("load", function () {
      let fetched = JSON.parse(this.response);
      defaultFeed(fetched, getMain);
    })
    nReq.open("GET", url);
    nReq.send();
  }


  // Create Cat feed
  // let catReq = new XMLHttpRequest();
  // catReq.addEventListener('load', defaultFeed);
  // catReq.open('GET', 'https://www.reddit.com/r/cats.json');
  // catReq.send();

  function defaultFeed(fetched, parentElem) {
    let array = fetched.data.children;

    let collectionBox = document.createElement('div');
    collectionBox.id = 'collection';
    containerBox.appendChild(collectionBox);

    array.forEach(function (element) {

      let cardBox = document.createElement('div');
      cardBox.className = 'card';
      // containerBox.appendChild(cardBox);

      let imageBox = document.createElement('img');
      imageBox.className = 'imgcats';
      cardBox.appendChild(imageBox);
      imageBox.onerror = function () {
        imageBox.src = 'https://www.sciencedaily.com/images/2017/08/170809142044_1_540x360.jpg';
      }
      imageBox.src = element.data.url;
      // console.log(element.data.thumbnail);

      let titleBox = document.createElement('div');
      titleBox.className = 'title';
      titleBox.innerText = element.data.title;
      cardBox.appendChild(titleBox);

      let taglineBox = document.createElement('div');
      taglineBox.className = 'tagline';
      cardBox.appendChild(taglineBox);

      let authorBox = document.createElement('div');
      authorBox.className = 'author';
      authorBox.innerText = 'by ' + element.data.author;
      taglineBox.appendChild(authorBox);

      let scoreBox = document.createElement('div');
      scoreBox.className = 'score';
      scoreBox.innerText = 'Score: ' + element.data.score;
      taglineBox.appendChild(scoreBox);

      let timeBox = document.createElement('div');
      timeBox.className = 'time';
      timeBox.innerText = 'WHAT TIME IS IT?';
      taglineBox.appendChild(timeBox);

      collectionBox.appendChild(cardBox);
    })
    parentElem.appendChild(collectionBox);

  }

  getReddit('https://www.reddit.com/r/cats.json');

}