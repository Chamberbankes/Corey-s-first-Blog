document.addEventListener('DOMContentLoaded', function() {
const SavedBlog = localStorage.getItem('Post');
if (SavedBlog) {
const Post = JSON.parse(SavedBlog);
const PostElement = document.getElementById('Post');
PostElement.innerHTML = `
<h2>${Post.title}</h2>
<p><strong>Username:</strong> ${Post.Username}</p>
<p><strong> Content:</strong> ${Post.content}</p>`;
} 
});
///
document.addEventListener('DOMContentLoaded', function() {
const body = document.body;
const darkModeswitch = document.getElementById('dark-mode-switch');
const currentmode = localStorage.getItem('mode');
if (currentmode === 'dark') {
body.classList.add('dark');
} else {
body.classList.add('light');
}


darkModeswitch.addEventListener('click', function() {
if (body.classList.contains('dark')) {
body.classList.replace('dark', 'light');
localStorage.setItem('mode', 'light');
} else {
body.classList.replace('light', 'dark');
localStorage.setItem('mode', 'dark');
}
});
});