import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Gift,
  GraduationCap,
  MapPin,
  MessageCircle,
  ScrollText,
  Sparkles
} from "lucide-react";

const EVENT_DATE = "2026-06-19T16:00:00";
const ACT_MAP_URL = "https://maps.app.goo.gl/jT6Rt5CePyW2cj338";
const RECEPTION_MAP_URL = "https://maps.app.goo.gl/WvyCZETAeUKHscjV9";
const WHATSAPP_URL =
  "https://wa.me/59163516136?text=Hola%20Denis,%20confirmo%20mi%20asistencia%20a%20tu%20graduaci%C3%B3n.";
const assetUrls = import.meta.glob("./assets/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  query: "?url",
  import: "default"
});
const denisPhoto = assetUrls["./assets/foto-denis.png"] || assetUrls["./assets/foto-placeholder.svg"];
const finiLogo = assetUrls["./assets/logo-fini.png"] || assetUrls["./assets/logo-placeholder.svg"];

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" }
  }
};

function Countdown() {
  const target = useMemo(() => new Date(EVENT_DATE).getTime(), []);
  const [remaining, setRemaining] = useState(target - Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemaining(target - Date.now());
    }, 1000);

    return () => window.clearInterval(timer);
  }, [target]);

  if (remaining <= 0) {
    return (
      <div className="rounded-2xl border border-gold/40 bg-ivory px-5 py-4 text-center text-lg font-semibold text-navy-950 shadow-gold">
        El gran día ha llegado
      </div>
    );
  }

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);
  const items = [
    ["Días", days],
    ["Horas", hours],
    ["Min", minutes],
    ["Seg", seconds]
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {items.map(([label, value]) => (
        <div
          key={label}
          className="rounded-xl border border-gold/35 bg-white/65 px-2 py-3 text-center shadow-inner"
        >
          <div className="font-title text-2xl font-semibold text-navy-950">
            {String(value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy-700">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionCard({ icon: Icon, title, children, className = "" }) {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={`paper-texture relative overflow-hidden rounded-[1.6rem] border border-champagne/55 p-6 text-navy-950 shadow-soft ${className}`}
    >
      <div className="absolute left-4 right-4 top-3 h-px bg-gold/50" />
      <div className="absolute bottom-3 left-4 right-4 h-px bg-gold/35" />
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-champagne shadow-gold">
          <Icon size={22} strokeWidth={1.8} />
        </div>
        <h2 className="font-title text-3xl font-semibold tracking-wide text-navy-950">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

function ExternalButton({ href, icon: Icon, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mt-5 flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-navy-900 px-5 py-4 text-center font-body text-sm font-semibold uppercase tracking-[0.12em] text-ivory shadow-gold transition duration-300 hover:-translate-y-0.5 hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-champagne"
    >
      <Icon size={20} />
      {children}
    </a>
  );
}

function ImageWithFallback({ src, alt, type }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return type === "logo" ? (
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-champagne/60 bg-ivory text-navy-900 shadow-gold">
        <GraduationCap size={38} />
      </div>
    ) : (
      <div className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[2rem] border border-champagne/60 bg-gradient-to-br from-navy-800 via-navy-950 to-black shadow-gold">
        <div className="text-center">
          <GraduationCap className="mx-auto text-champagne" size={70} strokeWidth={1.3} />
          <p className="mt-4 px-8 font-title text-2xl font-semibold text-ivory">
            Foto del graduado
          </p>
          <p className="mt-2 px-8 text-xs uppercase tracking-[0.2em] text-ivory/65">
            Colocar foto-denis.png
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={
        type === "logo"
          ? "h-20 w-20 rounded-2xl border border-champagne/60 bg-ivory object-contain p-1 shadow-gold"
          : "aspect-[4/5] w-full rounded-[2rem] border border-champagne/60 object-cover shadow-gold"
      }
    />
  );
}

function App() {
  return (
    <main className="min-h-screen px-4 py-6 text-navy-950">
      <div className="mx-auto max-w-[430px] overflow-hidden rounded-[2rem] border border-champagne/45 bg-ivory/95 shadow-soft backdrop-blur">
        <div className="paper-texture relative mx-4 mt-4 rounded-[1.6rem] border border-champagne/45 px-5 pb-8 pt-7 shadow-gold">
          <div className="absolute inset-0 opacity-35">
            <div className="absolute left-6 top-16 h-1 w-1 rounded-full bg-champagne sparkle" />
            <div className="absolute right-10 top-28 h-1.5 w-1.5 rounded-full bg-champagne sparkle" />
            <div className="absolute bottom-24 left-10 h-1 w-1 rounded-full bg-ivory sparkle" />
          </div>

          <motion.header
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative text-center"
          >
            <div className="mx-auto mb-4 flex w-fit justify-center">
              {/* Coloca el logo final en src/assets/logo-fini.png para reemplazar este placeholder. */}
              <ImageWithFallback src={finiLogo} alt="Logo FINI" type="logo" />
            </div>
            <div className="gold-line mx-auto mb-5 h-px w-44" />
            <p className="font-title text-base font-semibold uppercase tracking-[0.32em] text-gold">
              Mi Graduación
            </p>
            <h1 className="mt-3 font-script text-5xl leading-tight tracking-wide text-gold sm:text-6xl">
              Ing. Denis Guarayo
            </h1>
            <p className="mx-auto mt-3 max-w-xs font-elegant text-lg font-semibold leading-7 tracking-wide text-navy-900">
              Graduación de Ingeniería en Sistemas
            </p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.25, ease: "easeOut" }}
            className="relative mt-7"
          >
            {/* Coloca la foto final en src/assets/foto-denis.png para reemplazar este placeholder. */}
            <ImageWithFallback src={denisPhoto} alt="Ing. Denis Guarayo" />
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-champagne/70 bg-ivory px-5 py-3 text-sm font-semibold text-navy-950 shadow-gold">
              <GraduationCap size={20} />
              Promoción 2026
            </div>
          </motion.div>
        </div>

        <div className="space-y-4 px-4 pb-8">
          <motion.section
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="paper-texture relative mt-2 overflow-hidden rounded-[1.6rem] border border-champagne/45 px-6 py-5 text-center text-navy-950 shadow-soft"
          >
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-champagne/24 to-transparent" />
            <ScrollText className="relative mx-auto text-gold" size={34} strokeWidth={1.5} />
            <p className="relative mt-3 font-elegant text-2xl font-semibold leading-snug tracking-wide">
              Tengo el honor de invitarte a compartir conmigo este logro profesional.
            </p>
          </motion.section>

          <SectionCard icon={Sparkles} title="Invitación">
            <div className="space-y-4 font-body text-[0.98rem] leading-relaxed text-navy-900">
              <p>
                Con profunda alegría y gratitud, tengo el honor de invitarte a compartir conmigo
                un momento muy especial: mi graduación profesional en Ingeniería en Sistemas.
              </p>
              <p>
                Este logro representa años de esfuerzo, sacrificio, aprendizaje y perseverancia.
                Agradezco primeramente a Dios por guiarme en este camino, y a mis padres,
                Cresencio Sabino Guarayo Cervantes y María Martínez Choque, por su amor, apoyo y
                guía constante.
              </p>
              <p>
                También agradezco a mis hermanos, padrinos y amigos cercanos, quienes han sido
                parte importante de este proceso y de este logro.
              </p>
              <p className="font-semibold">
                Será un verdadero honor contar con tu presencia en este día tan significativo para
                mí.
              </p>
            </div>
          </SectionCard>

          <SectionCard icon={Calendar} title="Fecha y Hora">
            <div className="rounded-2xl border border-gold/35 bg-white/55 p-4 text-center">
              <p className="font-title text-3xl font-semibold tracking-wide text-navy-950">
                Viernes 19 de junio de 2026
              </p>
              <p className="mt-3 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-navy-800">
                <Clock size={18} />
                Acto de graduación: 16:00 hrs
              </p>
            </div>
            <div className="mt-5">
              <Countdown />
            </div>
          </SectionCard>

          <SectionCard icon={MapPin} title="Acto">
            <p className="font-title text-3xl font-semibold tracking-wide text-navy-950">Acto de Graduación</p>
            <p className="mt-2 text-base leading-7 text-navy-800">Facultad Integral Ichilo FINI</p>
            <ExternalButton href={ACT_MAP_URL} icon={MapPin}>
              Ver ubicación del acto
            </ExternalButton>
          </SectionCard>

          <SectionCard icon={Gift} title="Recepción">
            <p className="font-title text-3xl font-semibold tracking-wide text-navy-950">Recepción</p>
            <p className="mt-2 flex items-center gap-2 font-semibold text-navy-800">
              <Clock size={18} />
              20:00 hrs
            </p>
            <p className="mt-3 leading-7 text-navy-800">
              Domicilio particular
              <br />
              Nuevo Horizonte Km 35, Barrio 1ro de Mayo
            </p>
            <ExternalButton href={RECEPTION_MAP_URL} icon={MapPin}>
              Ver ubicación de la recepción
            </ExternalButton>
          </SectionCard>

          <SectionCard icon={MessageCircle} title="Confirma tu asistencia">
            <p className="leading-7 text-navy-800">
              Tu presencia hará aún más especial este logro profesional.
            </p>
            <ExternalButton href={WHATSAPP_URL} icon={MessageCircle}>
              Confirmar por WhatsApp
            </ExternalButton>
          </SectionCard>

          <motion.footer
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="rounded-[1.6rem] border border-champagne/45 bg-navy-900 p-7 text-center shadow-gold"
          >
            <GraduationCap className="mx-auto text-champagne" size={38} strokeWidth={1.5} />
            <p className="mt-4 font-title text-2xl font-semibold tracking-wide text-ivory">
              Gracias por formar parte de este momento tan especial.
            </p>
            <p className="mt-3 text-sm leading-6 text-ivory/75">
              Será un honor contar con tu presencia.
            </p>
            <div className="gold-line mx-auto my-5 h-px w-36" />
            <p className="font-script text-4xl tracking-wide text-champagne">Ing. Denis Guarayo</p>
          </motion.footer>
        </div>
      </div>
    </main>
  );
}

export default App;
