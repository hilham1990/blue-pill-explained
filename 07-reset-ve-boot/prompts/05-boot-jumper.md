# Scene: scene-05 — Blue Pill'de Boot Jumper'ı

**Durum:** v2 — STM32F103x8 System Memory yolu USART1 olarak kilitlendi.

Üretim: `tools/generate-slide.py 07-reset-ve-boot/prompts/05-boot-jumper.md 07-reset-ve-boot/slides/05-boot-jumper.png --mode edit --ref visual-system/references/real-reset-boot-jumper-crop.png`

```text
SCENE:
Day label: "GÜN 07"
Main title: "SYSTEM MEMORY İLE FIRMWARE YÜKLE"
Subtitle: "BOOT0 + USART1 · USB DFU değil"

Use case: scientific-educational. Use the reference for the real yellow BOOT jumper and nearby
reset button. Build one left-to-right physical procedure, not numbered panels:

"BOOT0 → 3.3V tarafı"
→ "Resetle / yeniden besle"
→ "USB-UART dönüştürücü"
→ crossed serial wires:
"Dönüştürücü TX → PA10 / RX"
"Dönüştürücü RX ← PA9 / TX"
"GND ↔ GND"
→ "STM32CubeProgrammer · UART"
→ "Yükleme bitince BOOT0 → GND ve reset".

Add a prominent correction note:
"STM32F103x8 dahili bootloader'ı USART1 kullanır; USB DFU kullanmaz."
Smaller note:
"USB'den doğrudan yükleme ancak önceden kurulmuş özel bir USB bootloader ile mümkündür."

Bottom band content:
"System Memory yolu: BOOT0=1 · BOOT1=0 · USART1 / PA9–PA10"
Do not write "USB veya USART", show a USB cable connected directly to the Blue Pill as ROM
bootloader, connect TX to TX, invent jumper pin numbers, or repeat the steps as bottom cards.
```
