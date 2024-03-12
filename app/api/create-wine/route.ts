import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE wine_data (
        id VARCHAR(4) NOT NULL,
        name VARCHAR(50) NOT NULL,
        year INT NOT NULL,
        type VARCHAR(20) NOT NULL,
       varietal VARCHAR(100) NOT NULL CHECK (varietal IN (
          'Cabernet Sauvignon', 'Merlot', 'Shiraz', 'Chenin Blanc', 'Sauvignon Blanc', 'Verdelho', 'Chardonnay', 'Durif',
          'Malbec', 'Malbec, Cabernet Sauvignon', 'Chardonnay, Sangiovese', 'Sauvignon Blanc, Syrah, Pinotage',
          'Sémillon, Cabernet Sauvignon, Merlot, Shiraz, Durif, Chenin Blanc, Verdelho', 'Chenin Blanc, Gamay',
          'Syrah, Malbec, Tempranillo', 'Merlot, Syrah', 'Gamay, Chardonnay', 'Pinotage, Merlot, Malbec',
          'Sémillon, Gamay, Cabernet Sauvignon, Merlot, Shiraz, Durif', 'Malbec, Chenin Blanc', 'Syrah',
          'Mourvèdre, Tempranillo, Gamay', 'Zinfandel, Cabernet Sauvignon, Merlot, Durif, Pinotage',
          'Grenache, Zinfandel, Tempranillo', 'Grenache, Chardonnay', 'Gewürztraminer, Pinotage, Barbera',
          'Pinot Noir', 'Carménère', 'Carignan, Gamay, Pinot Noir', 'Muscat, Gamay', 'Gamay, Syrah',
          'Chenin Blanc, Cabernet Sauvignon', 'Carignan, Malbec, Grenache', 'Mourvèdre, Gewürztraminer',
          'Muscat, Malbec'
      )),
        rating DECIMAL(4, 1) NOT NULL,
        consumed VARCHAR(3) NOT NULL,
        Date_consumed DATE,
        PRIMARY KEY (id)
    );
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}