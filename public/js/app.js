window.onload = function() {
  // console.log('sanity check')
  
  // Create Header and insert logo
  let headerBox = document.createElement('div');
  headerBox.className = 'header';
  document.body.appendChild(headerBox);

  let logoBox = document.createElement('IMG');
  logoBox.setAttribute('src','../assets/logo.svg');
  headerBox.appendChild(logoBox);

  // Create Nav Bar
  let navBox = document.createElement('div');
  navBox.className = 'topnav';
  document.body.appendChild(navBox);

  // Create Random Link
  let randomBox = document.createElement('a');
  randomBox.href = '#';
  randomBox.innerHTML = 'Random';
  navBox.appendChild(randomBox);

  // Create My Boards Link
  let myBoardBox = document.createElement('a');
  myBoardBox.href = '#';
  myBoardBox.innerHTML = 'My Boards';
  navBox.appendChild(myBoardBox);
  
  // Create Get the App Link
  let getAppBox = document. createElement('a');
  getAppBox.href = '#';
  getAppBox.innerHTML = 'Get the App';
  navBox.appendChild(getAppBox);

  // Create main container
  let mainBox = document.createElement('div');
  mainBox.idName = 'main';
  document.body.appendChild(mainBox);
  
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

// Create Cat feed
  let catReq = new XMLHttpRequest();
  catReq.addEventListener('load', catListener);
  catReq.open('GET', 'https://www.reddit.com/r/cats.json');
  catReq.send();

  function catListener () {
    console.log(this.response);
    let fetch = JSON.parse(this.response);
    let array = fetch.data.children;

    array.forEach(function (element, index, array) {

      let containerBox = document.createElement('div');
      containerBox.className = 'container';
      mainBox.appendChild(containerBox);

      let titleBox = document.createElement('div');
      titleBox.className = 'title';
      titleBox.innerText = element.data.title;
      containerBox.appendChild(titleBox);
      
      let imageBox = document.createElement('img');
      imageBox.className = 'imgSub1';
      containerBox.appendChild(imageBox);
      imageBox.onerror = function () {
        imageBox.src = 'https://www.sciencedaily.com/images/2017/08/170809142044_1_540x360.jpg';
      }
      imageBox.src = element.data.thumbnail;
      // console.log(element.data.thumbnail);

      let taglineBox = document.createElement('div');
      taglineBox.className = 'tagline';
      containerBox.appendChild(taglineBox);

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
    })




  }
  
  // let surfReq = new XMLHttpRequest();
  // surfReq.addEventListener('load', surfListener);
  // surfReq.open('GET', 'https://www.reddit.com/r/food/.json');
  // surfReq.send();

  // let topNavSection = document.createElement('div');
  // topNavSection.idName = 'topnav';
  // document.body.appendChild(topNavSection);

  // let foodSection = document.createElement('li');
  // foodSection.className = 'nav';
  // foodSection.innerHTML = 'Food'
  // topNavSection.appendChild(foodSection);

  // let catSection = document.createElement('li');
  // catSection.className = 'nav';
  // catSection.innerHTML = 'Cats'
  // topNavSection.appendChild(catSection);

  
}
