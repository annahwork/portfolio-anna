// skills.js
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".skill-btn");
  const groups = document.querySelectorAll(".skills-group");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Xóa active ở tất cả nút
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const skillType = btn.dataset.skill;

      // Ẩn tất cả nhóm kỹ năng
      groups.forEach(group => {
        group.classList.remove("active");
        group.style.opacity = 0;
      });

      // Hiện nhóm được chọn với hiệu ứng fade-in
      const activeGroup = document.querySelector(`.${skillType}-skills`);
      activeGroup.classList.add("active");
      setTimeout(() => (activeGroup.style.opacity = 1), 50);
    });
  });
});



let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  navbar.classList.toggle('active');
};

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

const projectBtns = document.querySelectorAll('.project-btn');
const projectGroups = document.querySelectorAll('.project-group');

projectBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    projectBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const id = btn.dataset.project;
    projectGroups.forEach(g => {
      g.classList.toggle('active', g.id === id);
    });
  });
});
 // vẫn cho click, scroll bình thường