const data = [
  {
    name: 'Free To Me',
    image: 'img/movie.png',
    site: "https://crystajeffcoat.github.io/MovieFinder/",
    git: "https://github.com/CrystaJeffcoat/MovieFinder.git"
  },
  {
    name: 'Todo Calendar',
    image: 'img/schedule.png',
    site: "https://crystajeffcoat.github.io/Schedule-Calendar-Todo-List/",
    git: "https://github.com/CrystaJeffcoat/Schedule-Calendar-Todo-List.git"
  },
  {
    name: 'Weather Dashboard',
    image: 'img/weather.png',
    site: "https://crystajeffcoat.github.io/Weather-Dashboard/",
    git: "https://github.com/CrystaJeffcoat/Weather-Dashboard.git"
  },
  {
    name: 'Chart Master',
    image: 'img/chartMaster.png',
    site: 'https://still-anchorage-95326.herokuapp.com/',
    git: 'https://github.com/blkmtnmouth/Chartmaster'
  },
  {
    name: 'Eat da Burger',
    image: 'img/burger.png',
    site: 'https://github.com/CrystaJeffcoat/Eat-da-burger',
    git: 'https://github.com/CrystaJeffcoat/Eat-da-burger'
  },
  {
    name: 'Notepad',
    image: 'img/notepad.png',
    site: 'https://intense-sea-80554.herokuapp.com/notes',
    git: 'https://github.com/CrystaJeffcoat/NotePad'
  }
];

function createEl(htmlString = "", className) {
  const el = document.createElement(htmlString);
  if (className) {
    el.setAttribute("class", className);
  }
  return el;
};

createCards(data);

function createCards(data) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  let lastRow;
  const row = createEl("div", "row row-flex");

  return data.forEach(function(image, index) {
    const col = createEl("div", "col m4");
    col.appendChild(createCard(image));
    if (index % 3 === 0) {
      row.appendChild(col);
      container.appendChild(row);
      lastRow = row;
    }

    return lastRow.appendChild(col);
  });
}


function createCard(image) {
  //const card = createEl("div", "card small");
  const imageContainer = createEl("div", "card card-flex");
  const img = createEl("img", 'card-image responsive-img z-depth-4');
  img.setAttribute("src", image.image);

  imageContainer.append(img);

  return imageContainer;
};

$(document).click(function () {
  console.log(event.target);
});

$(document).ready(function () {
  $('.carousel').carousel({
    onCycleTo: function (data) {
      projectTitle = data.children[1].innerText;
      changeProjectInfo(projectTitle);
    }
  });
});

$(document).ready(function () {
  $('.sidenav').sidenav();
});

function changeProjectInfo() {

  const projectInfoDivs = $("#project-info-div")[0].children;

  if (projectTitle == "Free to Me") {
    projectInfoDivs[0].children[0].setAttribute("href", projInfoArr.FreeToMe[0].site);
    projectInfoDivs[1].children[0].setAttribute("href", projInfoArr.FreeToMe[0].git);
  }
  else if (projectTitle == "To-Do Calendar") {
    projectInfoDivs[0].children[0].setAttribute("href", projInfoArr.toDoCalendar[0].site);
    projectInfoDivs[1].children[0].setAttribute("href", projInfoArr.toDoCalendar[0].git);
  }
  else if (projectTitle == "Weather Dashboard") {
    projectInfoDivs[0].children[0].setAttribute("href", projInfoArr.weatherDash[0].site);
    projectInfoDivs[1].children[0].setAttribute("href", projInfoArr.weatherDash[0].git);
  }
}