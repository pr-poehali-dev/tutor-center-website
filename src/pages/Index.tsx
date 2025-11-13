import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [testAnswers, setTestAnswers] = useState<{ [key: string]: string }>({});

  const subjects = [
    { name: 'Математика', icon: 'Calculator', color: 'bg-blue-100 text-blue-700' },
    { name: 'Физика', icon: 'Atom', color: 'bg-purple-100 text-purple-700' },
    { name: 'Химия', icon: 'FlaskConical', color: 'bg-orange-100 text-orange-700' }
  ];

  const reviews = [
    { name: 'Анна Петрова', grade: '11 класс', text: 'Благодаря занятиям по математике сдала ЕГЭ на 92 балла! Преподаватели объясняют сложные темы простым языком.', rating: 5 },
    { name: 'Михаил Иванов', grade: '9 класс', text: 'Отличная подготовка к ОГЭ. Все материалы структурированы, есть много практики.', rating: 5 },
    { name: 'Елена Сидорова', grade: 'Родитель', text: 'Сын занимается уже полгода. Оценки в школе улучшились, появилась уверенность в знаниях.', rating: 5 }
  ];

  const testQuestions = {
    math: [
      {
        question: 'Чему равно значение выражения: 2x + 5, если x = 3?',
        options: ['8', '11', '13', '16'],
        correct: '11'
      },
      {
        question: 'Найдите корень уравнения: 3x - 7 = 8',
        options: ['3', '5', '7', '15'],
        correct: '5'
      }
    ],
    russian: [
      {
        question: 'В каком слове ударение падает на второй слог?',
        options: ['торты', 'звонит', 'банты', 'краны'],
        correct: 'звонит'
      },
      {
        question: 'Выберите правильное написание:',
        options: ['прийти', 'придти', 'прити', 'прейти'],
        correct: 'прийти'
      }
    ]
  };

  const materials = [
    { title: 'Алгебра 9 класс. Квадратные уравнения', subject: 'Математика', type: 'PDF', size: '2.3 МБ' },
    { title: 'Орфография. Правописание Н и НН', subject: 'Русский язык', type: 'PDF', size: '1.8 МБ' },
    { title: 'Механика. Законы Ньютона', subject: 'Физика', type: 'PDF', size: '3.1 МБ' },
    { title: 'Органическая химия. Углеводороды', subject: 'Химия', type: 'PDF', size: '2.7 МБ' }
  ];

  const handleTestSubmit = (testType: string) => {
    const questions = testType === 'math' ? testQuestions.math : testQuestions.russian;
    let correct = 0;
    questions.forEach((q, i) => {
      if (testAnswers[`${testType}-${i}`] === q.correct) correct++;
    });
    toast.success(`Результат: ${correct} из ${questions.length} правильных ответов`);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Спасибо! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen">
      <header className="bg-[#1A1F2C] text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">АкадемЦентр</h1>
            <div className="hidden md:flex gap-6">
              <a href="#subjects" className="hover:text-primary transition-colors">Предметы</a>
              <a href="#exam" className="hover:text-primary transition-colors">ЕГЭ/ОГЭ</a>
              <a href="#materials" className="hover:text-primary transition-colors">Материалы</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button variant="default" size="sm">
              Записаться
            </Button>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-br from-[#1A1F2C] via-[#2A3142] to-[#1A1F2C] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-white">Профессиональная подготовка</Badge>
            <h2 className="text-5xl font-bold mb-6">Репетиторский центр для вашего успеха</h2>
            <p className="text-xl text-gray-300 mb-8">
              Готовим к ЕГЭ и ОГЭ с гарантией результата. Индивидуальный подход, опытные преподаватели, современные методики.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на занятие
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white hover:bg-white/20 text-white">
                <Icon name="Download" className="mr-2" size={20} />
                Скачать материалы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Icon name="Award" size={40} className="text-primary mb-2" />
                <CardTitle>Высокие результаты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">92% учеников поступают в желаемые вузы</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Users" size={40} className="text-primary mb-2" />
                <CardTitle>Опытные педагоги</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Преподаватели с опытом работы от 5 лет</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="BookCheck" size={40} className="text-primary mb-2" />
                <CardTitle>Авторские методики</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Уникальные программы обучения для каждого</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="subjects" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши предметы</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {subjects.map((subject) => (
              <Card key={subject.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full ${subject.color} flex items-center justify-center mb-4`}>
                    <Icon name={subject.icon as any} size={32} />
                  </div>
                  <CardTitle>{subject.name}</CardTitle>
                  <CardDescription>Подготовка к ЕГЭ и ОГЭ</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mt-16">
            <h3 className="text-3xl font-bold text-center mb-10">Программы курсов</h3>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="math" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                      <Icon name="Calculator" size={24} />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xl font-bold">Математика</h4>
                      <p className="text-sm text-muted-foreground">Алгебра, геометрия, математический анализ</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2 flex items-center">
                        <Icon name="BookOpen" size={18} className="mr-2 text-primary" />
                        Программа курса
                      </h5>
                      <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                        <li>• Алгебра: уравнения, неравенства, системы</li>
                        <li>• Функции и графики, производные, интегралы</li>
                        <li>• Геометрия: планиметрия, стереометрия</li>
                        <li>• Тригонометрия и комбинаторика</li>
                        <li>• Задачи повышенной сложности (часть 2 ЕГЭ)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 flex items-center">
                        <Icon name="Target" size={18} className="mr-2 text-primary" />
                        Результаты
                      </h5>
                      <p className="text-sm text-muted-foreground ml-7">
                        Средний балл ЕГЭ наших учеников — 85+. Полное понимание всех разделов математики.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="physics" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
                      <Icon name="Atom" size={24} />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xl font-bold">Физика</h4>
                      <p className="text-sm text-muted-foreground">Механика, электродинамика, квантовая физика</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2 flex items-center">
                        <Icon name="BookOpen" size={18} className="mr-2 text-primary" />
                        Программа курса
                      </h5>
                      <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                        <li>• Механика: кинематика, динамика, законы сохранения</li>
                        <li>• Молекулярная физика и термодинамика</li>
                        <li>• Электродинамика: электростатика, магнетизм</li>
                        <li>• Оптика и волны</li>
                        <li>• Квантовая и атомная физика</li>
                        <li>• Решение олимпиадных задач</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 flex items-center">
                        <Icon name="Target" size={18} className="mr-2 text-primary" />
                        Результаты
                      </h5>
                      <p className="text-sm text-muted-foreground ml-7">
                        Глубокое понимание физических процессов. Уверенное решение задач любой сложности.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="chemistry" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center">
                      <Icon name="FlaskConical" size={24} />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xl font-bold">Химия</h4>
                      <p className="text-sm text-muted-foreground">Органика, неорганика, химические реакции</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2 flex items-center">
                        <Icon name="BookOpen" size={18} className="mr-2 text-primary" />
                        Программа курса
                      </h5>
                      <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                        <li>• Общая химия: атомы, молекулы, химические связи</li>
                        <li>• Неорганическая химия: металлы и неметаллы</li>
                        <li>• Органическая химия: углеводороды, функциональные группы</li>
                        <li>• Химические реакции и уравнения</li>
                        <li>• Окислительно-восстановительные реакции</li>
                        <li>• Решение задач на растворы и расчеты</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 flex items-center">
                        <Icon name="Target" size={18} className="mr-2 text-primary" />
                        Результаты
                      </h5>
                      <p className="text-sm text-muted-foreground ml-7">
                        Системное понимание химии. Подготовка к поступлению в медицинские и технические вузы.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="exam" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Подготовка к ЕГЭ и ОГЭ</h2>
          <Tabs defaultValue="price" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="price">Цены</TabsTrigger>
              <TabsTrigger value="tests">Пробные тесты</TabsTrigger>
            </TabsList>
            <TabsContent value="price" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Базовый</CardTitle>
                    <CardDescription>Для начального уровня</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">2 500 ₽</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Icon name="Check" size={16} className="mr-2 text-primary mt-0.5" />
                        <span>1 занятие в неделю</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" size={16} className="mr-2 text-primary mt-0.5" />
                        <span>Доступ к материалам</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" size={16} className="mr-2 text-primary mt-0.5" />
                        <span>Проверка домашних заданий</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6">Выбрать</Button>
                  </CardContent>
                </Card>
                <Card className="border-primary border-2">
                  <CardHeader>
                    <Badge className="w-fit mb-2">Популярный</Badge>
                    <CardTitle>Стандартный</CardTitle>
                    <CardDescription>Оптимальный выбор</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">4 500 ₽</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Icon name="Check" size={16} className="mr-2 text-primary mt-0.5" />
                        <span>2 занятия в неделю</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" size={16} className="mr-2 text-primary mt-0.5" />
                        <span>Все материалы и тесты</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" size={16} className="mr-2 text-primary mt-0.5" />
                        <span>Индивидуальные консультации</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6">Выбрать</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Интенсив</CardTitle>
                    <CardDescription>Максимальный результат</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">7 000 ₽</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Icon name="Check" size={16} className="mr-2 text-primary mt-0.5" />
                        <span>3 занятия в неделю</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" size={16} className="mr-2 text-primary mt-0.5" />
                        <span>Персональная программа</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" size={16} className="mr-2 text-primary mt-0.5" />
                        <span>24/7 поддержка куратора</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6">Выбрать</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="tests" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Пройдите пробный тест</CardTitle>
                  <CardDescription>Проверьте свои знания перед экзаменом</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="math" onValueChange={(val) => setSelectedTest(val)}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="math">Математика</TabsTrigger>
                      <TabsTrigger value="russian">Русский язык</TabsTrigger>
                    </TabsList>
                    <TabsContent value="math" className="space-y-6 mt-6">
                      {testQuestions.math.map((q, i) => (
                        <div key={i} className="space-y-3">
                          <Label className="text-base font-semibold">{i + 1}. {q.question}</Label>
                          <RadioGroup
                            value={testAnswers[`math-${i}`] || ''}
                            onValueChange={(val) => setTestAnswers({ ...testAnswers, [`math-${i}`]: val })}
                          >
                            {q.options.map((opt) => (
                              <div key={opt} className="flex items-center space-x-2">
                                <RadioGroupItem value={opt} id={`math-${i}-${opt}`} />
                                <Label htmlFor={`math-${i}-${opt}`}>{opt}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                      ))}
                      <Button onClick={() => handleTestSubmit('math')} className="w-full">
                        Проверить результат
                      </Button>
                    </TabsContent>
                    <TabsContent value="russian" className="space-y-6 mt-6">
                      {testQuestions.russian.map((q, i) => (
                        <div key={i} className="space-y-3">
                          <Label className="text-base font-semibold">{i + 1}. {q.question}</Label>
                          <RadioGroup
                            value={testAnswers[`russian-${i}`] || ''}
                            onValueChange={(val) => setTestAnswers({ ...testAnswers, [`russian-${i}`]: val })}
                          >
                            {q.options.map((opt) => (
                              <div key={opt} className="flex items-center space-x-2">
                                <RadioGroupItem value={opt} id={`russian-${i}-${opt}`} />
                                <Label htmlFor={`russian-${i}-${opt}`}>{opt}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                      ))}
                      <Button onClick={() => handleTestSubmit('russian')} className="w-full">
                        Проверить результат
                      </Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="materials" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Учебные материалы</h2>
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Библиотека материалов</CardTitle>
              <CardDescription>Скачивайте учебные пособия и конспекты</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {materials.map((material, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="FileText" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{material.title}</h4>
                        <p className="text-sm text-muted-foreground">{material.subject} • {material.type} • {material.size}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Icon name="Download" size={18} />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы учеников</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {Array(review.rating).fill(0).map((_, j) => (
                      <Icon key={j} name="Star" size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.grade}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Свяжитесь с нами</h2>
            <p className="text-center text-muted-foreground mb-8">
              Оставьте заявку, и мы подберем для вас оптимальную программу обучения
            </p>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 999-99-99" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Предмет</Label>
                    <Input id="subject" placeholder="Какой предмет вас интересует?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" placeholder="Расскажите о ваших целях и пожеланиях" rows={4} />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="Phone" size={32} className="mx-auto mb-2 text-primary" />
                  <p className="font-semibold">Телефон</p>
                  <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="Mail" size={32} className="mx-auto mb-2 text-primary" />
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">info@academ-center.ru</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="MapPin" size={32} className="mx-auto mb-2 text-primary" />
                  <p className="font-semibold">Адрес</p>
                  <p className="text-sm text-muted-foreground">Москва, ул. Ленина, 10</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A1F2C] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">АкадемЦентр</h3>
              <p className="text-sm text-gray-400">Профессиональная подготовка к ЕГЭ и ОГЭ</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
            © 2024 АкадемЦентр. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;