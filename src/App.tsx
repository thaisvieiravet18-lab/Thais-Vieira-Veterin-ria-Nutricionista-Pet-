import { motion } from "motion/react";
import { Heart, ShieldCheck, Apple, Scale, Clock, GraduationCap, Send, Instagram, Mail, ChevronRight, Star, Quote, CheckCircle2, AlertCircle, Laptop, Calendar, Users, MessageCircle } from "lucide-react";
import { useState, FormEvent } from "react";

// --- Components ---

const PetFeederIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Food (Kibble) */}
    <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="11" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none" />
    {/* The Bowl */}
    <path d="M3 20h18l-2-7H5l-2 7Z" />
    {/* The Heart */}
    <path 
      fill="currentColor" 
      stroke="none"
      d="M12 17.5l-.4-.4C10.4 16 9.5 15.2 9.5 14.3c0-.8.6-1.4 1.4-1.4.4 0 .8.2 1.1.5.3-.3.7-.5 1.1-.5.8 0 1.4.6 1.4 1.4 0 .9-.9 1.7-2.1 2.8l-.4.4z" 
    />
  </svg>
);

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-brand-purple-light">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-brand-purple rounded-full flex items-center justify-center">
          <PetFeederIcon className="text-white w-6 h-6" />
        </div>
        <span className="font-display text-xl font-bold text-brand-purple-dark">Meu Primeiro Pet</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
        <a href="#inicio" className="hover:text-brand-purple transition-colors">Início</a>
        <a href="#servicos" className="hover:text-brand-purple transition-colors">Serviços</a>
        <a href="#clinica" className="hover:text-brand-purple transition-colors">Nutrição Clínica</a>
        <a href="#contato" className="bg-brand-purple text-white px-6 py-2.5 rounded-full hover:bg-brand-purple-dark transition-all shadow-lg shadow-brand-purple/20">Agendar Avaliação</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-purple">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-purple-dark/10 z-0" />
    
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white"
      >
        <h1 className="font-display text-white tracking-tight mb-6">
          <span className="text-5xl sm:text-6xl md:text-7xl font-bold block leading-[1.05]">Meu Primeiro Pet</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-normal block mt-3 opacity-90">Cuidado em Todas as Fases</span>
        </h1>
        
        <div className="space-y-6 mb-10">
          <p className="text-sm md:text-base font-medium opacity-80 leading-relaxed max-w-xl">Nutricionista veterinária online especializada em nutrição para cães e gatos. Descubra a melhor ração, a quantidade ideal em gramas ou um plano de alimentação natural seguro para prevenir obesidade, doença renal e outros problemas de saúde.</p>
          <ul className="space-y-3 text-sm md:text-base opacity-90">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Indicação da melhor ração para o seu pet</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Cálculo da quantidade exata em gramas</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Orientação em alimentação natural balanceada</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Suporte nutricional para prevenção e controle de doenças</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contato" className="bg-white text-brand-purple-dark px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-2 uppercase tracking-tight w-full sm:w-fit text-center">
              Agendar avaliação nutricional
            </a>
            <a 
              href="https://www.instagram.com/thaisvieiravet" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-brand-purple-dark/30 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg hover:bg-brand-purple-dark/50 transition-all flex items-center justify-center gap-2 uppercase tracking-tight w-full sm:w-fit text-center"
            >
              <Instagram className="w-6 h-6" /> Instagram
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 text-sm font-medium opacity-70">
            <span className="flex items-center gap-1"><Laptop className="w-4 h-4" /> Atendimento online para todo o Brasil</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative flex justify-center lg:justify-end"
      >
        <div className="relative w-full max-w-[500px] aspect-[4/5] bg-brand-purple-light rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/10">
          <img
            src="https://smooth-coffee-5b0rrznzgo.edgeone.app/4.png"
            alt="Cachorro olhando para cima"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const Positioning = () => (
  <section id="servicos" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src="https://frequent-magenta-ayxq2w13aq.edgeone.app/close-up-adorable-pet-eating.jpg" className="rounded-[3rem] shadow-2xl" alt="Cachorro feliz" referrerPolicy="no-referrer" />
          <div className="absolute -bottom-6 -right-6 bg-brand-purple text-white p-8 rounded-3xl shadow-xl max-w-xs">
            <p className="font-bold text-lg">A nutrição adequada é essencial para manter o peso ideal, melhorar a qualidade de vida e prevenir doenças.</p>
          </div>
        </div>
        <div>
          <h2 className="font-display text-4xl font-bold text-brand-purple-dark mb-8 leading-tight">
            A alimentação influencia diretamente a saúde do seu pet
          </h2>
          <p className="text-stone-600 text-lg mb-8 leading-relaxed">
            Erros na escolha da ração ou na quantidade oferecida podem causar problemas de saúde ao longo do tempo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              "Obesidade e sobrepeso",
              "Doença renal crônica",
              "Problemas urinários",
              "Problemas intestinais e digestivos",
              "Alergias e dermatites",
              "Fome constante e baixa saciedade"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-brand-bg rounded-2xl border border-brand-purple-light/30">
                <AlertCircle className="w-5 h-5 text-brand-purple" />
                <span className="font-semibold text-stone-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-brand-purple-dark font-bold text-lg">
            Com uma consulta nutricional veterinária online, é possível ajustar a alimentação de forma segura e individualizada.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const CommonErrors = () => (
  <section className="py-24 bg-brand-bg">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://instant-cyan-hflbywgpmr.edgeone.app/3.png" 
              className="w-full h-full object-cover" 
              alt="Design nutricional pet" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-dark/20 to-transparent" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="bg-white rounded-[4rem] p-10 md:p-16 shadow-xl border border-brand-purple-light/20">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-purple-dark mb-8 leading-tight">
              Quanto de ração devo dar para o meu pet?
            </h2>
            <p className="text-stone-600 text-lg mb-8">
              A maioria dos cães e gatos se alimenta com ração, mas poucos recebem a quantidade correta. Mesmo uma ração de boa qualidade pode causar obesidade ou desnutrição quando oferecida sem cálculo adequado.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Indicação da melhor ração para cachorro ou gato",
                "Quantidade exata em gramas por dia",
                "Divisão correta das refeições",
                "Orientação sobre petiscos",
                "Ajustes para emagrecimento ou ganho de peso"
              ].map((error, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-brand-bg rounded-2xl border border-brand-purple-light/10">
                  <div className="w-6 h-6 bg-brand-purple-dark text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-stone-700">{error}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-brand-purple-light/20 rounded-3xl border border-brand-purple-light/30 mb-8">
              <p className="text-stone-700 font-medium text-center">
                Na avaliação nutricional você recebe todo o suporte para garantir que seu pet coma o que há de melhor.
              </p>
            </div>

            <p className="text-xl font-bold text-brand-purple-dark text-center italic">
              A quantidade correta faz toda a diferença para a saúde do seu pet.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const NaturalFood = () => (
  <section className="py-24 bg-brand-bg">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <h2 className="font-display text-4xl font-bold text-brand-purple-dark mb-4">Alimentação natural para cães e gatos com segurança</h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            A alimentação natural pode trazer muitos benefícios, mas precisa ser balanceada corretamente. Dietas caseiras sem orientação podem causar deficiências nutricionais e problemas de saúde.
          </p>
        </div>
        <div className="relative">
          <img src="https://subsequent-fuchsia-jtcjvl4ue9.edgeone.app/Design%20sem%20nome%20(1).png" className="rounded-[3rem] shadow-xl" alt="Alimentos naturais para pets" referrerPolicy="no-referrer" />
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { icon: Apple, title: "Dieta Equilibrada", desc: "Dieta natural equilibrada e personalizada." },
          { icon: ShieldCheck, title: "Transição Segura", desc: "Transição segura da ração para alimentação natural." },
          { icon: Scale, title: "Ajuste de Nutrientes", desc: "Ajuste de nutrientes e suplementação quando necessário." },
          { icon: Heart, title: "Prevenção", desc: "Prevenção de deficiências nutricionais." }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-brand-purple-light/20 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand-purple-light rounded-2xl flex items-center justify-center mb-6 text-brand-purple">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl mb-3">{item.title}</h3>
            <p className="text-stone-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ClinicalNutrition = () => (
  <section id="clinica" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-brand-purple-dark rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-20" />
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold mb-8">Nutrição clínica veterinária para prevenção e controle de doenças</h2>
            <p className="text-brand-purple-light text-xl mb-12">
              A alimentação é parte fundamental no cuidado de pets com doenças ou condições específicas. O plano alimentar é adaptado de acordo com a necessidade de cada paciente.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Obesidade em cães e gatos",
                "Doença renal crônica",
                "Diabetes",
                "Alergias alimentares",
                "Problemas intestinais",
                "Pancreatite",
                "Doenças urinárias"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                  <div className="w-2 h-2 bg-brand-purple-light rounded-full" />
                  <span className="font-medium text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="https://inland-rose-qsweunb7bf.edgeone.app/2.png" className="rounded-[3rem] shadow-2xl border-4 border-white/20" alt="Cuidado clínico" referrerPolicy="no-referrer" />
          </div>
        </div>
        <p className="mt-12 text-lg font-medium text-brand-purple-light italic relative z-10">
          A nutrição adequada ajuda a controlar a evolução da doença e melhorar a qualidade de vida.
        </p>
      </div>
    </div>
  </section>
);

const Deliverables = () => (
  <section className="py-24 bg-brand-bg">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl font-bold text-brand-purple-dark mb-4">O que você recebe na avaliação nutricional</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "Avaliação completa do pet",
          "Plano alimentar personalizado",
          "Melhor ração ou dieta natural",
          "Quantidade exata em gramas",
          "Ajustes para doenças ou necessidades específicas",
          "Orientação prática para o dia a dia"
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-6 bg-white rounded-3xl shadow-sm border border-brand-purple-light/20">
            <CheckCircle2 className="w-5 h-5 text-brand-purple" />
            <span className="font-bold text-stone-700 text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ForWho = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl font-bold text-brand-purple-dark mb-4">Para quem é</h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="https://clumsy-gold-8rwdaemlcx.edgeone.app/pexels-lstan-3299894.jpg" 
            className="rounded-[3rem] shadow-2xl aspect-[3/4] object-cover" 
            alt="Para quem é" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: "Fases da Vida", desc: "Filhotes, adultos e idosos." },
            { title: "Tutores de Ração", desc: "Quem busca a melhor escolha comercial." },
            { title: "Alimentação Natural", desc: "Quem quer iniciar uma dieta caseira." },
            { title: "Controle de Peso", desc: "Pets com sobrepeso ou obesidade." },
            { title: "Pets com Doenças", desc: "Suporte clínico especializado." },
            { title: "Prevenção", desc: "Tutores que querem evitar problemas futuros." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-4 p-8 bg-brand-bg rounded-[2.5rem] border border-brand-purple-light/20">
              <div className="w-10 h-10 bg-brand-purple text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-brand-purple-dark">{item.title}</h3>
                <p className="text-stone-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const reviews = [
    { name: "Mariana Silva", pet: "Bento (Golden Retriever)", text: "A orientação da Dra. Thais mudou a vida do Bento. Ele emagreceu 4kg com saúde e parou de ter coceiras constantes. Hoje ele tem muito mais energia!", rating: 5 },
    { name: "Ricardo Oliveira", pet: "Luna (Gata SRD)", text: "Eu não sabia que a Luna estava comendo a quantidade errada. O cálculo em gramas foi essencial para controlar o peso dela. Atendimento nota 10!", rating: 5 },
    { name: "Camila Santos", pet: "Thor (Bulldog Francês)", text: "O suporte nutricional para a pancreatite do Thor foi fundamental. Ele está estável e muito mais feliz. Recomendo para todos os tutores.", rating: 5 },
  ];

  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-brand-purple-dark mb-4">O que os tutores dizem</h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg">
            Histórias reais de pets que transformaram sua saúde através da alimentação correta.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[3rem] shadow-xl shadow-brand-purple/5 border border-brand-purple-light/20 relative"
            >
              <Quote className="absolute top-6 right-8 text-brand-purple-light/30 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />)}
              </div>
              <p className="text-stone-600 italic mb-8 leading-relaxed">“{rev.text}”</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-purple-light rounded-full flex items-center justify-center text-brand-purple font-bold">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-brand-purple-dark">{rev.name}</p>
                  <p className="text-xs text-stone-400 font-medium uppercase tracking-wider">Tutor(a) do {rev.pet}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="sobre" className="py-24 bg-brand-bg overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
          <img
            src="https://adequate-blush-xxuaxu8rbr.edgeone.app/foto%20perfil.png"
            alt="Dra. Thais Vieira"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-purple-light rounded-full z-0" />
      </div>
      <div>
        <span className="text-brand-purple font-bold tracking-widest uppercase text-sm mb-4 block">A Profissional</span>
        <h2 className="font-display text-5xl font-bold text-brand-purple-dark mb-8">Quem vai cuidar da alimentação do seu pet</h2>
        <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
          <p>
            Thais Vieira é médica veterinária especialista em nutrição animal, com experiência em orientação nutricional para cães e gatos em todas as fases da vida.
          </p>
          <p>
            Seu atendimento é acolhedor, técnico e personalizado, ajudando tutores a escolher a melhor ração, calcular a quantidade ideal e oferecer uma alimentação equilibrada para prevenir doenças e melhorar a saúde dos pets.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-2xl border border-brand-purple-light shadow-sm">
              <GraduationCap className="text-brand-purple w-6 h-6" />
              <span className="text-sm font-bold">Nutricionista Veterinária Online</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-2xl border border-brand-purple-light shadow-sm">
              <ShieldCheck className="text-brand-purple w-6 h-6" />
              <span className="text-sm font-bold">Atendimento para todo o Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-1">
            <h2 className="font-display text-4xl font-bold text-brand-purple-dark mb-8">Vamos cuidar da alimentação do seu pet?</h2>
            <p className="text-stone-500 mb-10 text-lg leading-relaxed">
              Preencha o formulário ou envie um e-mail. Em breve você receberá retorno para entender o caso do seu pet e iniciar a consulta nutricional.
            </p>
            <p className="text-brand-purple font-bold mb-8">Atendimento online para todo o Brasil.</p>
            
            <a href="https://contate.me/5511945694306" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3 mb-10">
              <MessageCircle className="w-6 h-6" /> Agendar pelo WhatsApp
            </a>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-purple-light rounded-full flex items-center justify-center text-brand-purple">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">E-mail</p>
                  <p className="font-bold">thaisvieiravet@hotmail.com</p>
                </div>
              </div>
              <a 
                href="https://www.instagram.com/thaisvieiravet" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 hover:text-brand-purple transition-colors group"
              >
                <div className="w-12 h-12 bg-brand-purple-light rounded-full flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Instagram</p>
                  <p className="font-bold">@thaisvieiravet</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-bg p-12 rounded-[3rem] text-center shadow-xl border border-brand-purple-light"
              >
                <div className="w-20 h-20 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="text-white w-10 h-10" />
                </div>
                <h3 className="font-display text-3xl font-bold text-brand-purple-dark mb-4">Mensagem enviada com sucesso!</h3>
                <p className="text-stone-600 text-lg">Em breve entrarei em contato para te orientar sobre a alimentação do seu pet.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-brand-purple font-bold hover:underline">Enviar outra mensagem</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-brand-bg p-8 md:p-12 rounded-[3rem] shadow-xl border border-brand-purple-light grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Nome do Tutor</label>
                    <input required type="text" className="w-full px-6 py-4 bg-white rounded-2xl border-none focus:ring-2 focus:ring-brand-purple transition-all" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">E-mail</label>
                    <input required type="email" className="w-full px-6 py-4 bg-white rounded-2xl border-none focus:ring-2 focus:ring-brand-purple transition-all" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">WhatsApp</label>
                    <input required type="tel" className="w-full px-6 py-4 bg-white rounded-2xl border-none focus:ring-2 focus:ring-brand-purple transition-all" placeholder="(00) 00000-0000" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Nome do Pet</label>
                      <input required type="text" className="w-full px-6 py-4 bg-white rounded-2xl border-none focus:ring-2 focus:ring-brand-purple transition-all" placeholder="Nome" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Idade do Pet</label>
                      <input required type="text" className="w-full px-6 py-4 bg-white rounded-2xl border-none focus:ring-2 focus:ring-brand-purple transition-all" placeholder="Idade" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Alimentação Atual</label>
                    <select required className="w-full px-6 py-4 bg-white rounded-2xl border-none focus:ring-2 focus:ring-brand-purple transition-all">
                      <option value="">Selecione...</option>
                      <option value="racao">Ração</option>
                      <option value="natural">Alimentação Natural</option>
                      <option value="misto">Misto</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Motivo do Contato</label>
                    <textarea required rows={3} className="w-full px-6 py-4 bg-white rounded-2xl border-none focus:ring-2 focus:ring-brand-purple transition-all resize-none" placeholder="Conte um pouco sobre o caso..."></textarea>
                  </div>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="w-full bg-brand-purple text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-purple-dark transition-all shadow-xl shadow-brand-purple/20 flex items-center justify-center gap-3">
                    Enviar mensagem <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            )}
            <div className="mt-12 p-8 bg-brand-purple-light/30 rounded-[2.5rem] border border-brand-purple-light">
              <p className="text-sm font-bold text-brand-purple-dark mb-4 uppercase tracking-widest">Nutricionista veterinária online especializada em:</p>
              <ul className="grid sm:grid-cols-2 gap-3 text-stone-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-purple" /> Melhor ração para cães e gatos</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-purple" /> Cálculo da quantidade ideal</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-purple" /> Alimentação natural</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-purple" /> Suporte para obesidade e doenças</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-stone-900 text-white py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center">
              <PetFeederIcon className="text-white w-5 h-5" />
            </div>
            <span className="font-display text-xl font-bold">Meu Primeiro Pet</span>
          </div>
          <p className="text-stone-400 max-w-sm leading-relaxed mb-6">
            Consulta nutricional veterinária online para cães e gatos em todo o Brasil.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/thaisvieiravet" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-purple transition-all">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6">Links Rápidos</h4>
          <ul className="space-y-4 text-stone-400 text-sm">
            <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
            <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
            <li><a href="#clinica" className="hover:text-white transition-colors">Nutrição Clínica</a></li>
            <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Thais</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Especialista em:</h4>
          <ul className="space-y-4 text-stone-400 text-sm">
            <li>Quanto de ração devo dar</li>
            <li>Quantidade de ração em gramas</li>
            <li>Melhor ração para cães e gatos</li>
            <li>Alimentação natural balanceada</li>
            <li>Nutrição para obesidade em cães</li>
            <li>Dietas para doença renal em cães e gatos</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
        <p>© {new Date().getFullYear()} Meu Primeiro Pet. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Política de Privacidade</a>
          <a href="#" className="hover:text-white">Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-purple selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Positioning />
        <CommonErrors />
        <NaturalFood />
        <ClinicalNutrition />
        <Deliverables />
        <ForWho />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
