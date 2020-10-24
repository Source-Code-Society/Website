html = document.querySelector('html')
document.getElementById("dark-mode").addEventListener("click", () => {
   document.documentElement.classList.toggle('dark');
    document.querySelector('.navbar-brand img').classList.toggle('dark')
})


