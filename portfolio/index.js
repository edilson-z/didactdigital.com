let contents = [];

const perspectiveOrigin = {
  x: parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspectiveOriginX"
    )
  ),
  y: parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspectiveOriginY"
    )
  ),
  maxGap: 10
};

document.addEventListener("DOMContentLoaded", function() {

  var contents = [
    // { 
    //   title: "Movie Name",
    //   release_date: "2015-10-23",
    //   director: "Edilson Zau",
    //   description: "Lorem ipsum dolor sit amet, consectetur adip ",
    //   image: "../images/image00001.jpeg",
    //   link: ""
    // }, 
    // { 
    //   title: "Movie Name",
    //   release_date: "2015-10-23",
    //   director: "Edilson Zau",
    //   description: "Lorem ipsum dolor sit amet, consectetur adip ",
    //   image: "../images/image00001.jpeg",
    //   link: ""
    // }, 
    // { 
    //   title: "Movie Name",
    //   release_date: "2015-10-23",
    //   director: "Edilson Zau",
    //   description: "Lorem ipsum dolor sit amet, consectetur adip ",
    //   image: "../images/Screenshot (216).png",
    //   link: ""
    // }, 
    { 
      title: "Movie Name",
      release_date: "2015-10-23",
      director: "Edilson Zau",
      description: "Lorem ipsum dolor sit amet, consectetur adip ",
      image: "../images/image00001.jpeg",
      link: ""
    }, 
    { 
      title: "Movie Name",
      release_date: "2015-10-23",
      director: "Edilson Zau",
      description: "Lorem ipsum dolor sit amet, consectetur adip ",
      image: "../images/image00003.jpeg",
      link: ""
    }, 
    { 
      title: "Movie Name",
      release_date: "2015-10-23",
      director: "Edilson Zau",
      description: "Lorem ipsum dolor sit amet, consectetur adip ",
      image: "../images/image00004.jpeg",
      link: ""
    }, 
    { 
      title: "Movie Name",
      release_date: "2015-10-23",
      director: "Edilson Zau",
      description: "Lorem ipsum dolor sit amet, consectetur adip ",
      image: "../images/image00005.jpeg",
      link: ""
    }, 
    { 
      title: "Movie Name",
      release_date: "2015-10-23",
      director: "Edilson Zau",
      description: "Lorem ipsum dolor sit amet, consectetur adip ",
      image: "../images/image00002.jpeg",
      link: ""
    }, 
    { 
      title: "Movie Name",
      release_date: "2015-10-23",
      director: "Edilson Zau",
      description: "Lorem ipsum dolor sit amet, consectetur adip ",
      image: "../images/image00006.jpeg",
      link: ""
    }, 
    { 
      title: "Movie Name",
      release_date: "2015-10-23",
      director: "Edilson Zau",
      description: "Lorem ipsum dolor sit amet, consectetur adip ",
      image: "../images/image00007.jpeg",
      link: ""
    }, 
    { 
      title: "Movie Name",
      release_date: "2015-10-23",
      director: "Edilson Zau",
      description: "Lorem ipsum dolor sit amet, consectetur adip ",
      image: "../images/image00008.jpeg",
      link: ""
    }, 
    { 
      title: "Movie Name",
      release_date: "2015-10-23",
      director: "Edilson Zau",
      description: "Lorem ipsum dolor sit amet, consectetur adip ",
      image: "../images/image00009.jpeg",
      link: ""
    }, 
    { 
      title: "Movie Name",
      release_date: "2015-10-23",
      director: "Edilson Zau",
      description: "Lorem ipsum dolor sit amet, consectetur adip ",
      image: "../images/image00010.jpeg",
      link: ""
    }, 
    { 
      title: "Movie Name",
      release_date: "2015-10-23",
      director: "Edilson Zau",
      description: "Lorem ipsum dolor sit amet, consectetur adip ",
      image: "../images/image00011.jpeg",
      link: ""
    }, 
    { 
      title: "Movie Name",
      release_date: "2015-10-23",
      director: "Edilson Zau",
      description: "Lorem ipsum dolor sit amet, consectetur adip ",
      image: "../images/image00012.jpeg",
      link: ""
    }, 
    { 
      title: "Movie Name",
      release_date: "2015-10-23",
      director: "Edilson Zau",
      description: "Lorem ipsum dolor sit amet, consectetur adip ",
      image: "../images/image00013.jpeg",
      link: ""
    }, 
    { 
      title: "Movie Name",
      release_date: "2015-10-23",
      director: "Edilson Zau",
      description: "Lorem ipsum dolor sit amet, consectetur adip ",
      image: "../images/image00014.jpeg",
      link: ""
    }, 
    { 
      title: "Movie Name",
      release_date: "2015-10-23",
      director: "Edilson Zau",
      description: "Lorem ipsum dolor sit amet, consectetur adip ",
      image: "../images/image00015.jpeg",
      link: ""
    }, 
  ];
  appendContents(contents);
  window.addEventListener("scroll", moveCamera);
  window.addEventListener("mousemove", moveCameraAngle);
  setSceneHeight();
});

function createContentItem(content) {
  return `<div>
    <a href="${content.image}"><img src="${content.image}"/></a>
  </div>
  `;
}

function appendContents(contents) {
  const contentsEl = document.querySelector(".viewport .scene3D");
  let contentsNodes = [];

  for (content of contents) {
    contentsNodes.push(createContentItem(content));
  }

  contentsEl.innerHTML = contentsNodes.join(" ");
}

function moveCamera() {
  document.documentElement.style.setProperty("--cameraZ", window.pageYOffset);
}

function setSceneHeight() {
  const numberOfItems = contents.length;
  const itemZ = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--itemZ")
  );
  const scenePerspective = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspective"
    )
  );
  const cameraSpeed = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed")
  );

  const height =
    window.innerHeight + 4500 +
    scenePerspective * cameraSpeed +
    itemZ * cameraSpeed * numberOfItems;

  document.documentElement.style.setProperty("--viewportHeight", height);
}

function moveCameraAngle(event) {
  const xGap =
    (((event.clientX - window.innerWidth / 2) * 100) /
      (window.innerWidth / 2)) *
    -1;
  const yGap =
    (((event.clientY - window.innerHeight / 2) * 100) /
      (window.innerHeight / 2)) *
    -1;
  const newPerspectiveOriginX =
    perspectiveOrigin.x + (xGap * perspectiveOrigin.maxGap) / 100;
  const newPerspectiveOriginY =
    perspectiveOrigin.y + (yGap * perspectiveOrigin.maxGap) / 100;

  document.documentElement.style.setProperty(
    "--scenePerspectiveOriginX",
    newPerspectiveOriginX
  );
  document.documentElement.style.setProperty(
    "--scenePerspectiveOriginY",
    newPerspectiveOriginY
  );
}
