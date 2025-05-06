
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen bg-[#f9f7f1] text-[#222] font-serif">
      {/* Шапка */}
      <header className="border-b-2 border-black py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to="/">
              <div className="flex items-center gap-2">
                <Icon name="Camera" className="h-8 w-8" />
                <h1 className="text-3xl font-bold tracking-tight">Фотограф СПб</h1>
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
            <li><Link to="/about" className="font-bold underline">О проектах</Link></li>
            <li><Link to="/tips" className="hover:underline">Советы моделям</Link></li>
            <li><Link to="/contacts" className="hover:underline">Контакты</Link></li>
          </ul>
        </div>
      </nav>

      {/* Основной контент */}
      <main className="container mx-auto py-8 px-6">
        {/* Заголовок страницы */}
        <div className="border-b-2 border-black pb-4 mb-8">
          <h2 className="text-4xl font-bold text-center">О МОИХ ТВОРЧЕСКИХ ПРОЕКТАХ</h2>
          <p className="text-center mt-2 text-lg">Фото и видеосъёмки в различных жанрах и локациях Санкт-Петербурга</p>
        </div>

        {/* Основная информация */}
        <div className="prose max-w-none mb-12">
          <h3 className="text-2xl font-bold border-b border-black pb-2 mb-4">МОЙ ТВОРЧЕСКИЙ ПУТЬ</h3>
          
          <p>Меня зовут Александр, я фотограф и режиссёр из Санкт-Петербурга. Более 5 лет занимаюсь созданием визуального контента: от художественной фотографии до короткометражных фильмов и музыкальных видеоклипов.</p>
          
          <p>Мой творческий путь начался с увлечения фотографией, постепенно перерос в профессиональную деятельность и расширился до видеопроизводства. За годы работы я сотрудничал с начинающими и профессиональными моделями, музыкантами, актёрами и другими творческими людьми.</p>
          
          <p>В своих работах стремлюсь раскрыть индивидуальность каждой модели, передать особую атмосферу и эмоциональное состояние. Ищу нестандартные подходы к обычным сюжетам и необычные локации для съёмок.</p>
          
          <h4 className="text-xl font-bold mt-6 mb-3">Моя философия работы</h4>
          
          <p>Я убеждён, что лучшие кадры получаются при комфортном и доверительном взаимодействии между фотографом и моделью. Поэтому всегда уделяю внимание созданию непринуждённой атмосферы на съёмочной площадке.</p>
          
          <p>Мой подход строится на нескольких принципах:</p>
          <ul>
            <li><strong>Творческая свобода.</strong> Я ценю вклад каждого участника процесса и открыт к идеям и предложениям со стороны моделей.</li>
            <li><strong>Профессионализм.</strong> Несмотря на дружелюбную атмосферу, все съёмки планируются и проводятся на высоком профессиональном уровне.</li>
            <li><strong>Развитие.</strong> Каждый проект — это возможность для роста как для меня, так и для моделей, с которыми я работаю.</li>
            <li><strong>Этичность.</strong> Уважение к личным границам и комфорту участников съёмок — обязательное условие сотрудничества.</li>
          </ul>
          
          <h3 className="text-2xl font-bold border-b border-black pb-2 mt-8 mb-4">НАПРАВЛЕНИЯ РАБОТЫ</h3>
          
          <h4 className="text-xl font-bold mt-6 mb-3">Музыкальные видеоклипы</h4>
          
          <p>Одно из основных направлений моей работы — создание музыкальных видео для начинающих и независимых музыкантов Санкт-Петербурга. В этих проектах я выступаю как режиссёр, оператор и монтажёр.</p>
          
          <p>Для музыкальных клипов я ищу моделей, которые могут органично передавать эмоции в кадре, чувствовать музыку и работать в различных локациях. Характерные черты моих музыкальных видео:</p>
          
          <ul>
            <li>Атмосферность и кинематографичность</li>
            <li>Использование городских пейзажей и архитектуры Петербурга как неотъемлемого элемента повествования</li>
            <li>Сюжетная линия, дополняющая содержание песни</li>
            <li>Акцент на выразительности и эмоциональности моделей</li>
          </ul>
          
          <h4 className="text-xl font-bold mt-6 mb-3">Короткометражные фильмы</h4>
          
          <p>Я создаю авторские короткометражные фильмы в различных жанрах: от городских драм до экспериментальных работ. Эти проекты требуют от моделей актёрских навыков и способности передавать характер персонажа.</p>
          
          <p>Мои короткометражные работы можно охарактеризовать следующим образом:</p>
          
          <ul>
            <li>Продолжительность от 5 до 15 минут</li>
            <li>Фокус на визуальном повествовании и деталях</li>
            <li>Минималистичные диалоги</li>
            <li>Исследование человеческих эмоций и взаимоотношений</li>
            <li>Использование натуральных локаций Санкт-Петербурга</li>
          </ul>
          
          <p>Некоторые из моих короткометражных работ были показаны на локальных кинофестивалях и получили положительные отзывы.</p>
          
          <h4 className="text-xl font-bold mt-6 mb-3">Художественная фотография</h4>
          
          <p>В фотографии я работаю в нескольких направлениях:</p>
          
          <ul>
            <li><strong>Портретная фотография</strong> с акцентом на характер и индивидуальность модели</li>
            <li><strong>Концептуальные фотосессии</strong> с проработанными историями и необычными локациями</li>
            <li><strong>Городские портреты</strong>, где Санкт-Петербург становится вторым героем кадра</li>
            <li><strong>Фэшн-фотография</strong> с элементами художественного подхода</li>
          </ul>
          
          <p>Мои фотографии отличаются вниманием к деталям, продуманной композицией и особой атмосферой, присущей Петербургу.</p>
          
          <h3 className="text-2xl font-bold border-b border-black pb-2 mt-8 mb-4">УСЛОВИЯ СОТРУДНИЧЕСТВА</h3>
          
          <h4 className="text-xl font-bold mt-6 mb-3">ТФП (Time For Photos)</h4>
          
          <p>Большинство моих творческих проектов проводятся на условиях ТФП-сотрудничества. Это означает, что модель получает готовые обработанные фотографии или видеоматериалы в обмен на своё время и участие в проекте.</p>
          
          <p><strong>Что я предлагаю моделям:</strong></p>
          
          <ul>
            <li>Профессиональные фотографии и/или видеоматериалы для портфолио</li>
            <li>Творческий опыт работы в интересных проектах</li>
            <li>Возможность участия в фестивалях и конкурсах вместе с готовыми работами</li>
            <li>Комфортные условия съёмки и доброжелательную атмосферу</li>
            <li>Согласование концепции и образов перед съёмкой</li>
          </ul>
          
          <p><strong>Что ожидается от моделей:</strong></p>
          
          <ul>
            <li>Ответственное отношение к процессу и соблюдение договорённостей</li>
            <li>Пунктуальность и готовность к съёмке</li>
            <li>Активное участие в творческом процессе</li>
            <li>Базовые навыки позирования (для фотосессий) или актёрского мастерства (для видеосъёмок)</li>
            <li>Указание авторства при публикации полученных материалов в социальных сетях</li>
          </ul>
          
          <h4 className="text-xl font-bold mt-6 mb-3">Коммерческие проекты</h4>
          
          <p>Помимо ТФП-проектов, я также работаю над коммерческими заказами, где модели получают оплату за своё участие. Условия таких съёмок обсуждаются индивидуально в зависимости от требований проекта, опыта модели и других факторов.</p>
          
          <h3 className="text-2xl font-bold border-b border-black pb-2 mt-8 mb-4">ЛОКАЦИИ ДЛЯ СЪЁМОК</h3>
          
          <p>Санкт-Петербург предоставляет уникальные возможности для фото- и видеосъёмок благодаря разнообразию архитектуры и атмосферных мест. В своих проектах я использую следующие локации:</p>
          
          <ul>
            <li><strong>Исторический центр</strong> с его архитектурными памятниками и набережными</li>
            <li><strong>Крыши</strong> с панорамными видами на город (только безопасные и легальные)</li>
            <li><strong>Парки и сады</strong> Петербурга и пригородов</li>
            <li><strong>Заброшенные индустриальные объекты</strong> с особой атмосферой</li>
            <li><strong>Современные городские пространства</strong> и лофт-проекты</li>
            <li><strong>Студии</strong> для съёмок в контролируемых условиях</li>
          </ul>
          
          <p>Выбор локации всегда зависит от концепции проекта и образа модели. Я стремлюсь находить нестандартные места и ракурсы даже в хорошо известных локациях.</p>
        </div>
        
        <div className="bg-white border border-black p-6 my-8">
          <h3 className="text-xl font-bold mb-4">Хотите принять участие в моих проектах?</h3>
          <p className="mb-4">Я постоянно ищу новые лица для своих творческих работ. Если вы:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>От 18 лет</li>
            <li>Обладаете славянской внешностью</li>
            <li>Имеете стройное телосложение</li>
            <li>С длинными волосами и светлыми глазами</li>
            <li>Обаятельны и фотогеничны</li>
          </ul>
          <p className="mb-4">То я буду рад сотрудничеству с вами в моих проектах!</p>
          <p>Свяжитесь со мной в Telegram, отправив своё фото и краткую информацию о себе:</p>
          <a 
            href="https://t.me/vocoders" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-2 hover:underline"
          >
            <Icon name="Send" className="h-5 w-5" />
            <span className="text-lg">t.me/vocoders</span>
          </a>
        </div>
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

export default About;
