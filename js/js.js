// skills.js
document.addEventListener("DOMContentLoaded", () => {
  /* ==== SWITCH SKILLS (IT / MARKETING) ==== */
  const buttons = document.querySelectorAll(".skill-btn");
  const groups = document.querySelectorAll(".skills-group");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Xóa active khỏi tất cả nút
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const skillType = btn.dataset.skill;

      // Ẩn tất cả nhóm kỹ năng
      groups.forEach(group => {
        group.classList.remove("active");
        group.style.opacity = 0;
      });

      // Hiển thị nhóm được chọn
      const activeGroup = document.querySelector(`.${skillType}-skills`);
      activeGroup.classList.add("active");
      setTimeout(() => (activeGroup.style.opacity = 1), 100);
    });
  });

  /* ==== TOGGLE MOBILE MENU ==== */
  const menu = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  menu.onclick = () => {
    navbar.classList.toggle('active');
  };

  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
    });
  });

  /* ==== SWITCH PROJECTS + FADE DESCRIPTION ==== */
  const projectBtns = document.querySelectorAll('.project-btn');
  const projectGroups = document.querySelectorAll('.project-group');
  const descItems = document.querySelectorAll('.desc-item');

  projectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Nút active
      projectBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const id = btn.dataset.project;

      // Ẩn nhóm project cũ
      projectGroups.forEach(g => g.classList.remove('active'));
      const activeGroup = document.getElementById(id);
      if (activeGroup) activeGroup.classList.add('active');

      // Mô tả fade-out nhẹ trước khi đổi
      descItems.forEach(d => {
        d.style.opacity = 0;
        setTimeout(() => d.classList.remove('active'), 200);
      });

      // Hiện mô tả tương ứng (fade + slide nhẹ)
      const activeDesc = document.getElementById(`desc-${id}`);
      if (activeDesc) {
        setTimeout(() => {
          activeDesc.classList.add('active');
          activeDesc.style.opacity = 1;
          activeDesc.style.transform = "translateY(0)";
        }, 250);
      }
    });
  });
});
