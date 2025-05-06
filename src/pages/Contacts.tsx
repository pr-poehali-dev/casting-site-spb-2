
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
            <li><Link to="/about" className="hover:underline">О проектах</Link></li>
            <li><Link to="/tips" className="hover:underline">Советы моделям</Link></li>
            <li><Link to="/contacts" className="font-bold underline">Контакты</Link></li>
          </ul>
        </div>
      </nav>

      {/* Основной контент */}
      <main className="container mx-auto py-8 px-6">
        {/* Заголовок страницы */}
        <div className="border-b-2 border-black pb-4 mb-8">
          <h2 className="text-4xl font-bold text-center">КОНТАКТЫ</h2>
          <p className="text-center mt-2 text-lg">Свяжитесь со мной для участия в фото- и видеосъёмках</p>
        </div>

        {/* Контактная информация */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold border-b border-black pb-2 mb-6">КАК СО МНОЙ СВЯЗАТЬСЯ</h3>
            
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
                <p className="mt-2 text-gray-600">Самый быстрый способ связаться со мной. Обычно отвечаю в течение дня.</p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-2">Для желающих участвовать в съёмках</h4>
                <p>Если вы хотите принять участие в моих творческих проектах, пожалуйста, напишите мне в Telegram и приложите:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>2-3 фотографии (портрет и в полный рост)</li>
                  <li>Ваш возраст</li>
                  <li>Рост</li>
                  <li>Опыт съёмок (если есть)</li>
                  <li>Какой тип проектов вам интересен (фото, видео, музыкальные клипы и т.д.)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-2">График работы</h4>
                <p>Я рассматриваю заявки и отвечаю на сообщения ежедневно. Съёмки обычно проводятся в выходные дни или вечером в будни.</p>
              </div>
              
              <div className="p-4 border border-black bg-white">
                <h4 className="text-lg font-bold mb-2">О проектах</h4>
                <p>Я фотограф и видеооператор из Санкт-Петербурга, специализирующийся на создании креативных фото- и видеопроектов. Работаю как над личными творческими проектами, так и над коммерческими заказами.</p>
                <p className="mt-2">В данный момент ищу моделей для участия в ТФП-съёмках музыкальных клипов и короткометражных фильмов.</p>
              </div>
            </div>
          </div>
          
          {/* Форма обратной связи */}
          <div>
            <h3 className="text-2xl font-bold border-b border-black pb-2 mb-6">АНКЕТА ДЛЯ МОДЕЛЕЙ</h3>
            
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
                <label htmlFor="age" className="block font-bold mb-2">Возраст:</label>
                <Input 
                  id="age" 
                  type="number" 
                  className="border-black w-full" 
                  placeholder="Ваш возраст"
                  min="18"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="height" className="block font-bold mb-2">Рост (см):</label>
                <Input 
                  id="height" 
                  type="number" 
                  className="border-black w-full" 
                  placeholder="Ваш рост в сантиметрах"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="contact" className="block font-bold mb-2">Контактная информация:</label>
                <Input 
                  id="contact" 
                  type="text" 
                  className="border-black w-full" 
                  placeholder="Telegram или номер телефона"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="experience" className="block font-bold mb-2">Опыт съёмок:</label>
                <Textarea 
                  id="experience" 
                  className="border-black w-full min-h-24" 
                  placeholder="Расскажите о своём опыте участия в фото или видеосъёмках (если есть)"
                />
              </div>
              
              <div>
                <label htmlFor="interest" className="block font-bold mb-2">Какие проекты вам интересны:</label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="photo" className="w-4 h-4" />
                    <label htmlFor="photo">Фотосъёмки</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="music" className="w-4 h-4" />
                    <label htmlFor="music">Музыкальные клипы</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="film" className="w-4 h-4" />
                    <label htmlFor="film">Короткометражные фильмы</label>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="about" className="block font-bold mb-2">О себе:</label>
                <Textarea 
                  id="about" 
                  className="border-black w-full min-h-32" 
                  placeholder="Расскажите немного о себе, своих интересах и почему хотите принять участие в съёмках"
                  required
                />
              </div>
              
              <div className="flex items-start gap-2">
                <input type="checkbox" id="consent" className="mt-1" required />
                <label htmlFor="consent" className="text-sm">
                  Я подтверждаю, что мне исполнилось 18 лет, и я согласен(на) на обработку моих персональных данных
                </label>
              </div>
              
              <Button type="submit" className="bg-black hover:bg-gray-800 w-full">
                Отправить анкету
              </Button>
              
              <p className="text-sm text-gray-600 text-center">
                Также вы можете связаться со мной напрямую в Telegram: <a href="https://t.me/vocoders" target="_blank" rel="noopener noreferrer" className="underline">t.me/vocoders</a>
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

export default Contacts;
