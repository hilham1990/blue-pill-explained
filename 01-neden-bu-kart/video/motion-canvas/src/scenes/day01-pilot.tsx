import {Circle, Img, Line, Node, Rect, makeScene2D} from '@motion-canvas/2d';
import {
  all,
  chain,
  createRef,
  easeInOutCubic,
  easeOutCubic,
  waitFor,
} from '@motion-canvas/core';

const navy = '#071d3a';
const teal = '#12b8a6';
const amber = '#f5a000';
const blue = '#2f80ed';

export default makeScene2D(function* (view) {
  view.fill(navy);

  const hero = createRef<Img>();
  const stm32 = createRef<Img>();
  const schematic = createRef<Img>();
  const method = createRef<Img>();
  const shade = createRef<Rect>();
  const scan = createRef<Rect>();
  const pathLine = createRef<Line>();
  const pulse = createRef<Circle>();
  const probeA = createRef<Line>();
  const probeB = createRef<Line>();

  view.add(
    <>
      <Img ref={hero} src={'/media/hero.png'} width={1920} height={1073} />
      <Img ref={stm32} src={'/media/02-neden-stm32.png'} width={1920} height={1073} opacity={0} />
      <Img ref={schematic} src={'/media/04-tek-sayfalik-acik-sema.png'} width={1920} height={1073} opacity={0} />
      <Img ref={method} src={'/media/05-serinin-kurali.png'} width={1920} height={1073} opacity={0} />
      <Rect ref={shade} width={1920} height={1080} fill={'rgba(7,29,58,0.66)'} opacity={0} />
      <Rect
        ref={scan}
        width={220}
        height={1250}
        rotation={8}
        x={-1200}
        fill={'rgba(255,255,255,0.16)'}
        shadowColor={'rgba(255,255,255,0.30)'}
        shadowBlur={40}
      />
      <Line
        ref={pathLine}
        points={[[-650, 120], [-250, 120], [80, -40], [530, -40]]}
        stroke={teal}
        lineWidth={12}
        end={0}
        endArrow
        arrowSize={28}
        shadowColor={teal}
        shadowBlur={20}
      />
      <Circle ref={pulse} x={0} y={0} size={110} stroke={amber} lineWidth={10} opacity={0} />
      <Line ref={probeA} points={[[760, 620], [760, 620]]} stroke={'#e63946'} lineWidth={18} endArrow arrowSize={30} />
      <Line ref={probeB} points={[[910, 620], [910, 620]]} stroke={'#111827'} lineWidth={18} endArrow arrowSize={30} />
    </>,
  );

  // 0–6 sn: bilinmeyen kartı keşfet — genel kutu değil, sinematik kamera ve tarama ışığı.
  hero().scale(1.12);
  hero().position([0, 35]);
  yield* all(hero().scale(1, 5.2, easeInOutCubic), hero().position([0, 0], 5.2, easeInOutCubic));
  yield* scan().x(1200, 1.0, easeOutCubic);

  // 6–11 sn: soru anı — hareket durur, izleyiciye düşünme süresi verilir.
  yield* shade().opacity(0.33, 0.45);
  pulse().position([0, -10]);
  yield* chain(
    all(pulse().opacity(0.9, 0.25), pulse().size(180, 0.8, easeOutCubic)),
    all(pulse().opacity(0, 0.55), pulse().size(300, 0.55, easeOutCubic)),
  );
  yield* waitFor(2.2);
  yield* shade().opacity(0, 0.35);

  // 11–18 sn: karttan datasheet'e; şekil eşleşmesi ve çizilen bağlantı.
  yield* all(hero().opacity(0, 0.8), stm32().opacity(1, 0.8));
  stm32().scale(1.04);
  stm32().position([430, 80]);
  yield* all(stm32().scale(1.18, 5.8, easeInOutCubic), stm32().position([520, 120], 5.8, easeInOutCubic));
  yield* pathLine().end(1, 1.0, easeOutCubic);

  // 18–27 sn: gerçek şemada hat takip görevi; önce bekle, sonra cevabı çiz.
  yield* all(stm32().opacity(0, 0.65), schematic().opacity(1, 0.65), pathLine().opacity(0, 0.4));
  schematic().scale(1.02);
  schematic().position([-40, 20]);
  yield* waitFor(2.1);
  pathLine().points([[-480, 235], [-120, 235], [160, 40], [610, 40]]);
  pathLine().stroke(blue);
  pathLine().end(0);
  pathLine().opacity(1);
  yield* pathLine().end(1, 1.35, easeOutCubic);
  yield* all(schematic().scale(1.13, 4.4, easeInOutCubic), schematic().position([-130, 35], 4.4, easeInOutCubic));

  // 27–36 sn: ölçüm kanıtı — iki prob dışarıdan hedefe gelir.
  yield* all(schematic().opacity(0, 0.65), hero().opacity(1, 0.65), pathLine().opacity(0, 0.35));
  hero().scale(1.42);
  hero().position([0, 20]);
  probeA().points([[840, 680], [840, 680]]);
  probeB().points([[970, 680], [970, 680]]);
  yield* all(
    probeA().points([[840, 680], [220, 145]], 1.2, easeOutCubic),
    probeB().points([[970, 680], [360, 260]], 1.2, easeOutCubic),
  );
  pulse().position([220, 145]);
  pulse().size(80);
  yield* chain(
    pulse().opacity(1, 0.15),
    all(pulse().size(190, 0.65, easeOutCubic), pulse().opacity(0, 0.65)),
  );
  yield* waitFor(3.8);

  // 36–44 sn: yöntem tek akışta birleşir; metin bindirmeden görsel geri çağırma.
  yield* all(hero().opacity(0, 0.55), method().opacity(1, 0.7), probeA().opacity(0, 0.3), probeB().opacity(0, 0.3));
  method().scale(1.05);
  yield* method().scale(1, 5.4, easeInOutCubic);
  yield* shade().opacity(0.18, 0.8);
  yield* waitFor(1.4);
});
