export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] bg-muted rounded-lg overflow-hidden">
            <img
              src="/minimal-scandinavian-workspace-with-natural-light-.jpg"
              alt="Спокойное рабочее пространство"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-sm rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                «Hvile» — по-норвежски «отдых». Настоящая продуктивность начинается с умения останавливаться.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <span className="text-sm uppercase tracking-widest text-sage">Наша философия</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-tight text-balance">
              Работа в ритме жизни,
              а не вопреки ей
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Мы живём в культуре постоянной занятости, где количество задач стало мерилом ценности.
                Но скандинавская мудрость говорит иное: глубокий отдых — это не награда за труд,
                а его неотъемлемая часть.
              </p>
              <p>
                Hvile создан для тех, кто готов работать иначе — внимательно, без суеты, с уважением
                к своей энергии. Меньше уведомлений, больше настоящей концентрации. Меньше списков — больше смысла.
              </p>
            </div>
            <div className="pt-4">
              <a href="#features" className="inline-flex items-center gap-2 text-foreground group">
                <span className="border-b border-foreground pb-0.5">Как это работает</span>
                <span className="text-terracotta group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
