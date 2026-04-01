import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '../public');

const images = [
  // Imagem hero - LCP crítico. Reduzir largura para 600px (mobile first)
  {
    input: `${publicDir}/Foto_Secao_01.png`,
    outputs: [
      { file: `${publicDir}/Foto_Secao_01.webp`, width: 896, quality: 82 },
      { file: `${publicDir}/Foto_Secao_01-mobile.webp`, width: 480, quality: 78 },
    ],
  },
  // Imagem advogada (About)
  {
    input: `${publicDir}/adv.jpg`,
    outputs: [
      { file: `${publicDir}/adv.webp`, width: 700, quality: 82 },
      { file: `${publicDir}/adv-mobile.webp`, width: 480, quality: 75 },
    ],
  },
  // Background FAQ
  {
    input: `${publicDir}/bg-faq.png`,
    outputs: [
      { file: `${publicDir}/bg-faq.webp`, width: 671, quality: 80 },
    ],
  },
  // Background especialistas (usado como CSS background)
  {
    input: `${publicDir}/bg-especialistas.png`,
    outputs: [
      { file: `${publicDir}/bg-especialistas.webp`, width: 1200, quality: 78 },
    ],
  },
];

for (const img of images) {
  if (!existsSync(img.input)) {
    console.warn(`Arquivo não encontrado: ${img.input}`);
    continue;
  }
  for (const out of img.outputs) {
    await sharp(img.input)
      .resize({ width: out.width, withoutEnlargement: true })
      .webp({ quality: out.quality, effort: 6 })
      .toFile(out.file);

    const { size: inputSize } = await import('fs').then(fs => fs.promises.stat(img.input));
    const { size: outputSize } = await import('fs').then(fs => fs.promises.stat(out.file));
    const saving = (((inputSize - outputSize) / inputSize) * 100).toFixed(1);
    console.log(`✅ ${out.file.split('/public/')[1]} → ${(outputSize / 1024).toFixed(0)}KB (reduziu ${saving}% do original)`);
  }
}

console.log('\n🎉 Conversão concluída! Substitua as referências nas tags <img> pelos novos arquivos .webp');
