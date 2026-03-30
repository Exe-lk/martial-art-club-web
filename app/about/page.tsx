export default function AboutPage() {
  return (
    <main className="overflow-x-hidden bg-[#f3f4f6] text-slate-900 dark:bg-[#0d0d0d] dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative flex h-[70vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/60" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/blog-martial-art-academy.jpeg')",
          }}
          aria-label="Martial arts professional in training stance"
        />

        <div className="container relative z-20 mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-white uppercase md:text-7xl">
            About Our <span className="text-primary">Academy</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-normal leading-relaxed text-slate-300 md:text-xl">
            Building strength, discipline, and champions through professional
            martial arts training since 2010.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded bg-primary px-10 py-4 text-sm font-black tracking-widest text-white uppercase transition-all hover:bg-red-700 shadow-lg shadow-primary/20">
              Our Instructors
            </button>
            <button className="rounded border-2 border-[#1e3a8a] px-10 py-4 text-sm font-black tracking-widest text-white uppercase transition-all hover:bg-[#1e3a8a]/10">
              Equipments
            </button>
          </div>
        </div>
      </section>

      {/* Meet Our Instructors */}
      <section className="relative overflow-hidden bg-white py-24 dark:bg-[#0d0d0d]">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="mb-2 block text-sm font-black tracking-widest text-primary uppercase">
              The Vanguard
            </span>
            <h2 className="text-4xl font-black text-slate-900 uppercase italic dark:text-white md:text-5xl">
              Meet Our Instructors
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12">
            {/* Instructor 1 */}
            <div className="group w-full border border-slate-200 bg-slate-50 transition-all hover:-translate-y-2 dark:border-slate-800 dark:bg-slate-900 lg:w-1/4">
              <div className="aspect-[4/5] overflow-hidden grayscale transition-all duration-500 group-hover:grayscale-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlL7Zvaieo36Y_Fcf_36VJ_fZZCk5QQQ_WW7VxDtd3e4VC_OSpi_aczNhLy7zkkl6Wkwb1nFMr9UZI42L0W4zz2KJpZOp3Sx5yR2ywv28eN6krbcgAgLlCai_hexK2xl_yZmUmItMJ7F_cp87Wf04D0Kd-Z3czG_DBbpNDo8OIylXTCuF_s0Qgi3D3j1OWL_w7VLmrLEBWegoVGORpaj4rTfIIbSjLIA-eMXXvZc7ParxZNlwKAtJl_aTgQ8bRjMNUmOjnarNKWck"
                  alt="Martial arts instructor Sarah Jenkins posing"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-black text-slate-900 uppercase dark:text-white">
                  Master Sarah Jenkins
                </h3>
                <p className="mb-2 text-xs font-bold tracking-wide text-[#1e3a8a] uppercase">
                  4th Dan Black Belt
                </p>
              </div>
            </div>

            {/* Chief Instructor */}
            <div className="group relative z-10 w-full scale-105 border-4 border-primary bg-slate-900 shadow-2xl shadow-primary/20 lg:w-1/3 lg:scale-110">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary px-6 py-1 text-sm font-black tracking-tighter text-white uppercase italic">
                Chief Instructor
              </div>
              <div className="aspect-[4/5] overflow-hidden transition-all duration-500 group-hover:brightness-110">
                <img
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC491QLeh_kKBQkRjd2iXfGLnRmL_7kPShiulCT26LE65QL7yuOPLaabKIH7yPEBiT3Mrc7B5jNV4w5E5zGMr41j9xdXj05dXXEmWhbSBdeUU-2FMG7XGXeYL5RnMDrsi_RusIVjYjkv6KAb2yKMiULObDP-3KGktNN2mYV4HmvFyJugS3bTFhc2qi9Fx3Pd6WR6ksQBblSRRkUsOF7ojmAAnSVMfQDv0bFJv884iGzpc1bLvP0PwDNrsO48A05cfuqhF-JjUnlvE"
                  alt="Grandmaster Elias Thorne"
                />
              </div>
              <div className="bg-[#0d0d0d] p-8">
                <h3 className="text-2xl font-black text-white uppercase italic">
                  Grandmaster Elias Thorne
                </h3>
                <p className="mb-4 text-sm font-bold tracking-widest text-primary uppercase">
                  Academy Founder
                </p>
                <p className="text-sm leading-relaxed text-slate-400">
                  Pioneering modern martial arts education with over 30 years of
                  discipline and mastery.
                </p>
              </div>
            </div>

            {/* Instructor 2 */}
            <div className="group w-full border border-slate-200 bg-slate-50 transition-all hover:-translate-y-2 dark:border-slate-800 dark:bg-slate-900 lg:w-1/4">
              <div className="aspect-[4/5] overflow-hidden grayscale transition-all duration-500 group-hover:grayscale-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBrlr01NW4-fIeyay0n9PHb8j6thKs969-oLjp_kuLiG5cDJADryxJof8ifCcnvNdGLFqUpZqHqH1-uWvIfsWOnmMy4zJPdDhFvpNlR0bd4ZsaR-32oORF_Lzbtq2WS1A6h6ao9uCTyHh0r_BTz-3Af--dWCJ3ZRuDhk33mI_EB__6oHhumNeVExFMyUatEhnxRkVQkuK4HUqxLsFLJpevc9y3HJ7_k5LYOaC-klBuk-m9RmI47hOc28jlo8XL6dIZuio1qYRRXQE"
                  alt="Sensei David Vogel"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-black text-slate-900 uppercase dark:text-white">
                  Sensei David Vogel
                </h3>
                <p className="mb-2 text-xs font-bold tracking-wide text-[#1e3a8a] uppercase">
                  Karate Specialist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories & Equipment */}
      <section className="bg-[#f3f4f6] py-24 dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="mb-2 block text-sm font-black tracking-widest text-[#1e3a8a] uppercase">
                Pro Gear
              </span>
              <h2 className="text-4xl font-black text-slate-900 uppercase italic dark:text-white">
                Armor &amp; Arsenal
              </h2>
            </div>
            <button className="rounded bg-[#1e3a8a] px-8 py-3 text-xs font-black tracking-widest text-white uppercase transition-colors hover:bg-blue-800">
              Shop All Equipment
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                tag: "Weaponry",
                border: "border-primary",
                title: "Oak Training Bokken",
                price: "$85.00",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDREpfBoFrVvcVoFrkX-TOBDMavNsREPnc3b4BEzk_xYJ405zWCkrBA2yfrhMDmiTn_nWWSSq1iaBEp88CnXWtc0HArqseK-ZvNwEBWNtqoR7VwCXFPTVgMfc5VVznZZ2qCg-J1Y7BXi9ys1NNdxUGLJHk1e8HrUFjb6jPGIPFZc5ql8ppAeSnF3_UPLJjoYphS-CBRsVbGFvqvEbkhkTk54ALlQaK-BWcIdAI2jLHp075XkVOdJtwrfC3mKVZ7nE8_8nSlf9629ks",
                alt: "Traditional Bokken Wooden Sword",
                chip: "bg-primary",
              },
              {
                tag: "Striking",
                border: "border-[#1e3a8a]",
                title: "Apex Pro 16oz Gloves",
                price: "$120.00",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-pFk0Dvslm5JjrQnGDKzcHhT88HnJjdXF9gXZSIaLepX079LyQJAyITRPDkx4e8Nd4EXemEfx4SI7jkCYgndCj8MTFetK4mEspw4mPzubb7vRQYchkva6_UCOrVZgw4cKG79PCyFdmFPveQ82MciWXBS6jKsfm2mdS3HsQ1Xnau_onZEaxMTSUxXSAG0P_G20K2LweYASS5wy3qRFozC-7TWcvP6rp4VcV5ybYmQZjOCqRdrQGaKCw2iAeUkY7Dd3me7rN9WTlhE",
                alt: "Elite Sparring Gloves",
                chip: "bg-[#1e3a8a]",
              },
              {
                tag: "Gym Gear",
                border: "border-primary",
                title: "100lb Heavy Bag",
                price: "$210.00",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo8XyaJVPi36gl669yjaOdQzjlvE8zKG44ogHVHD-GYmgI_whLHwKZDn6XFbA7NmCf4gt6xjyHn5pWf416JGm3pB7WEGGU_c5AqpGBne0WRAg5y909IHE52auymboQ_D6oZnlIl5a9BxEYrerPcMVr57DZCQldjoiw1eWX8mB3Y2wBYCYwf93QeSSye9YLQET0dbjGEXJMMUS-nHzL8WaIXMcqULXQIBTpNSa4Su59hsTnLpQtMMtrDicurKBhqEdZktxJzDyQV_c",
                alt: "Heavy Training Bag",
                chip: "bg-primary",
              },
              {
                tag: "Protection",
                border: "border-[#1e3a8a]",
                title: "Elite Shin Guards",
                price: "$65.00",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzuO85X3Y6vcUZYs7dgnWQruwpEEVwIfX0YnaLXEGTmyu1m9wl8M-7qbMkE7lVLTOYEggyAxFaxtvCoz9eopyR88GBwqpO11Mk6UR9H-WvPinqk9oooWOKNf5ANzAoT7o_J08NP5JRGf9g8JKZ5IPhw0PqEFa49n3SCaoHfexKEYBaw3zijoTH6rVMgJ5A7eJDjVcasARWfVCKSWztMqq49YDt2AOw51kUrdeHLhM7_Cl79Uzk5ns4PSIx8w7UKJKzlIHGSlZD0GI",
                alt: "Protective Gear",
                chip: "bg-[#1e3a8a]",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`group overflow-hidden border-l-4 bg-[#0d0d0d] p-1 ${item.border}`}
              >
                <div className="relative aspect-square bg-slate-800">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={item.img}
                    alt={item.alt}
                  />
                  <div
                    className={`absolute bottom-0 left-0 px-3 py-1 text-[10px] font-black tracking-wide text-white uppercase ${item.chip}`}
                  >
                    {item.tag}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="mb-1 text-sm font-black text-white uppercase">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-[#f3f4f6] py-24 dark:bg-slate-900">
        <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 h-24 w-24 border-t-4 border-l-4 border-primary" />
            <img
              className="relative z-10 h-[500px] w-full rounded object-cover shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2PUkTf-rHLA_laNzTCzSIaK7_jPKFD3fWBxkS5fPBPxph7thLAHuJqN8s_qyKFYpva9Hippc-nh0DEoWWUKwIDxXHwoAALar-62BawLkAln7XWYT8AIT_DrAKeLrC99hqs1inp-AXeZjub6_vD37zQ5WSlGOWDUEb7LLRF_lJ9eQVJfUGSlcE9c8Kf7mvMosJdvdlWd-xaSCs-NrLyWWnblQ1hagmPl8LkrWeWB6xY0Ieu1R7GPdy5TOKbk2hq-9lqSshRFBblcI"
              alt="Vintage black and white photo of early dojo training"
            />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-4 border-r-4 border-[#1e3a8a]" />
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <span className="mb-2 block text-sm font-black tracking-widest text-primary uppercase">
                The Legacy
              </span>
              <h2 className="text-4xl font-black text-slate-900 uppercase italic dark:text-white">
                Why Us
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Founded in 2010 by Grandmaster Elias Thorne, Apex Martial Arts
              Academy was built on a singular philosophy: discipline equals
              freedom. What started as a small garage dojo has evolved into a
              premier training center for future champions.
            </p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Our growth is rooted in our commitment to authentic technique and
              mental fortitude. We don&apos;t just teach combat; we cultivate
              character, resilience, and a warrior&apos;s spirit in every student
              who walks through our doors.
            </p>

            <div className="mt-4 grid gap-6">
              {[
                {
                  icon: "calendar_today",
                  title: "Founded in 2010",
                  text: "Over a decade of martial excellence.",
                },
                {
                  icon: "groups",
                  title: "500+ Students Trained",
                  text: "A growing community of dedicated practitioners.",
                },
                {
                  icon: "emoji_events",
                  title: "National Winners",
                  text: "Elite competitive achievements on the world stage.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="rounded bg-[#1e3a8a]/10 p-3 text-[#1e3a8a]">
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="border-y border-slate-800 bg-[#0d0d0d] py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-12 text-center lg:grid-cols-4">
            {[
              { icon: "military_tech", value: "50+", label: "Tournament Medals" },
              { icon: "rewarded_ads", value: "20+", label: "National Champions" },
              { icon: "person_celebrate", value: "1000+", label: "Students Trained" },
              { icon: "history_edu", value: "15+", label: "Years of Excellence" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-4">
                <span className="material-symbols-outlined text-5xl text-[#1e3a8a]">
                  {item.icon}
                </span>
                <div className="text-4xl font-black text-white italic md:text-5xl">
                  {item.value}
                </div>
                <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Complete Staff */}
      <section className="bg-white py-24 dark:bg-[#0d0d0d]">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="mb-2 block text-sm font-black tracking-widest text-primary uppercase">
              Elite Instructors
            </span>
            <h2 className="text-4xl font-black text-slate-900 uppercase italic dark:text-white">
              Our Complete Staff
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Master Sarah Jenkins",
                role: "4th Dan Black Belt",
                desc: "15 Years Teaching Experience. Specialized in Taekwondo and Brazilian Jiu-Jitsu.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlL7Zvaieo36Y_Fcf_36VJ_fZZCk5QQQ_WW7VxDtd3e4VC_OSpi_aczNhLy7zkkl6Wkwb1nFMr9UZI42L0W4zz2KJpZOp3Sx5yR2ywv28eN6krbcgAgLlCai_hexK2xl_yZmUmItMJ7F_cp87Wf04D0Kd-Z3czG_DBbpNDo8OIylXTCuF_s0Qgi3D3j1OWL_w7VLmrLEBWegoVGORpaj4rTfIIbSjLIA-eMXXvZc7ParxZNlwKAtJl_aTgQ8bRjMNUmOjnarNKWck",
                alt: "Martial arts instructor Sarah Jenkins posing",
              },
              {
                name: "Kru Marcus Chen",
                role: "Muay Thai Specialist",
                desc: "Former regional champion. 12 Years Experience in striking and conditioning.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCC491QLeh_kKBQkRjd2iXfGLnRmL_7kPShiulCT26LE65QL7yuOPLaabKIH7yPEBiT3Mrc7B5jNV4w5E5zGMr41j9xdXj05dXXEmWhbSBdeUU-2FMG7XGXeYL5RnMDrsi_RusIVjYjkv6KAb2yKMiULObDP-3KGktNN2mYV4HmvFyJugS3bTFhc2qi9Fx3Pd6WR6ksQBblSRRkUsOF7ojmAAnSVMfQDv0bFJv884iGzpc1bLvP0PwDNrsO48A05cfuqhF-JjUnlvE",
                alt: "Male Muay Thai instructor training",
              },
              {
                name: "Sensei David Vogel",
                role: "Karate & Self Defense",
                desc: "20+ Years Experience. Expert in traditional styles and modern self-defense.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBrlr01NW4-fIeyay0n9PHb8j6thKs969-oLjp_kuLiG5cDJADryxJof8ifCcnvNdGLFqUpZqHqH1-uWvIfsWOnmMy4zJPdDhFvpNlR0bd4ZsaR-32oORF_Lzbtq2WS1A6h6ao9uCTyHh0r_BTz-3Af--dWCJ3ZRuDhk33mI_EB__6oHhumNeVExFMyUatEhnxRkVQkuK4HUqxLsFLJpevc9y3HJ7_k5LYOaC-klBuk-m9RmI47hOc28jlo8XL6dIZuio1qYRRXQE",
                alt: "Martial arts instructor demonstration",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="group relative overflow-hidden rounded border border-slate-200 bg-slate-50 transition-all hover:-translate-y-2 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    src={t.img}
                    alt={t.alt}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-slate-900 uppercase transition-colors group-hover:text-primary dark:text-white">
                    {t.name}
                  </h3>
                  <p className="mb-4 text-sm font-bold text-[#1e3a8a] uppercase">
                    {t.role}
                  </p>
                  <p className="text-sm italic text-slate-500 dark:text-slate-400">
                    {t.desc}
                  </p>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    star
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#f3f4f6] py-24 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="mb-2 block text-sm font-black tracking-widest text-primary uppercase">
                Dojo Life
              </span>
              <h2 className="text-4xl font-black text-slate-900 uppercase italic dark:text-white">
                Life at Our Dojo
              </h2>
            </div>
            <a
              className="flex items-center gap-2 text-xs font-black tracking-widest text-[#1e3a8a] uppercase hover:underline"
              href="#"
            >
              View Full Gallery{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo8XyaJVPi36gl669yjaOdQzjlvE8zKG44ogHVHD-GYmgI_whLHwKZDn6XFbA7NmCf4gt6xjyHn5pWf416JGm3pB7WEGGU_c5AqpGBne0WRAg5y909IHE52auymboQ_D6oZnlIl5a9BxEYrerPcMVr57DZCQldjoiw1eWX8mB3Y2wBYCYwf93QeSSye9YLQET0dbjGEXJMMUS-nHzL8WaIXMcqULXQIBTpNSa4Su59hsTnLpQtMMtrDicurKBhqEdZktxJzDyQV_c",
                alt: "Students training together in dojo",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-pFk0Dvslm5JjrQnGDKzcHhT88HnJjdXF9gXZSIaLepX079LyQJAyITRPDkx4e8Nd4EXemEfx4SI7jkCYgndCj8MTFetK4mEspw4mPzubb7vRQYchkva6_UCOrVZgw4cKG79PCyFdmFPveQ82MciWXBS6jKsfm2mdS3HsQ1Xnau_onZEaxMTSUxXSAG0P_G20K2LweYASS5wy3qRFozC-7TWcvP6rp4VcV5ybYmQZjOCqRdrQGaKCw2iAeUkY7Dd3me7rN9WTlhE",
                alt: "Intense sparring session",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDREpfBoFrVvcVoFrkX-TOBDMavNsREPnc3b4BEzk_xYJ405zWCkrBA2yfrhMDmiTn_nWWSSq1iaBEp88CnXWtc0HArqseK-ZvNwEBWNtqoR7VwCXFPTVgMfc5VVznZZ2qCg-J1Y7BXi9ys1NNdxUGLJHk1e8HrUFjb6jPGIPFZc5ql8ppAeSnF3_UPLJjoYphS-CBRsVbGFvqvEbkhkTk54ALlQaK-BWcIdAI2jLHp075XkVOdJtwrfC3mKVZ7nE8_8nSlf9629ks",
                alt: "Belt promotion ceremony photo",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzuO85X3Y6vcUZYs7dgnWQruwpEEVwIfX0YnaLXEGTmyu1m9wl8M-7qbMkE7lVLTOYEggyAxFaxtvCoz9eopyR88GBwqpO11Mk6UR9H-WvPinqk9oooWOKNf5ANzAoT7o_J08NP5JRGf9g8JKZ5IPhw0PqEFa49n3SCaoHfexKEYBaw3zijoTH6rVMgJ5A7eJDjVcasARWfVCKSWztMqq49YDt2AOw51kUrdeHLhM7_Cl79Uzk5ns4PSIx8w7UKJKzlIHGSlZD0GI",
                alt: "Children martial arts class training",
              },
            ].map((g) => (
              <div
                key={g.alt}
                className="group relative aspect-square overflow-hidden rounded"
              >
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={g.img}
                  alt={g.alt}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="material-symbols-outlined text-4xl text-white">
                    zoom_in
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-8 text-4xl font-black text-white uppercase italic md:text-5xl">
            Ready to Start Your Martial Arts Journey?
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="rounded bg-white px-10 py-4 text-sm font-black tracking-widest text-primary uppercase transition-all shadow-xl hover:bg-slate-100">
              Join the Club
            </button>
            <button className="rounded border-2 border-white bg-transparent px-10 py-4 text-sm font-black tracking-widest text-white uppercase transition-all hover:bg-white/10">
              Book a Free Trial
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

