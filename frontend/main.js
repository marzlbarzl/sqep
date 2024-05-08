// Form 

const initForm = document.getElementById('initForm');
const form = document.createElement('form');

function createForm(){
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name: ';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameLabel.appendChild(nameInput);

    const ageLabel = document.createElement('label');
    ageLabel.textContent = 'Age: ';
    const ageInput = document.createElement('input');
    ageInput.type = 'number';
    ageInput.name = 'age';
    ageLabel.appendChild(ageInput);

    const genderLabel = document.createElement('label');
    genderLabel.textContent = 'Gender: ';
    const genderInput = document.createElement('select');
    genderInput.name = 'gender';
    const genderOptions = ['Male', 'Female', 'Other'];
    genderOptions.forEach(option => {
        const genderOption = document.createElement('option');
        genderOption.value = option.toLowerCase();
        genderOption.textContent = option;
        genderInput.appendChild(genderOption);
    });
    genderLabel.appendChild(genderInput);


    form.appendChild(nameLabel);
    form.appendChild(ageLabel);
    form.appendChild(genderLabel);

    initForm.appendChild(form);

    const submitButton = document.createElement('button');
    submitButton.innerHTML = 'Submit';
    submitButton.onclick = submitForm;
    
    form.appendChild(submitButton);
}

createForm();

function submitForm(event){ 
    form.style.display = 'none';
    console.log('Form submitted');
    event.preventDefault();
    Experimentinit();
}

// Experiment

var experimentProgress = 0;
var audioFiles = ['amen_break.ogg','think_break.ogg','intheairtonight.ogg'];

function Experimentinit(){ 

    createMOSScale();

    var audio = document.createElement('audio');
    audio.id = 'audio';
    audio.src = 'files/audio/' + audioFiles[experimentProgress];

    test.appendChild(audio);

    const nav = document.getElementById('nav');
    const playButton = document.createElement('div');
    playButton.innerHTML = '<button onclick="playAudio()" type="button">Play Audio</button>';
    nav.appendChild(playButton);

    const nextTest = document.createElement('div');
    nextTest.innerHTML = '<button onclick="updateTest()" type="button">Next Test</button>';
    nav.appendChild(nextTest);
}


function createMOSScale(){
    const mosLabel = document.createElement('label');
    mosLabel.textContent = 'MOS Scale: ';
    const mosInput = document.createElement('input');
    mosInput.type = 'range';
    mosInput.id = 'mos';
    mosInput.name = 'mos';
    mosInput.min = '1';
    mosInput.max = '5';
    mosInput.step = '1';
    mosInput.value = '3';
    mosLabel.appendChild(mosInput);
    const mosWords = ['Terrible', 'Bad', 'Okay', 'Good', 'Excellent'];
    const mosList = document.createElement('ul');
    mosWords.forEach(word => {
        const listItem = document.createElement('li');
        listItem.textContent = word;
        mosList.appendChild(listItem);
    });

    const test = document.getElementById('test');
    test.appendChild(mosLabel);
    mosLabel.appendChild(mosList);
}

function resetMOS() {
    const mosInput = document.getElementById('mos');
    mosInput.value = 3;
}

function playAudio() { 
    audio.play(); 
}

function updateTest() {
    if (experimentProgress >= audioFiles.length - 1) {
        alert('Experiment Completed');
        return;
    }
    experimentProgress = experimentProgress + 1;
    document.getElementById('audio').src = 'files/audio/' + audioFiles[experimentProgress];
    resetMOS();
}
