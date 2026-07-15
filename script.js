// 1. Clear body
document.body.innerHTML = '';

// --- Part 1: Semantic Table ---
const table = document.createElement('table');
table.border = '1';

// Thead
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const th1 = document.createElement('th');
th1.innerText = 'Roll numbers';
const th2 = document.createElement('th');
th2.innerText = 'Names';
headerRow.appendChild(th1);
headerRow.appendChild(th2);
thead.appendChild(headerRow);
table.appendChild(thead);

// Tbody
const tbody = document.createElement('tbody');
const students = [
    { roll: '1', name: 'Alice' },
    { roll: '2', name: 'Bob' },
    { roll: '3', name: 'Charlie' }
];

students.forEach(student => {
    const row = document.createElement('tr');
    const tdRoll = document.createElement('td');
    tdRoll.innerText = student.roll;
    const tdName = document.createElement('td');
    tdName.innerText = student.name;
    row.appendChild(tdRoll);
    row.appendChild(tdName);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);

// --- Part 2: Heading ---
const h2 = document.createElement('h2');
h2.innerText = 'List of medias';
document.body.appendChild(h2);

// --- Part 3: Ordered List ---
const ol = document.createElement('ol');

// Item 1: Image
const li1 = document.createElement('li');
const img = document.createElement('img');
img.src = 'https://picsum.photos/id/123/200/300';
img.alt = 'Random image';
li1.appendChild(img);
ol.appendChild(li1);

// Item 2: Video (with source element)
const li2 = document.createElement('li');
const video = document.createElement('video');
video.controls = true;
const videoSource = document.createElement('source');
videoSource.src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
videoSource.type = 'video/mp4';
video.appendChild(videoSource);
li2.appendChild(video);
ol.appendChild(li2);

// Item 3: Audio
const li3 = document.createElement('li');
const audio = document.createElement('audio');
audio.controls = true;
const audioSource = document.createElement('source');
audioSource.src = 'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg';
audioSource.type = 'audio/ogg';
audio.appendChild(audioSource);
li3.appendChild(audio);
ol.appendChild(li3);

document.body.appendChild(ol);   