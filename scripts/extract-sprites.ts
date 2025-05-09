import { load } from 'cheerio';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { Config, optimize } from 'svgo';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SPRITES_FILE = join(__dirname, '../public/svg/sprites.svg');
const OUTPUT_DIR = join(__dirname, '../public/icons');

// SVGO configuration
const svgoConfig: Config = {
  plugins: [
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeEditorsNSData',
    'cleanupAttrs',
    'mergeStyles',
    'minifyStyles',
    'removeUselessDefs',
    'removeEmptyAttrs',
    'removeEmptyText',
    'removeEmptyContainers',
    'removeUnusedNS',
    'sortAttrs',
    {
      name: 'removeAttrs',
      params: { attrs: '(data-name)' },
    },
  ],
};

function extractSprites(): void {
  // Create output directory if it doesn't exist
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Read the sprites file
  const spritesContent = readFileSync(SPRITES_FILE, 'utf-8');
  const $ = load(spritesContent, { xmlMode: true });

  // Find all symbols
  $('symbol').each((_, symbol) => {
    const $symbol = $(symbol);
    const id = $symbol.attr('id');
    const viewBox = $symbol.attr('viewBox');

    // Skip if no id or viewBox (shouldn't happen)
    if (!id || !viewBox) return;

    // Create filename from id (remove 'icon-' prefix if it exists)
    const filename = `${id.replace('icon-', '')}.svg`;

    // Create new SVG content
    const svgContent = `<svg 
  viewBox="${viewBox}"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>${$symbol.html() ?? ''}
</svg>`;

    // Optimize the SVG
    const optimizedSvg = optimize(svgContent, svgoConfig);

    if ('data' in optimizedSvg) {
      // Write to file
      const outputPath = join(OUTPUT_DIR, filename);
      writeFileSync(outputPath, optimizedSvg.data);
      console.debug(`Created optimized ${filename}`);
    }
  });

  console.debug(`\nExtracted and optimized ${$('symbol').length} icons to ${OUTPUT_DIR}`);
}

extractSprites();
