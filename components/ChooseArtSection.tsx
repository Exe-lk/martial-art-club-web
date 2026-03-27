export default function ChooseArtSection() {
  return (
    <section className="bg-background-dark text-slate-100">
      <div className="pt-18 pb-20">
        <section className="mx-auto mb-8 max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-4 block text-xs font-bold tracking-[0.3em] text-primary uppercase">
              DISCIPLINE SELECTION
            </span>
            <h5 className="mb-6 text-4xl font-black tracking-tighter uppercase leading-none md:text-5xl">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Fighting Style
              </span>
            </h5>
            <p className="max-w-7xl font-medium text-slate-400 text-center">
              Select a discipline and explore its movement style. From traditional roots to modern
              efficiency.
            </p>
          </div>
        </section>

        <section className="mx-auto mb-2 max-w-7xl px-6">
          <div className="grid grid-cols-3 gap-1">
            <button
              type="button"
              className="group flex transform flex-col items-center justify-center border-b-4 border-white bg-primary px-4 py-2 text-white transition-all duration-300"
            >
              <span className="mb-1 text-[10px] font-black tracking-widest uppercase opacity-80">
                TRADITIONAL
              </span>
              <h3 className="text-xl font-black tracking-tight uppercase md:text-3xl">Kung Fu</h3>
              <span className="material-symbols-outlined mt-2 text-3xl">sports_mma</span>
            </button>

            <button
              type="button"
              className="group flex transform flex-col items-center justify-center border-b-4 border-transparent bg-black/30 px-4 py-2 text-slate-300 transition-all duration-300 hover:border-blue-900 hover:bg-secondary hover:text-white active:scale-95"
            >
              <span className="mb-1 text-[10px] font-black tracking-widest uppercase opacity-60 group-hover:opacity-100">
                CONCEPTUAL
              </span>
              <h3 className="text-xl font-black tracking-tight uppercase group-hover:text-white md:text-3xl">
                Jeet Kune Do
              </h3>
              <span className="material-symbols-outlined mt-2 text-3xl opacity-50 group-hover:opacity-100">
                bolt
              </span>
            </button>

            <button
              type="button"
              className="group flex transform flex-col items-center justify-center border-b-4 border-transparent bg-black/30 px-4 py-2 text-slate-300 transition-all duration-300 hover:border-blue-900 hover:bg-secondary hover:text-white active:scale-95"
            >
              <span className="mb-1 text-[10px] font-black tracking-widest uppercase opacity-60 group-hover:opacity-100">
                PERFORMANCE
              </span>
              <h3 className="text-xl font-black tracking-tight uppercase group-hover:text-white md:text-3xl">
                Wushu
              </h3>
              <span className="material-symbols-outlined mt-2 text-3xl opacity-50 group-hover:opacity-100">
                fitness_center
              </span>
            </button>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6">
          <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-white/10 bg-black/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] lg:aspect-[21/9]">
            <img
              alt="Martial arts practitioner in a traditional kung fu stance"
              className="h-full w-full object-cover opacity-70 grayscale contrast-125"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGbzDyNb6RLWhdFbczRy3MFLFll_mOYq4WhLIVTMTqanPTbHnR2uYJHXSAon7ie-KfF_2P8qbRAsD1YUwn_Mr3fzDg0iNoeEamM_z5Ewq3Cw5XUzttV_XCgLEtcRlrbdruSOVz2_cX8XxwV0qhUm1X3J7OEQ7bGyN0h-efObC5IXPk-H4TfXucAz2of54oVem1vyFjlqOJ7WnZLZwHscl6JtMrhLVkETRNcD8-Lq1jX2k0L7i1q003GoCZj1jlyAYtRVSIfRMnY0E"
            />

            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-black/0 to-black/95 p-8 md:p-16">
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="group flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-primary bg-black/40 backdrop-blur-sm transition-all hover:bg-primary">
                      <span
                        className="material-symbols-outlined text-slate-100 transition-transform group-hover:scale-125"
                        style={{ fontVariationSettings: '"FILL" 1' }}
                      >
                        play_arrow
                      </span>
                    </div>
                    <div>
                      <h4 className="text-3xl font-black tracking-tight text-white uppercase">
                        KUNG FU PREVIEW
                      </h4>
                      <p className="text-sm font-bold tracking-widest text-secondary uppercase">
                        Master the flow
                      </p>
                    </div>
                  </div>

                  <p className="mb-8 text-lg leading-relaxed text-slate-300 md:text-xl">
                    Flowing, traditional, powerful movements focused on control and balance.
                    Experience the ancient art form that builds absolute core stability and explosive
                    rotational power.
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      className="bg-primary px-10 py-4 text-sm font-black tracking-widest text-white uppercase shadow-lg shadow-primary/20 transition-all hover:bg-red-700 active:scale-95"
                    >
                      Explore Classes
                    </button>
                    <button
                      type="button"
                      className="border-2 border-secondary px-8 py-[14px] text-sm font-black tracking-widest text-white uppercase transition-all hover:bg-secondary/10"
                    >
                      View Curriculum
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="min-w-[100px] border-t-2 border-secondary bg-black/60 p-4 backdrop-blur-sm">
                    <div className="mb-1 text-2xl font-black leading-none text-white">94</div>
                    <div className="text-[0.6rem] font-bold tracking-widest text-slate-400 uppercase">
                      Difficulty
                    </div>
                  </div>
                  <div className="min-w-[100px] border-t-2 border-primary bg-black/60 p-4 backdrop-blur-sm">
                    <div className="mb-1 text-2xl font-black leading-none text-white">12</div>
                    <div className="text-[0.6rem] font-bold tracking-widest text-slate-400 uppercase">
                      Masters
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
              <div className="border border-white/10 bg-black/80 px-3 py-1 backdrop-blur-sm">
                <span className="text-[10px] font-black tracking-widest text-white uppercase">
                  4K KINETIC PREVIEW
                </span>
              </div>
              <div className="bg-primary px-3 py-1">
                <span className="text-[10px] font-black tracking-widest text-white uppercase">
                  ELITE TIER
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

