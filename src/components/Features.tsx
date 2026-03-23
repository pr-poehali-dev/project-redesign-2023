import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Timer",
    title: "Сессии глубокой работы",
    description: "Настраиваемые блоки концентрации с паузами по вашему ритму. Без принуждения — только поддержка вашего естественного потока.",
  },
  {
    icon: "Eye",
    title: "Один фокус в моменте",
    description: "Приложение показывает только одну задачу. Всё остальное надёжно сохранено и терпеливо ждёт своего часа.",
  },
  {
    icon: "BellOff",
    title: "Режим тишины",
    description: "Запланированные окна покоя, которые защищают ваше время от внешних отвлечений. Ваш фокус — священен.",
  },
  {
    icon: "BarChart2",
    title: "Дневник энергии",
    description: "Мягкая аналитика вашего состояния и продуктивности. Понимайте себя лучше — без стресса и самокритики.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-terracotta mb-4 block">Возможности</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            Инструменты для спокойного ума
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-sage/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-6 group-hover:bg-sage/20 transition-colors duration-500">
                <Icon name={feature.icon} size={24} className="text-sage" fallback="Sparkles" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
