
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Castings = () => {
  return (
    <div className="min-h-screen bg-[#f9f7f1] text-[#222] font-serif">
      {/* Шапка */}
      <header className="border-b-2 border-black py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to="/">
              <div className="flex items-center gap-2">
                <Icon name="Camera" className="h-8 w-8" />
                <h1 className="text-3xl font-bold tracking-tight">Кастинги СПб</h1>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://t.me/vocoders" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <Icon name="Send" className="h-4 w-4" />
              <span>t.me/vocoders</span>
            </a>
            <Button variant="outline" className="border-black">
              <Link to="/contacts">Связаться</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Навигация */}
      <nav className="border-b border-black">
        <div className="container mx-auto px-6 py-2">
          <ul className="flex flex-wrap gap-6">
            <li><Link to="/" className="hover:underline">Главная</Link></li>
            <li><Link to="/castings" className="font-bold underline">Кастинги</Link></li>
            <li><Link to="/tips" className="hover:underline">Советы</Link></li>
            <li><Link to="/about" className="hover:underline">О кастингах</Link></li>
            <li><Link to="/contacts" className="hover:underline">Контакты</Link></li>
          </ul>
        </div>
      </nav>

      {/* Основной контент */}
      <main className="container mx-auto py-8 px-6">
        {/* Заголовок страницы */}
        <div className="border-b-2 border-black pb-4 mb-8">
          <h2 className="text-4xl font-bold text-center">ВСЕ КАСТИНГИ САНКТ-ПЕТЕРБУРГА</h2>
          <p className="text-center mt-2 text-lg">Обновлено: 6 мая 2025 г.</p>
        </div>

        {/* Фильтры */}
        <div className="mb-8 p-4 border border-black bg-white">
          <h3 className="text-xl font-bold mb-4">Фильтры поиска:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2 font-bold">Категория:</label>
              <select className="w-full p-2 border border-black">
                <option value="">Все категории</option>
                <option value="acting">Актёрские роли</option>
                <option value="modeling">Модельные съёмки</option>
                <option value="extras">Массовка</option>
                <option value="tv">ТВ-шоу и программы</option>
                <option value="commercial">Реклама</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 font-bold">Возраст:</label>
              <select className="w-full p-2 border border-black">
                <option value="">Любой возраст</option>
                <option value="children">Дети (до 14 лет)</option>
                <option value="teens">Подростки (14-18 лет)</option>
                <option value="young">Молодёжь (18-30 лет)</option>
                <option value="adults">Взрослые (30-50 лет)</option>
                <option value="seniors">Старшее поколение (50+ лет)</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 font-bold">Опыт:</label>
              <select className="w-full p-2 border border-black">
                <option value="">Любой опыт</option>
                <option value="none">Без опыта</option>
                <option value="beginner">Начинающие</option>
                <option value="experienced">С опытом</option>
                <option value="professional">Профессионалы</option>
              </select>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Button className="bg-black hover:bg-gray-800">Применить фильтры</Button>
          </div>
        </div>

        {/* Список кастингов */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold border-b border-black pb-2 mb-6">ТЕКУЩИЕ КАСТИНГИ (15)</h3>
          
          <div className="grid gap-8">
            <article className="border-b border-gray-300 pb-6">
              <h4 className="text-xl font-bold">Требуются актёры для съёмок в историческом фильме</h4>
              <p className="text-sm mb-2">Опубликовано: 5 мая 2025 г.</p>
              <div className="flex gap-2 mb-3">
                <span className="inline-block px-2 py-1 bg-gray-200 text-xs">Актёрские роли</span>
                <span className="inline-block px-2 py-1 bg-gray-200 text-xs">25-45 лет</span>
                <span className="inline-block px-2 py-1 bg-gray-200 text-xs">С опытом</span>
              </div>
              <p className="mb-4">Кинокомпания "Северная звезда" ищет актёров от 25 до 45 лет для съёмок в историческом фильме о жизни Петра I. Требуется опыт работы в кино или театре. Съёмки пройдут в Санкт-Петербурге и пригородах в летний период. Предусмотрена оплата от 5000 до 15000 рублей за съёмочный день в зависимости от роли и занятости.</p>
              <p className="mb-4"><strong>Требования:</strong> Опыт работы в кино или театре, фактурная внешность, хорошая дикция, готовность к длительным съёмкам. Преимуществом будет знание исторических реалий эпохи Петра I.</p>
              <Button variant="outline" className="border-black">
                <Link to="/casting/1">Подробности и контакты</Link>
              </Button>
            </article>

            <article className="border-b border-gray-300 pb-6">
              <h4 className="text-xl font-bold">Кастинг на роли в рекламе банка</h4>
              <p className="text-sm mb-2">Опубликовано: 4 мая 2025 г.</p>
              <div className="flex gap-2 mb-3">
                <span className="inline-block px-2 py-1 bg-gray-200 text-xs">Реклама</span>
                <span className="inline-block px-2 py-1 bg-gray-200 text-xs">30-50 лет</span>
                <span className="inline-block px-2 py-1 bg-gray-200 text-xs">Любой опыт</span>
              </div>
              <p className="mb-4">Рекламное агентство проводит кастинг на роли в рекламе крупного российского банка. Требуются мужчины и женщины 30-50 лет с деловой внешностью. Опыт не обязателен. Съёмки в июне, один съёмочный день, оплата 15 000 рублей.</p>
              <p className="mb-4"><strong>Требования:</strong> Презентабельная внешность, деловой стиль, умение держаться перед камерой. Дополнительным преимуществом будет опыт работы в банковской сфере или финансах.</p>
              <Button variant="outline" className="border-black">
                <Link to="/casting/2">Подробности и контакты</Link>
              </Button>
            </article>

            <article className="border-b border-gray-300 pb-6">
              <h4 className="text-xl font-bold">Модели для показа одежды петербургских дизайнеров</h4>
              <p className="text-sm mb-2">Опубликовано: 3 мая 2025 г.</p>
              <div className="flex gap-2 mb-3">
                <span className="inline-block px-2 py-1 bg-gray-200 text-xs">Модельные съёмки</span>
                <span className="inline-block px-2 py-1 bg-gray-200 text-xs">18-30 лет</span>
                <span className="inline-block px-2 py-1 bg-gray-200 text-xs">С опытом</span>
              </div>
              <p className="mb-4">Объединение "Петербургская мода" приглашает моделей для участия в сезонном показе одежды местных дизайнеров. Требования: рост от 175 см для женщин и от 185 см для мужчин, параметры близкие к модельным, опыт дефиле. Показ состоится в историческом здании в центре Санкт-Петербурга.</p>
              <p className="mb-4"><strong>Требования:</strong> Модельная внешность, опыт участия в показах, уверенная походка и умение работать на подиуме. Портфолио обязательно.</p>
              <Button variant="outline" className="border-black">
                <Link to="/casting/3">Подробности и контакты</Link>
              </Button>
            </article>

            <article className="border-b border-gray-300 pb-6">
              <h4 className="text-xl font-bold">Массовка для съёмок исторического сериала</h4>
              <p className="text-sm mb-2">Опубликовано: 2 мая 2025 г.</p>
              <div className="flex gap-2 mb-3">
                <span className="inline-block px-2 py-1 bg-gray-200 text-xs">Массовка</span>
                <span className="inline-block px-2 py-1 bg-gray-200 text-xs">18-60 лет</span>
                <span className="inline-block px-2 py-1 bg-gray-200 text-xs">Без опыта</span>
              </div>
              <p className="mb-4">Для съёмок нового исторического сериала о блокаде Ленинграда требуется массовка. Мужчины и женщины разных возрастов и типажей. Съёмки будут проходить в мае-июне в Санкт-Петербурге и пригородах. Оплата 1500-2000 рублей за смену.</p>
              <p className="mb-4"><strong>Требования:</strong> Фотогеничность, дисциплинированность, готовность к длительным съёмкам, отсутствие ярких современных стрижек и татуировок на видимых частях тела.</p>
              <Button variant="outline" className="border-black">
                <Link to="/casting/4">Подробности и контакты</Link>
              </Button>
            </article>

            <article className="border-b border-gray-300 pb-6">
              <h4 className="text-xl font-bold">Ведущие для нового молодёжного канала</h4>
              <p className="text-sm mb-2">Опубликовано: 1 мая 2025 г.</p>
              <div className="flex gap-2 mb-3">
                <span className="inline-block px-2 py-1 bg-gray-200 text-xs">ТВ-шоу</span>
                <span className="inline-block px-2 py-1 bg-gray-200 text-xs">20-30 лет</span>
                <span className="inline-block px-2 py-1 bg-gray-200 text-xs">С опытом</span>
              </div>
              <p className="mb-4">Новый молодёжный интернет-канал о культурной жизни Санкт-Петербурга ищет харизматичных ведущих для создания контента о выставках, концертах, театральных премьерах и других культурных событиях города. Требуется опыт работы перед камерой.</p>
              <p className="mb-4"><strong>Требования:</strong> Грамотная речь, харизма, опыт работы перед камерой, интерес к культурной жизни города, активная социальная позиция.</p>
              <Button variant="outline" className="border-black">
                <Link to="/casting/5">Подробности и контакты</Link>
              </Button>
            </article>
          </div>
          
          {/* Пагинация */}
          <div className="mt-8 flex justify-center">
            <nav aria-label="Pagination">
              <ul className="flex items-center gap-1">
                <li>
                  <a href="#" className="inline-block px-3 py-1 border border-black hover:bg-gray-200">
                    &laquo;
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block px-3 py-1 bg-black text-white">
                    1
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block px-3 py-1 border border-black hover:bg-gray-200">
                    2
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block px-3 py-1 border border-black hover:bg-gray-200">
                    3
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block px-3 py-1 border border-black hover:bg-gray-200">
                    &raquo;
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-black text-white py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Кастинги СПб</h4>
              <p>Ваш надёжный источник информации о кастингах в Санкт-Петербурге.</p>
              <div className="mt-4 flex items-center gap-2">
                <Icon name="Camera" className="h-6 w-6" />
                <span className="text-lg font-bold">Кастинги СПб</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Разделы сайта</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:underline">Главная</Link></li>
                <li><Link to="/castings" className="hover:underline">Все кастинги</Link></li>
                <li><Link to="/tips" className="hover:underline">Советы</Link></li>
                <li><Link to="/about" className="hover:underline">О кастингах в СПб</Link></li>
                <li><Link to="/contacts" className="hover:underline">Контакты</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Связаться с нами</h4>
              <p>Появились вопросы или нужна помощь?</p>
              <a 
                href="https://t.me/vocoders" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 mt-2 hover:underline"
              >
                <Icon name="Send" className="h-4 w-4" />
                <span>t.me/vocoders</span>
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-700 text-center">
            <p>© 2025 Кастинги СПб. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Castings;
