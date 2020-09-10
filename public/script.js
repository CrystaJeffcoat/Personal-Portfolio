const collapseEl = $(".content-wrap");
const collapseBody = $(".collapsible-body");

const projInfoArr = {
  FreeToMe: [
    {
      site: "https://crystajeffcoat.github.io/MovieFinder/",
      git: "https://github.com/CrystaJeffcoat/MovieFinder.git"
    }
  ],
  toDoCalendar: [
    {
      site: "https://crystajeffcoat.github.io/Schedule-Calendar-Todo-List/",
      git: "https://github.com/CrystaJeffcoat/Schedule-Calendar-Todo-List.git"
    }
  ],
  weatherDash: [
    {
      site: "https://crystajeffcoat.github.io/Weather-Dashboard/",
      git: "https://github.com/CrystaJeffcoat/Weather-Dashboard.git"
    }
  ],
  ChartMaster: [
    {
      site: 'https://still-anchorage-95326.herokuapp.com/',
      git: 'https://github.com/blkmtnmouth/Chartmaster'
    }
  ]
};

console.log(projInfoArr.FreeToMe.site)

$(document).ready(function () {
  collapseEl.hover(function () {
    collapseBody.stop().slideDown("slow");
  }, function () {
    collapseBody.stop().slideUp("slow");
  });
});

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