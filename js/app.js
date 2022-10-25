const url = 'https://api.hh.ru/vacancies?per_page=5&text=%27js%27'
const cards = document.querySelector(".cards");

const fetchHandler = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log("data", data);
    data.items.slice(5);
    data.items.map((el) => {
      console.log(el);
        let innerContent = `
        <div class="vacancy-info">
            <div class="vacancy-info__image">
                <img src="${el.employer?.logo_urls?.[240]}" alt="${el.employer.name}" class="vacancy-info__logo">
            </div>
            <ul class="vacancy-info__list">
                <li class="vacancy-info__item">
                    <span class="vacancy-info__specification">Form: </span>
                    <span>${el.schedule.name}</span>
                </li>
                <li class="vacancy-info__item">
                    <span class="vacancy-info__specification">Company: </span>
                    <span>${el.employer.name}</span>
                </li>
                <li class="vacancy-info__item">
                    <span class="vacancy-info__specification">Web: </span>
                    <a href="${el.alternate_url}" target="_blank" class="vacancy-info__link" rel="noreferrer">${el.alternate_url}</a>
                </li>
                <li class="vacancy-info__item">
                    <span class="vacancy-info__specification">Address: </span>
                    <span>${el.area.name}</span>
                </li>
            </ul>
        </div>
        <div class="vacancy-description">
            <h3 class="vacancy-description__name">${el.name}</h3>
            <p class="vacancy-description__text">${el.snippet.responsibility}</p>
            <p class="vacancy-description__text">${el.snippet.requirement}</p>
            
        </div>
        `;
      let card = document.createElement("div");
      card.className = "vacancy";
      card.innerHTML = innerContent;
      cards.appendChild(card);

      
    });
  } catch (error) {
    console.log(console.error);
  }
};

fetchHandler();
