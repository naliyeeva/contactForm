document.addEventListener('DOMContentLoaded', function () {
    let stage = document.getElementsByClassName('stage-item active')[0];
    let stageId = stage.getAttribute('id').slice(-1);

    if(parseInt(stageId) === 1) {
        document.querySelector('button#previous').style.visibility = 'hidden'
    }
});


const nextButton = async () => {
    let stage = document.getElementsByClassName('stage-item active')[0];
    let stageId = stage.getAttribute('id').slice(-1);


    document.querySelector('button#previous').style.visibility = 'visible'

    await hidePreviousStage(stageId);
    await showNextStage(stageId);
}

const previousButton = async () => {
    let stage = document.getElementsByClassName('stage-item active')[0];
    let stageId = stage.getAttribute('id').slice(-1);

    if(parseInt(stageId) === 2) {
        document.querySelector('button#previous').style.visibility = 'hidden'
        document.querySelector('button#next').style.display = 'block'

    } else if (parseInt(stageId) === 4) {
        document.querySelector('button#next').style.display = 'block'
        document.querySelector('button#submit').style.display = 'none'
    }


    await showPreviousStage(stageId);
    await hideNextStage(stageId);
    
}

const submitButton = async () => {

    const facebook_data = document.getElementById("facebook-input").value;
    const instagram_data = document.getElementById("instagram-input").value;
    const youtube_data = document.getElementById("youtube-input").value;

    const snapchat_data = document.getElementById("snapchat-input").value;
    const tiktok_data = document.getElementById("tiktok-input").value;
    const telegram_data = document.getElementById("telegram-input").value;

    const twitter_data = document.getElementById("twitter-input").value;
    const pinterest_data = document.getElementById("pinterest-input").value;
    const linkedin_data = document.getElementById("linkedin-input").value;

    const name_data = document.getElementById("name-input").value;
    const surname_data = document.getElementById("surname-input").value;
    const age_data = document.getElementById("age-input").value;


    let data = {
        facebook: facebook_data,
        instagram: instagram_data,
        youtube: youtube_data,
        snapchat: snapchat_data,
        tiktok: tiktok_data,
        telegram: telegram_data,
        twitter: twitter_data,
        pinterest: pinterest_data,
        linkedin: linkedin_data,
        name: name_data,
        surname: surname_data,
        age: age_data
    }

    console.log(data);

}

const showPreviousStage = async (stageId) => {
    let newStageId = parseInt(stageId) - 1;
    if(newStageId >= 0) {
        document.getElementById('stage-' + newStageId).classList.add('active');
        document.getElementById('form-stage-' + newStageId).classList.add('active');
    }
}

const hidePreviousStage = async (stageId) => {
    document.getElementById('stage-' + stageId).classList.remove('active');
    document.getElementById('form-stage-' + stageId).classList.remove('active');
}

const showNextStage = async (stageId) => {
    let newStageId = parseInt(stageId) + 1;

    
    if(newStageId <= 4) {
        document.getElementById('stage-' + newStageId).classList.add('active');
        document.getElementById('form-stage-' + newStageId).classList.add('active');
    }

    console.log(newStageId)

    if(newStageId === 4) {
        document.querySelector('button#next').style.display = 'none'
        document.querySelector('button#submit').style.display = 'block'
    }
    

}

const hideNextStage = async (stageId) => {
    document.getElementById('stage-' + stageId).classList.remove('active');
    document.getElementById('form-stage-' + stageId).classList.remove('active');
}
