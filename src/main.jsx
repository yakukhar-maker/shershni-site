import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import shershniLogo from './assets/shershni-logo.png';

import heroPhoto from './assets/photos/photo-1.jpg';
import clubPhoto from './assets/photos/photo-5.jpg';
import schoolPhoto from './assets/photos/photo-8.jpg';
import teamPhoto1 from './assets/photos/photo-2.jpg';
import teamPhoto2 from './assets/photos/photo-6.jpg';
import teamPhoto3 from './assets/photos/photo-7.jpg';
import teamPhoto4 from './assets/photos/photo-9.jpg';
import media1 from './assets/photos/photo-3.jpg';
import media2 from './assets/photos/photo-4.jpg';

function App() {
  const teams = [
    { title: 'Дитяча хокейна школа', text: 'Перші кроки на льоду, базова техніка катання, ключка та командна дисципліна.', image: clubPhoto },
    { title: 'Юнацькі команди', text: 'Матчі, турніри, розвиток гравців і формування клубної системи.', image: teamPhoto1 },
    { title: 'Тренерський штаб', text: 'Підготовка до ігор, тренувальний процес та індивідуальна робота з гравцями.', image: media1 },
    { title: 'Майбутня основна команда', text: 'Наступний етап розвитку — створення дорослої команди.', image: teamPhoto4 },
  ];

  const gallery = [
    { src: teamPhoto1, title: 'Вкидання шайби' },
    { src: media1, title: 'Атака Шершнів' },
    { src: media2, title: 'Боротьба біля воріт' },
    { src: clubPhoto, title: 'Команда на льоду' },
    { src: teamPhoto3, title: 'Ігровий момент' },
    { src: teamPhoto4, title: 'Командні емоції' },
  ];

  return (
    <div className="site">
      <header className="header">
        <div className="container headerInner">
          <div className="brand">
            <div className="brandMark">
              <img src={shershniLogo} alt="ХК Шершні" className="brandMarkImage" />
            </div>
            <div>
              <div className="brandTitle">Шершні</div>
              <div className="brandSubtitle">Hockey Club</div>
            </div>
          </div>
          <nav className="nav">
            <a href="#club">Клуб</a>
            <a href="#school">Школа</a>
            <a href="#teams">Команди</a>
            <a href="#media">Медіа</a>
            <a href="#news">Новини</a>
            <a href="#partners">Партнери</a>
            <a href="#contacts">Контакти</a>
          </nav>
          <a className="btn yellow" href="#school">Записатися</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container heroGrid">
            <div className="heroText">
              <div className="badge">Офіційний сайт хокейного клубу</div>
              <h1>ХК <span>Шершні</span></h1>
              <p>
                Хокейний клуб, дитяча школа, команда, медіа та спільнота вболівальників.
                Будуємо сучасний клуб із сильним брендом, розвитком дітей і майбутньою основною командою.
              </p>
              <div className="actions">
                <a className="btn yellow" href="#school">Записати дитину в школу</a>
                <a className="btn outline" href="#partners">Стати партнером</a>
              </div>
            </div>

            <div className="heroPhotoCard">
              <img src={heroPhoto} alt="Гравці ХК Шершні на матчі" />
              <div className="heroPhotoLogo">
                <img src={shershniLogo} alt="Логотип ХК Шершні" />
              </div>
            </div>
          </div>
        </section>

        <section id="club" className="section">
          <div className="container">
            <div className="eyebrow">Клуб</div>
            <h2>Про Шершнів</h2>
            <div className="aboutGrid">
              <div className="aboutPhoto"><img src={clubPhoto} alt="Гравці ХК Шершні" /></div>
              <div className="cards">
                <div className="card"><h3>Амбіція</h3><p>Стати сильним клубом області та поступово виходити на національний рівень.</p></div>
                <div className="card"><h3>Діти</h3><p>Розвивати дитячу школу та утримувати талановитих гравців у системі клубу.</p></div>
                <div className="card"><h3>Медіа</h3><p>Показувати тренування, матчі, голи, історії гравців і життя клубу.</p></div>
                <div className="card"><h3>Мерч</h3><p>Форма, шарфи, кепки та клубна атрибутика через shershni.store.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="school" className="section dark">
          <div className="container twoCol">
            <div>
              <div className="eyebrow">Хокейна школа</div>
              <h2>Запис у школу Шершнів</h2>
              <p className="lead">
                Залиште заявку, і представник клубу звʼяжеться з вами щодо тренувань,
                вікової групи, розкладу та умов участі.
              </p>
              <div className="schoolPhoto"><img src={schoolPhoto} alt="Гравець ХК Шершні" /></div>
            </div>
            <form className="form" action="mailto:info@shershni.com.ua" method="post" encType="text/plain">
              <input name="name" placeholder="Імʼя дитини" />
              <input name="age" placeholder="Вік" />
              <input name="phone" placeholder="Телефон батьків" />
              <textarea name="comment" placeholder="Коментар"></textarea>
              <button className="btn yellow" type="submit">Надіслати заявку</button>
            </form>
          </div>
        </section>

        <section id="teams" className="section">
          <div className="container">
            <div className="eyebrow">Структура</div>
            <h2>Команди клубу</h2>
            <div className="teamGrid">
              {teams.map(item => (
                <div className="team" key={item.title}>
                  <img className="teamImage" src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="media" className="section dark">
          <div className="container">
            <div className="eyebrow">Медіа</div>
            <h2>Фото з матчів</h2>
            <div className="galleryGrid">
              {gallery.map(item => (
                <figure className="galleryItem" key={item.title}>
                  <img src={item.src} alt={item.title} />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="news" className="section">
          <div className="container">
            <div className="eyebrow">Новини</div>
            <h2>Останні оновлення</h2>
            <div className="newsGrid">
              <article><img src={teamPhoto1} alt="Матч Шершнів" /><h3>Шершні готуються до нового сезону</h3><p>Команда продовжує тренувальний процес і формує оновлену структуру клубу.</p></article>
              <article><img src={clubPhoto} alt="Хокейна школа" /><h3>Відкритий набір у хокейну школу</h3><p>Запрошуємо дітей різного віку на тренування. Перший крок — залишити заявку.</p></article>
              <article><img src={teamPhoto4} alt="Командні емоції" /><h3>Новий етап розвитку клубу</h3><p>Ми оновлюємо бренд, сайт, соціальні мережі та комунікацію.</p></article>
            </div>
          </div>
        </section>

        <section id="partners" className="section">
          <div className="container">
            <div className="partnerBox">
              <h2>Партнерство з клубом</h2>
              <p>Партнери отримують присутність на сайті, у соцмережах, на формі, в медіа-контенті та на клубних подіях.</p>
              <a className="btn darkBtn" href="mailto:info@shershni.com.ua">Отримати пропозицію</a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contacts" className="footer">
        <div className="container footerGrid">
          <div>
            <div className="footerTitle">Шершні</div>
            <p>Офіційний сайт хокейного клубу. Домен: shershni.com.ua</p>
          </div>
          <div>
            <p>Льодова арена / контакти клубу</p>
            <p>+380 XX XXX XX XX</p>
            <p>info@shershni.com.ua</p>
          </div>
          <div className="socials">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
