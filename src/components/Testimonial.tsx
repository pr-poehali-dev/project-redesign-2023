export function Testimonial() {
  return (
    <section className="py-32 px-6 bg-sage/5">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm uppercase tracking-widest text-muted-foreground mb-8 block">Истории пользователей</span>

        <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight tracking-tight mb-10 text-balance">
          «Я перестала чувствовать себя виноватой за то, что делаю перерывы. Hvile научил меня, что отдых — это часть работы.»
        </blockquote>

        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
            <img
              src="/professional-woman-portrait--soft-lighting--neutra.jpg"
              alt="Мария Ларссон"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-foreground font-medium">Мария Ларссон</p>
            <p className="text-sm text-muted-foreground">Продуктовый дизайнер, фрилансер · Стокгольм</p>
          </div>
        </div>
      </div>
    </section>
  );
}
