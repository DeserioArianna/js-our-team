const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const teamCardRow = document.querySelector(".row");

const createCard = ({ name, role, email, img }) => {
  return `
  <div class="col-lg-4 mb-3">
    <div class="card">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="./${img}" alt="${name}">
            </div>
            <div class="col-md-8 bg-dark">
                <div class="card-body">
                    <h5 class="card-title text-light">${name}</h5>
                    <p class="card-text text-light">${role}</p>
                    <p class="card-text text-primary">${email}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
  `;
};

const renderTeam = () => {
  let items = "";
  for (let i = 0; i < teamMembers.length; i++) {
    const card = createCard(teamMembers[i]);
    items += card;
  }
  teamCardRow.innerHTML = items;
};

renderTeam();