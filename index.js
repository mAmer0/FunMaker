let decision;
const animePics = ['/FunMaker/anime/anime1.jpg', '/FunMaker/anime/anime2.jpg', '/FunMaker/anime/anime3.jpg',
                   '/FunMaker/anime/anime4.jpg', '/FunMaker/anime/anime5.jpg', '/FunMaker/anime/anime6.jpg', ];

const studyPics = ['/FunMaker/study/study1.jpg', '/FunMaker/study/study2.jpg', '/FunMaker/study/study3.jpg',
                   '/FunMaker/study/study4.jpg', '/FunMaker/study/study5.jpg', '/FunMaker/study/study6.jpg',];

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
