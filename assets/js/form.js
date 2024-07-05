document.getElementById('Form').addEventListener('submit', function(event){
event.preventDefault();
const formData = new FormData(event.target);
const Post = {
title: formData.get('Title'),
Username: formData.get('Username'),
content: formData.get('Content')
};
localStorage.setItem('Post', JSON.stringify(Post));
window.location.href = 'blog.html';
});


////

document.addEventListener('DOMContentLoaded', function() {
const body = document.body;
const darkmodeswitch = document.getElementById('dark-mode-switch');
const currentmode = localStorage.getItem('mode');
if (currentmode === 'dark') {
body.classList.add('dark');
} else {
body.classList.add('light');
}

darkmodeswitch.addEventListener('click', function() {
if (body.classList.contains('dark')) {
body.classList.replace('dark', 'light');
localStorage.setItem('mode', 'light');
} else {
body.classList.replace('light', 'dark');
localStorage.setItem('mode', 'dark');

}
});
});
