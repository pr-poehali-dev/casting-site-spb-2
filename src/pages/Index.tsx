
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f9f7f1] text-[#222] font-serif">
      {/* Шапка */}
      <header className="border-b-2 border-black py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Camera" className="h-8 w-8" />
            <h1 className="text-3xl font-bold tracking-tight">Кастинги СПб</h1>
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

      {/* Основной контент */}
      <main className="container mx-auto py-8 px-6">
        {/* Заголовок страницы */}
        <div className="border-b-2 border-black pb-4 mb-8">
          <h2 className="text-4xl font-bold text-center">ПОИСК АКТЁРОВ, МОДЕЛЕЙ, ТАЛАНТОВ В САНКТ-ПЕТЕРБУРГЕ</h2>
          <p className="text-center mt-2 text-lg">Обновлено: 6 мая 2025 г.</p>
        </div>

        {/* Актуальные кастинги */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold border-b border-black pb-2 mb-4">АКТУАЛЬНЫЕ КАСТИНГИ</h3>
          
          <div className="grid gap-6">
            <article className="border-b border-gray-300 pb-4">
              <h4 className="text-xl font-bold">Требуются актёры для съёмок в историческом фильме</h4>
              <p className="text-sm mb-2">Опубликовано: 5 мая 2025 г.</p>
              <p className="mb-2">Кинокомпания "Северная звезда" ищет актёров от 25 до 45 лет для съёмок в историческом фильме о жизни Петра I. Требуется опыт работы в кино или театре. Съёмки пройдут в Санкт-Петербурге и пригородах в летний период.</p>
              <Button variant="link" className="p-0 text-black hover:text-gray-700">
                <Link to="/casting/1">Читать подробнее →</Link>
              </Button>
            </article>

            <article className="border-b border-gray-300 pb-4">
              <h4 className="text-xl font-bold">Кастинг на роли в рекламе банка</h4>
              <p className="text-sm mb-2">Опубликовано: 4 мая 2025 г.</p>
              <p className="mb-2">Рекламное агентство проводит кастинг на роли в рекламе крупного российского банка. Требуются мужчины и женщины 30-50 лет с деловой внешностью. Опыт не обязателен. Съёмки в июне, один съёмочный день, оплата 15 000 рублей.</p>
              <Button variant="link" className="p-0 text-black hover:text-gray-700">
                <Link to="/casting/2">Читать подробнее →</Link>
              </Button>
            </article>

            <article className="border-b border-gray-300 pb-4">
              <h4 className="text-xl font-bold">Модели для показа одежды петербургских дизайнеров</h4>
              <p className="text-sm mb-2">Опубликовано: 3 мая 2025 г.</p>
              <p className="mb-2">Объединение "Петербургская мода" приглашает моделей для участия в сезонном показе одежды местных дизайнеров. Требования: рост от 175 см для женщин и от 185 см для мужчин, параметры близкие к модельным, опыт дефиле.</p>
              <Button variant="link" className="p-0 text-black hover:text-gray-700">
                <Link to="/casting/3">Читать подробнее →</Link>
              </Button>
            </article>
          </div>
          
          <div className="mt-6 text-center">
            <Button className="bg-black hover:bg-gray-800">
              <Link to="/castings">Смотреть все кастинги</Link>
            </Button>
          </div>
        </section>

        {/* Информация о кастингах в СПб */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold border-b border-black pb-2 mb-4">О КАСТИНГАХ В САНКТ-ПЕТЕРБУРГЕ</h3>
          
          <div className="prose max-w-none">
            <p>Санкт-Петербург — культурная столица России и один из центров кинопроизводства. Каждый год здесь проходят съёмки десятков фильмов, сериалов, рекламных роликов и других проектов, требующих участия актёров, моделей и талантливых людей разных возрастов и типажей.</p>
            
            <p>На нашей платформе мы собираем актуальные кастинги Санкт-Петербурга от проверенных кинокомпаний, продюсерских центров, рекламных агентств и других организаторов. Мы стремимся обеспечить максимально полную и достоверную информацию, чтобы помочь талантам найти работу, а организаторам проектов — подходящих исполнителей.</p>
            
            <p>Особенности кастингов в Санкт-Петербурге:</p>
            <ul>
              <li>Большое количество исторических проектов, благодаря уникальной архитектуре и атмосфере города</li>
              <li>Высокий уровень конкуренции из-за наличия нескольких театральных вузов</li>
              <li>Сезонность предложений (пик активности приходится на весну и лето)</li>
              <li>Разнообразие проектов: от крупных международных фильмов до независимых авторских работ</li>
            </ul>
            
            <p>Для успешного участия в кастингах в Санкт-Петербурге необходимо иметь актуальное портфолио, быть готовым к быстрому отклику на предложения и следить за новыми объявлениями на нашем сайте.</p>
            
            <Button variant="link" className="p-0 text-black hover:text-gray-700">
              <Link to="/about">Подробнее о кастингах в Санкт-Петербурге →</Link>
            </Button>
          </div>
        </section>

        {/* Рекомендации */}
        <section>
          <h3 className="text-2xl font-bold border-b border-black pb-2 mb-4">СОВЕТЫ ДЛЯ УСПЕШНОГО ПРОХОЖДЕНИЯ КАСТИНГА</h3>
          
          <div className="grid gap-4">
            <div className="border-b border-gray-300 pb-2">
              <h4 className="font-bold">1. Подготовьте профессиональное портфолио</h4>
              <p>Качественные фотографии и видеоматериалы значительно повышают шансы на получение роли.</p>
            </div>
            
            <div className="border-b border-gray-300 pb-2">
              <h4 className="font-bold">2. Будьте пунктуальны</h4>
              <p>Опоздание на кастинг может стать причиной отказа, даже если вы идеально подходите на роль.</p>
            </div>
            
            <div className="border-b border-gray-300 pb-2">
              <h4 className="font-bold">3. Следуйте указаниям в описании кастинга</h4>
              <p>Внимательно читайте требования к внешнему виду, одежде и другим параметрам.</p>
            </div>
            
            <Button variant="link" className="p-0 text-black hover:text-gray-700">
              <Link to="/tips">Все советы для успешного прохождения кастингов →</Link>
            </Button>
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

export default Index;
