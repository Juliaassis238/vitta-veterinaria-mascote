import { useState, useEffect } from 'react';

export default function Home() {
  const [activeQuote, setActiveQuote] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mascotVisible, setMascotVisible] = useState(true);

  const quotes = [
    {
      text: "A VITTA transformou o cuidado do meu cachorro. Equipe atenciosa e diagnóstico preciso.",
      author: "Marina Silva"
    },
    {
      text: "Confio plenamente na expertise da equipe. Meu gato recebeu o melhor tratamento.",
      author: "Carlos Mendes"
    },
    {
      text: "Clínica de excelência. Ambiente acolhedor e profissionais que realmente se importam.",
      author: "Ana Costa"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setMascotVisible(window.scrollY < 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#F6F3EC] text-[#1F2A24] font-sans overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-[6vw] py-4 md:py-7 z-100 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm' : 'mix-blend-difference'}`}>
        <div className="flex items-center gap-3">
          <img 
            src="/manus-storage/vitta-mascote_12bf93a3.png" 
            alt="VITTA Mascote" 
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <div className="font-serif text-lg md:text-xl text-white">
            VITTA <span className="text-[#B08D3F]">·</span> Veterinária
          </div>
        </div>
        <nav className="hidden md:flex gap-10">
          <a href="#filosofia" className="text-white text-xs uppercase tracking-wider font-medium hover:text-[#B08D3F] transition">Clínica</a>
          <a href="#servicos" className="text-white text-xs uppercase tracking-wider font-medium hover:text-[#B08D3F] transition">Especialidades</a>
          <a href="#equipe" className="text-white text-xs uppercase tracking-wider font-medium hover:text-[#B08D3F] transition">Equipe</a>
          <a href="#contato" className="text-white text-xs uppercase tracking-wider font-medium hover:text-[#B08D3F] transition">Contato</a>
        </nav>
        <a href="#contato" className="text-white border border-white/40 px-3 md:px-5 py-2 md:py-2.5 text-xs rounded-sm hover:bg-white/10 transition">
          Agendar
        </a>
      </header>

      {/* Hero */}
      <section className="relative h-screen min-h-[640px] flex flex-col justify-end px-4 md:px-[6vw] pb-12 md:pb-16 overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(14,23,19,0.25) 0%, rgba(14,23,19,0.55) 60%, rgba(14,23,19,0.92) 100%), url('/manus-storage/vitta-hero-veterinary_f991382f.png')`,
            backgroundSize: 'cover'
          }}
        />
        
        {/* Mascote flutuante no hero */}
        {mascotVisible && (
          <div className="absolute top-1/4 right-4 md:right-12 w-32 md:w-48 h-32 md:h-48 animate-bounce" style={{animationDuration: '3s'}}>
            <img 
              src="/manus-storage/vitta-mascote_12bf93a3.png" 
              alt="Mascote VITTA" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        )}

        <div className="relative z-10 text-white max-w-[900px]">
          <p className="text-[#B08D3F] text-xs uppercase tracking-widest mb-4 md:mb-6 flex items-center gap-2.5" data-reveal>
            <span className="w-6 h-px bg-[#B08D3F]" />
            Medicina veterinária de precisão
          </p>
          <h1 className="text-4xl md:text-8xl font-serif font-light mb-4 md:mb-6 leading-tight" data-reveal>
            Cuidado que <em className="italic font-light text-[#B08D3F]">se sente</em>,<br className="hidden md:block" />da consulta ao afeto.
          </h1>
          <p className="text-base md:text-lg max-w-[480px] text-white/82 font-light leading-relaxed" data-reveal>
            Uma clínica veterinária dedicada ao diagnóstico avançado, à cirurgia especializada e ao bem-estar contínuo de cães, gatos e animais exóticos.
          </p>
        </div>
        <div className="hidden md:flex absolute right-[6vw] bottom-10 text-white/65 text-xs uppercase tracking-wider items-center gap-2.5" style={{writingMode: 'vertical-rl'}}>
          Role para explorar
          <div className="w-px h-16 bg-white/40" />
        </div>
      </section>

      {/* Philosophy */}
      <section id="filosofia" className="py-16 md:py-[150px] px-4 md:px-[6vw]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[100px] items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-sm" data-reveal="scale">
            <img 
              src="/manus-storage/vitta-philosophy-care_2fab0925.png" 
              alt="Nossa filosofia" 
              className="w-full h-full object-cover scale-125 hover:scale-100 transition-transform duration-1600"
            />
          </div>
          <div>
            <p className="text-[#B08D3F] text-xs uppercase tracking-widest mb-4 md:mb-6 flex items-center gap-2.5" data-reveal>
              <span className="w-6 h-px bg-[#B08D3F]" />
              Nossa filosofia
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-4 md:mb-7" data-reveal>
              Ciência veterinária,<br className="hidden md:block" />conduzida com presença.
            </h2>
            <p className="text-base md:text-lg text-[#1F2A24]/72 font-light leading-relaxed max-w-[520px] mb-4 md:mb-5" data-reveal>
              Acreditamos que medicina de excelência exige tempo: tempo para observar, para ouvir o tutor e para entender o temperamento de cada animal antes de qualquer decisão clínica.
            </p>
            <p className="text-base md:text-lg text-[#1F2A24]/72 font-light leading-relaxed max-w-[520px]" data-reveal>
              Por isso, cada consulta na VITTA é conduzida sem pressa, apoiada por exames de imagem, laboratório próprio e uma equipe multidisciplinar sob o mesmo teto.
            </p>
            <div className="flex gap-8 md:gap-14 mt-8 md:mt-13" data-reveal>
              <div>
                <b className="font-serif text-3xl md:text-4xl block mb-1">18</b>
                <span className="text-xs uppercase tracking-wider text-[#7C8F7B]">Anos de atuação</span>
              </div>
              <div>
                <b className="font-serif text-3xl md:text-4xl block mb-1">12</b>
                <span className="text-xs uppercase tracking-wider text-[#7C8F7B]">Especialidades</span>
              </div>
              <div>
                <b className="font-serif text-3xl md:text-4xl block mb-1">24h</b>
                <span className="text-xs uppercase tracking-wider text-[#7C8F7B]">Emergência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="bg-[#16241F] text-[#F6F3EC] py-16 md:py-[150px] px-4 md:px-[6vw]">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[#B08D3F] text-xs uppercase tracking-widest mb-4 md:mb-6 flex items-center gap-2.5" data-reveal>
            <span className="w-6 h-px bg-[#B08D3F]" />
            O que tratamos
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium max-w-[640px] mb-12 md:mb-18" data-reveal>
            Especialidades sob um único endereço, pensadas para cada fase da vida do seu animal.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#F6F3EC]/14">
            {[
              { num: "01", title: "Clínica geral e preventiva", desc: "Check-ups completos, protocolos vacinais e acompanhamento contínuo de saúde." },
              { num: "02", title: "Diagnóstico por imagem", desc: "Ultrassonografia, radiografia digital e ecocardiograma em estrutura própria." },
              { num: "03", title: "Cirurgia especializada", desc: "Procedimentos ortopédicos, de tecidos moles e videolaparoscopia." },
              { num: "04", title: "Odontologia veterinária", desc: "Limpeza, restauração e tratamento de afecções bucais." }
            ].map((service) => (
              <div key={service.num} className="bg-[#16241F] p-6 md:p-11 min-h-[320px] flex flex-col justify-between hover:bg-[#1C2D26] transition" data-reveal>
                <span className="text-[#B08D3F] text-xs font-mono">{service.num}</span>
                <div>
                  <h3 className="text-lg md:text-2xl font-serif font-normal mb-2 md:mb-3.5">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-[#F6F3EC]/60 font-light">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-[150px] px-4 md:px-[6vw]">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-3 md:mb-5" data-reveal>
            Nosso processo
          </h2>
          <p className="text-base md:text-lg text-[#1F2A24]/72 font-light mb-12 md:mb-20 max-w-[600px]" data-reveal>
            Cada etapa é pensada para oferecer clareza, conforto e segurança ao tutor e ao seu animal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { num: "01", title: "Acolhimento", desc: "Recepção atenciosa e coleta de histórico completo." },
              { num: "02", title: "Avaliação", desc: "Exame físico detalhado e testes diagnósticos." },
              { num: "03", title: "Tratamento", desc: "Plano terapêutico personalizado e execução." },
              { num: "04", title: "Acompanhamento", desc: "Monitoramento contínuo e suporte pós-procedimento." }
            ].map((step) => (
              <div key={step.num} className="border-t border-[#1F2A24]/14 pt-6">
                <p className="text-[#B08D3F] text-xs font-mono mb-4">{step.num}</p>
                <h3 className="text-lg md:text-xl font-serif font-medium mb-2.5">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[#1F2A24]/65 font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipe" className="py-16 md:py-[150px] px-4 md:px-[6vw]">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-3 md:mb-5" data-reveal>
            Nossa equipe
          </h2>
          <p className="text-base md:text-lg text-[#1F2A24]/72 font-light mb-12 md:mb-20 max-w-[600px]" data-reveal>
            Profissionais dedicados, com formação contínua e paixão pelo bem-estar animal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-11">
            <div data-reveal>
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-6">
                <img 
                  src="/manus-storage/vitta-team-professional_57e6650a.png" 
                  alt="Equipe" 
                  className="w-full h-full object-cover grayscale-45 hover:grayscale-0 transition-all duration-600"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-medium">Equipe Multidisciplinar</h3>
              <span className="text-xs font-mono text-[#7C8F7B] uppercase tracking-wider">Especialistas em saúde animal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#EFEAE0] py-16 md:py-[150px] px-4 md:px-[6vw]">
        <div className="max-w-[1280px] mx-auto">
          <div className="overflow-hidden min-h-[200px]">
            {quotes.map((quote, idx) => (
              <div key={idx} className={`transition-opacity duration-500 ${activeQuote === idx ? 'opacity-100' : 'opacity-0 absolute'}`}>
                <blockquote className="text-2xl md:text-4xl font-serif italic font-normal leading-relaxed max-w-[900px] mb-6 md:mb-8">
                  "{quote.text}"
                </blockquote>
                <p className="text-xs font-mono text-[#7C8F7B] uppercase tracking-wider">— {quote.author}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-2.5 mt-8 md:mt-13">
            {quotes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveQuote(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${activeQuote === idx ? 'bg-[#B08D3F]' : 'bg-[#1F2A24]/14'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-0 px-0">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#1F2A24]/14">
          {[
            "/manus-storage/vitta-gallery-moments_86f67c86.png",
            "/manus-storage/vitta-gallery-1_59fa8741.png",
            "/manus-storage/vitta-gallery-2_89d2fa11.png",
            "/manus-storage/vitta-gallery-3_0561f965.png",
            "/manus-storage/vitta-gallery-moments_86f67c86.png",
            "/manus-storage/vitta-gallery-1_59fa8741.png"
          ].map((src, idx) => (
            <div key={idx} className="aspect-square md:aspect-[1/1.15] overflow-hidden" data-reveal="scale">
              <img 
                src={src}
                alt={`Galeria ${idx + 1}`}
                className="w-full h-full object-cover scale-125 hover:scale-100 transition-transform duration-1800"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="bg-[#16241F] text-[#F6F3EC] py-16 md:py-[150px] px-4 md:px-[6vw]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[100px]">
          <div>
            <p className="text-[#B08D3F] text-xs uppercase tracking-widest mb-4 md:mb-6 flex items-center gap-2.5" data-reveal>
              <span className="w-6 h-px bg-[#B08D3F]" />
              Entre em contato
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 md:mb-8" data-reveal>
              Agende sua consulta
            </h2>
            <div className="font-mono text-sm mb-8">
              <div className="flex justify-between py-3 border-t border-[#F6F3EC]/14 text-[#F6F3EC]/75">
                <span>Segunda a Sexta</span>
                <span>08:00 - 19:00</span>
              </div>
              <div className="flex justify-between py-3 border-t border-[#F6F3EC]/14 text-[#F6F3EC]/75">
                <span>Sábado</span>
                <span>09:00 - 14:00</span>
              </div>
              <div className="flex justify-between py-3 border-t border-b border-[#F6F3EC]/14 text-[#F6F3EC]/75">
                <span>Emergência 24h</span>
                <span>Sempre aberto</span>
              </div>
            </div>
          </div>
          <form className="flex flex-col gap-4 md:gap-5.5">
            <input 
              type="text" 
              placeholder="Seu nome" 
              className="bg-transparent border-b border-[#F6F3EC]/28 py-3 md:py-3.5 px-0.5 text-base text-white placeholder-[#F6F3EC]/40 outline-none focus:border-[#B08D3F] transition"
            />
            <input 
              type="email" 
              placeholder="Seu email" 
              className="bg-transparent border-b border-[#F6F3EC]/28 py-3 md:py-3.5 px-0.5 text-base text-white placeholder-[#F6F3EC]/40 outline-none focus:border-[#B08D3F] transition"
            />
            <textarea 
              placeholder="Mensagem" 
              rows={4}
              className="bg-transparent border-b border-[#F6F3EC]/28 py-3 md:py-3.5 px-0.5 text-base text-white placeholder-[#F6F3EC]/40 outline-none focus:border-[#B08D3F] transition resize-none"
            />
            <button className="bg-[#B08D3F] text-[#0E1713] mt-3 md:mt-3.5 px-6 md:px-8 py-3 md:py-4 font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-[#c9a558] transition transform hover:-translate-y-0.5 active:scale-95">
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0E1713] text-[#F6F3EC]/50 py-8 md:py-12 px-4 md:px-[6vw] flex flex-col md:flex-row justify-between items-center text-xs tracking-wider gap-4">
        <div className="text-[#F6F3EC]/85 flex items-center gap-2">
          <img 
            src="/manus-storage/vitta-mascote_12bf93a3.png" 
            alt="VITTA" 
            className="w-6 h-6 object-contain"
          />
          VITTA <span className="text-[#B08D3F]">·</span> Veterinária
        </div>
        <div className="text-center flex-1">© 2026 VITTA. Todos os direitos reservados.</div>
        <div className="text-[#F6F3EC]/60">Criado por Júlia Assis / Word Tecnologia</div>
      </footer>
    </div>
  );
}
