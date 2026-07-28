document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
const greeting = document.createElement('h3');
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good Morning!";
} else if (hour < 18) {
  greeting.textContent = "Good Afternoon!";
} else {
  greeting.textContent = "Good Evening!";
}

document.querySelector('header').appendChild(greeting);
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

