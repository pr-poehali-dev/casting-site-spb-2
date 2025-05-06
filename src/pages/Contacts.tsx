
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contacts = () => {
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
            <li><Link to="/castings" className="hover:underline">Кастинги</Link></li>
            <li><Link to="/tips" className="hover:underline">Советы</Link></li>
            <li><Link to="/about" className="hover:underline">О кастингах</Link></li>
            <li><Link to="/contacts" className="font-bold underline">Контакты</Link></li>
          </ul>
        </div>
      </nav>

      {/* Основной контент */}
      <main className="container mx-auto py-8 px-6">
        {/* Заголовок страницы */}
        <div className="border-b-2 border-black pb-4 mb-8">
          <h2 className="text-4xl font-bold text-center">КОНТАКТЫ</h2>
          <p className="text-center mt-2 text-lg">Свяжитесь с нами для получения информации или размещения кастинга</p>
        </div>

        {/* Контактная информация */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold border-b border-black pb-2 mb-6">НАШИ КОНТАКТЫ</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-2">Telegram</h4>
                <a 
                  href="https://t.me/vocoders" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <Icon name="Send" className="h-5 w-5" />
                  <span className="text-lg">t.me/vocoders</span>
                </a>
                <p className="mt-2 text-gray-600">Самый быстрый способ связаться с нами. Ответим в течение 24 часов.</p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-2">Для размещения кастингов</h4>
                <p>Если вы организатор кастинга и хотите разместить информацию на нашем сайте, напишите нам в Telegram. Мы рассмотрим вашу заявку и опубликуем информацию о кастинге бесплатно.</p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-2">Часы работы</h4>
                <p>Мы обрабатываем заявки и отвечаем на сообщения с понедельника по пятницу с 10:00 до 19:00.</p>
              </div>
              
              <div className="p-4 border border-black bg-white">
                <h4 className="text-lg font-bold mb-2">О нас</h4>
                <p>"Кастинги СПб" — информационный ресурс о кастингах и съёмках в Санкт-Петербурге. Мы не являемся кастинговым агентством или продюсерским центром. Наша задача — собирать и публиковать проверенную информацию о кастингах от надёжных организаторов.</p>
              </div>
            </div>
          </div>
          
          {/* Форма обратной связи */}
          <div>
            <h3 className="text-2xl font-bold border-b border-black pb-2 mb-6">ОБРАТНАЯ СВЯЗЬ</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-bold mb-2">Имя:</label>
                <Input 
                  id="name" 
                  type="text" 
                  className="border-black w-full" 
                  placeholder="Ваше имя"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-bold mb-2">Электронная почта:</label>
                <Input 
                  id="email" 
                  type="email" 
                  className="border-black w-full" 
                  placeholder="Ваш email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block font-bold mb-2">Тема сообщения:</label>
                <Input 
                  id="subject" 
                  type="text" 
                  className="border-black w-full" 
                  placeholder="Укажите тему сообщения"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-bold mb-2">Сообщение:</label>
                <Textarea 
                  id="message" 
                  className="border-black w-full min-h-32" 
                  placeholder="Введите ваше сообщение"
                  required
                />
              </div>
              
              <div className="flex items-start gap-2">
                <input type="checkbox" id="consent" className="mt-1" required />
                <label htmlFor="consent" className="text-sm">
                  Я согласен на обработку моих персональных данных в соответствии с Политикой конфиденциальности
                </label>
              </div>
              
              <Button type="submit" className="bg-black hover:bg-gray-800 w-full">
                Отправить сообщение
              </Button>
              
              <p className="text-sm text-gray-600 text-center">
                Также вы можете связаться с нами напрямую в Telegram: <a href="https://t.me/vocoders" target="_blank" rel="noopener noreferrer" className="underline">t.me/vocoders</a>
              </p>
            </form>
          </div>
        </div>
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

export default Contacts;
