# Scene: scene-05 — Firmware Yükleme

**Durum:** v2 — SWD ve USART1 system bootloader yolları.

Üretim: `tools/generate-slide.py 11-debug-swd/prompts/05-firmware-yukleme.md 11-debug-swd/slides/05-firmware-yukleme-v2.png --mode generate`

```text
SCENE:
Day label: "GÜN 11"
Main title: "FIRMWARE YÜKLEMENİN İKİ YOLU"
Subtitle: "SWD · USART1 System Bootloader"

Use case: scientific-educational. Create two distinct side-by-side physical process paths,
not generic numbered panels.

Left path "SWD İLE": laptop → generic debug probe → CN4 → STM32 Flash.
Exactly three steps:
"1 · ST-Link'i CN4'e bağla"
"2 · STM32CubeProgrammer / OpenOCD ile dosyayı seç"
"3 · Flash → Reset → Çalıştır".
Note: "BOOT0 normal Flash başlangıç konumunda kalabilir."

Right path "USART1 SYSTEM BOOTLOADER İLE": laptop USB → USB-UART converter → crossed UART
wires → Blue Pill PA9/PA10.
Draw connections exactly:
"Dönüştürücü TX → PA10 / RX"
"Dönüştürücü RX ← PA9 / TX"
"GND ↔ GND".
Exactly four steps:
"1 · BOOT0'ı 3.3 V tarafına al"
"2 · Resetle — System Memory'den başlat"
"3 · CubeProgrammer UART portundan yükle"
"4 · BOOT0'ı GND tarafına geri al ve resetle".

Add a strong red correction note:
"STM32F103x8 dahili bootloader'ı USB DFU değildir; USART1 kullanır."
Smaller note: "USB'den doğrudan yükleme ancak önceden kurulmuş özel bir USB bootloader varsa
mümkündür."

Bottom band content: exactly two wide comparison cards:
"SWD → CN4 / Debug Probe" / "System Bootloader → PA9/PA10 / USB-UART".
Do not show CubeProgrammer USB DFU, claim BOOT0=GND is required for SWD, invent jumper
position numbers, or connect TX to TX.
```
