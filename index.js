let decision;
const animePics = ['/anime/anime1.jpg', '/anime/anime2.jpg', '/anime/anime3.jpg',
                   '/anime/anime4.jpg', '/anime/anime5.jpg', '/anime/anime6.jpg', ];

const studyPics = ['/study/study1.jpg', '/study/study2.jpg', '/study/study3.jpg',
                   '/study/study4.jpg', '/study/study5.jpg', '/study/study6.jpg',];

const textOfAnime = ['have funn, dude :D', 'well deserved :)', 'so naruro or what?'];
const textOfStudy = ['go study, bitch :(', 'go finish ur css tutorial, idiot!', 'u have to study to get out of egypt :('];

const img = document.getElementById('imgContainer');
const text = document.getElementById('textContainer');

function addImage(imageSrc) {
    const imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    imgElement.classList.add('image-class');
    imgElement.alt = 'Image';

    const divElement = document.getElementById('imgContainer');
    divElement.innerHTML = '';
    divElement.appendChild(imgElement);
}


function watchAnime() {
    const animePicIndex = Math.floor(Math.random() * animePics.length);
    const animeTextIndex = Math.floor(Math.random() * textOfAnime.length);

    addImage(animePics[animePicIndex]);
    text.textContent = textOfAnime[animeTextIndex];
}

function study() {
    const studyPicIndex = Math.floor(Math.random() * studyPics.length);
    const studyTextIndex = Math.floor(Math.random() * textOfStudy.length);

    addImage(studyPics[studyPicIndex]);
    text.textContent = textOfStudy[studyTextIndex];
}

function makeDecision() {
    decision = Math.random() * 1001;
    if (decision > 500) {
        watchAnime();
    } else {
        study();
    }
}
