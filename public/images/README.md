# Executive Portrait Asset Directory

This directory is reserved for the official high-resolution executive portrait of **Swati Singh**, Chief Manager.

## Designated File Path
Place the final portrait photograph here as:
`public/images/swati-singh-portrait.jpg`

## Recommended Specifications
* **Aspect Ratio:** 3:4 (Vertical editorial portrait, e.g., 1200px × 1600px or higher)
* **Format:** High-resolution JPG or WebP
* **Framing:** Formal executive bust/half-length crop with natural posture
* **Color Temperature:** Neutral or warm, suitable for presentation against `#11151B` (Midnight Ink) and `#4A1722` (Deep Oxblood)

## How to Activate Real Portrait
Once the file `public/images/swati-singh-portrait.jpg` is in place, open `src/data/portfolio.ts` and set:
```typescript
portrait: {
  assetPath: "/images/swati-singh-portrait.jpg",
  altText: "Portrait of Swati Singh, Chief Manager & Banking Professional",
  hasRealPhoto: true, // change from false to true
}
```
The site will immediately render the photograph via Next.js optimized `<Image>` without requiring any layout changes or restructuring.

