# Scene: scene-05 — Serinin Kuralı

**Durum:** Üretiliyor (2026-07-13). Diğer sahnelerden farklı olarak merkez görsel AI-üretimi değil, **gerçek ST datasheet sayfası** (STM32F103X8-datasheet.pdf, sayfa 19, Figure 1 — block diagram). Kullanıcı ekran görüntüsü aldı: `Ekran Resmi 2026-07-13 12.43.53.png`. Bu diyagram hiç değiştirilmeden merkeze konur, sadece çevresine marka/panel eklenir (Hero'da gerçek kart fotoğrafıyla yapılan aynı yöntem). 3 panel var (4 değil) çünkü metodoloji 3 sorudan oluşuyor.

Kullanım: `visual-system/master-style-prompt.md` ana blok + referans görsel paragrafı (Hero, sadece marka/panel/footer stili için) + aşağıdaki SCENE bloğu + zorunlu BOTTOM LAYOUT bloğu. **İkinci bir görsel olarak** gerçek blok diyagramı ekran görüntüsü de gönderilir ve merkeze pikselinde değişmeden yerleştirilir.

```text
SCENE:
Day label: "GÜN 01"
Main title: "SERİNİN KURALI"
Subtitle: "Her bölümde üç soru soruyoruz."

Central visual: the attached real STM32F103xx block diagram screenshot, placed unmodified,
pixel-for-pixel exactly as provided — do not redraw, regenerate, or alter any label in it.

Three NUMBERED panels (large colored number badge 1,2,3 top-left of each panel, not 4), each
connected with a thin matching-color line to a relevant area of the block diagram, each panel
exactly one cohesive block of text:
1 (teal) "Bu ne?" — "Bir blok diyagramı. Çipin iç mimarisini gösterir: CPU, bus matrisi, bellek,
  GPIO portları ve çevre birimleri."
2 (blue) "Neden burada?" — "Her blok belirli bir bus'a bağlı. Örneğin GPIO portları APB2'ye,
  timer'lar APB1 veya APB2'ye bağlanır — bu bağlantı performansı belirler."
3 (yellow) "Sahada ne anlama gelir?" — "Bir çipin blok diyagramına bakarak hangi çevre biriminin
  hangi clock hızında çalıştığını, performans sorunlarını teşhis ederken kullanabilirsin."

Do not add a fourth panel. Do not alter the block diagram content in any way.
```
