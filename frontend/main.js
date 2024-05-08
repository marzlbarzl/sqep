const inner = document.getElementById('inner');

const form = document.createElement('form');

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

inner.appendChild(form);

const mosLabel = document.createElement('label');
mosLabel.textContent = 'MOS Scale: ';
const mosInput = document.createElement('input');
mosInput.type = 'range';
mosInput.id = 'mos';
mosInput.name = 'mos';
mosInput.min = '1';
mosInput.max = '5';
mosInput.step = '1';
mosLabel.appendChild(mosInput);
const mosWords = ['Terrible', 'Bad', 'Okay', 'Good', 'Excellent'];
const mosList = document.createElement('ul');
mosWords.forEach(word => {
    const listItem = document.createElement('li');
    listItem.textContent = word;
    mosList.appendChild(listItem);
});

form.appendChild(mosLabel);
mosLabel.appendChild(mosList);


const audio = document.createElement('audio');
audio.src = 'files/audio/amen_break.ogg';
//audio.controls = "controls";
form.appendChild(audio);


function playAudio() { 
    audio.play(); 
} 

const innerHTML = document.createElement('div');
innerHTML.innerHTML = '<button onclick="playAudio()" type="button">Play Audio</button>';
inner.appendChild(innerHTML);