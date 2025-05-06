
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
            <h1 className="text-3xl font-bold tracking-tight">Фотограф СПб</h1>
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
          <h2 className="text-4xl font-bold text-center">ПОИСК МОДЕЛЕЙ ДЛЯ ТВОРЧЕСКИХ ПРОЕКТОВ В САНКТ-ПЕТЕРБУРГЕ</h2>
          <p className="text-center mt-2 text-lg">Обновлено: 6 мая 2025 г.</p>
        </div>

        {/* Объявление о поиске моделей */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold border-b border-black pb-2 mb-4">ПРИГЛАШАЮ МОДЕЛЕЙ НА ТФП СЪЁМКИ</h3>
          
          <div className="prose max-w-none">
            <p className="text-lg">Ищу моделей для участия в творческих проектах на условиях TFP (Time for Photos). Планирую съёмки музыкальных роликов, короткометражных фильмов и фотосессий в различных локациях Санкт-Петербурга.</p>
            
            <h4 className="text-xl font-bold mt-6">Требования к моделям:</h4>
            <ul className="list-disc pl-6 mb-6">
              <li>Возраст от 18 лет</li>
              <li>Славянский тип внешности</li>
              <li>Стройное телосложение</li>
              <li>Длинные волосы</li>
              <li>Светлые глаза</li>
              <li>Обаяние и умение работать на камеру</li>
              <li>Ответственность и пунктуальность</li>
            </ul>
            
            <h4 className="text-xl font-bold mt-6">Что предлагаю:</h4>
            <ul className="list-disc pl-6 mb-6">
              <li>Профессиональные фотографии и видеоматериалы для вашего портфолио</li>
              <li>Участие в креативных проектах с возможностью добавить в своё резюме</li>
              <li>Комфортную атмосферу на съёмочной площадке</li>
              <li>Помощь в позировании и раскрытии вашего потенциала</li>
              <li>Гибкий график съёмок (возможность выбора удобного для вас времени)</li>
            </ul>
            
            <h4 className="text-xl font-bold mt-6">Планируемые проекты:</h4>
            <ul className="list-disc pl-6 mb-6">
              <li>Съёмки музыкальных видеоклипов в городских локациях</li>
              <li>Короткометражные художественные фильмы</li>
              <li>Концептуальные фотосессии в различных стилях</li>
              <li>Портретные и fashion съёмки</li>
            </ul>
            
            <div className="bg-white border border-black p-4 my-6">
              <h4 className="text-lg font-bold">Как принять участие:</h4>
              <p>Для участия в съёмках необходимо отправить свои фотографии (портрет и в полный рост) и краткую информацию о себе (возраст, рост, опыт, если есть) в Telegram:</p>
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
            
            <p className="text-lg">Все съёмки проходят в дружественной, профессиональной обстановке. Вы получите ценный опыт работы на камеру и качественные материалы для своего портфолио.</p>
            
            <Button className="bg-black hover:bg-gray-800 mt-4">
              <Link to="/contacts">Связаться для участия</Link>
            </Button>
          </div>
        </section>

        {/* О проектах */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold border-b border-black pb-2 mb-4">О МОИХ ПРОЕКТАХ</h3>
          
          <div className="prose max-w-none">
            <p>Я занимаюсь созданием авторских творческих проектов в Санкт-Петербурге: от музыкальных клипов до короткометражных фильмов. В своих работах стремлюсь передать красоту и атмосферу города, а также раскрыть индивидуальность каждой модели.</p>
            
            <p>За плечами более 5 лет опыта в фото- и видеосъёмке. Мои работы принимали участие в локальных выставках и фестивалях. Сотрудничаю с начинающими музыкантами и творческими коллективами Санкт-Петербурга.</p>
            
            <p>Ключевые направления работы:</p>
            <ul>
              <li>Атмосферные музыкальные видео в городских локациях</li>
              <li>Короткометражные художественные фильмы</li>
              <li>Концептуальные фотосессии в различных жанрах</li>
            </ul>
            
            <p>Для каждого проекта подбираю уникальные локации, которые подчёркивают концепцию работы и помогают создать нужную атмосферу. Среди любимых мест для съёмок — исторический центр Петербурга, крыши, набережные, заброшенные индустриальные объекты, а также пригороды с их дворцово-парковыми ансамблями.</p>
            
            <Button variant="link" className="p-0 text-black hover:text-gray-700">
              <Link to="/about">Подробнее о проектах →</Link>
            </Button>
          </div>
        </section>

        {/* Советы для моделей */}
        <section>
          <h3 className="text-2xl font-bold border-b border-black pb-2 mb-4">СОВЕТЫ ДЛЯ НАЧИНАЮЩИХ МОДЕЛЕЙ</h3>
          
          <div className="grid gap-4">
            <div className="border-b border-gray-300 pb-2">
              <h4 className="font-bold">1. Подготовьтесь к съёмке заранее</h4>
              <p>Выспитесь, избегайте алкоголя накануне, позаботьтесь о коже и волосах.</p>
            </div>
            
            <div className="border-b border-gray-300 pb-2">
              <h4 className="font-bold">2. Возьмите с собой несколько образов</h4>
              <p>Разнообразные наряды помогут создать больше интересных кадров.</p>
            </div>
            
            <div className="border-b border-gray-300 pb-2">
              <h4 className="font-bold">3. Не бойтесь экспериментировать</h4>
              <p>Лучшие кадры часто получаются при спонтанных движениях и эмоциях.</p>
            </div>
            
            <Button variant="link" className="p-0 text-black hover:text-gray-700">
              <Link to="/tips">Все советы для начинающих моделей →</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-black text-white py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Фотограф СПб</h4>
              <p>Творческие проекты и сотрудничество с моделями в Санкт-Петербурге.</p>
              <div className="mt-4 flex items-center gap-2">
                <Icon name="Camera" className="h-6 w-6" />
                <span className="text-lg font-bold">Фотограф СПб</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Разделы сайта</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:underline">Главная</Link></li>
                <li><Link to="/about" className="hover:underline">О проектах</Link></li>
                <li><Link to="/tips" className="hover:underline">Советы моделям</Link></li>
                <li><Link to="/contacts" className="hover:underline">Контакты</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Связаться со мной</h4>
              <p>Хотите принять участие в проекте или узнать подробности?</p>
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
            <p>© 2025 Фотограф СПб. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
