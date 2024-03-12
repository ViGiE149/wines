import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const result = await sql`
    INSERT INTO wine_data (id, name, year, type, varietal, rating, consumed, Date_consumed)
VALUES
  ('008', 'Boden', 2018, 'Red', 'Pinotage', 2.9, 'no', NULL),
  ('009', 'kidge', 2023, 'White Blend', 'Chardonnay, Sangiovese', 3.3, 'yes', '2020-08-20'),
  ('010', 'kidge', 2004, 'Red', 'Sauvignon Blanc, Syrah, Pinotage', 4.4, 'yes', '2021-12-08'),
  ('011', 'kidge', 2016, 'Red Blend', 'Sémillon, Cabernet Sauvignon, Merlot, Shiraz, Durif, Chenin Blanc, Verdelho', 3, 'yes', '2021-11-12'),
  ('012', 'kidge', 2020, 'White', 'Chenin Blanc, Gamay', 2.5, 'no', NULL),
  ('013', 'kidge', 2019, 'Red', 'Syrah, Malbec, Tempranillo', 2.9, 'no', NULL),
  ('014', 'Boden', 2007, 'Red Blend', 'Merlot, Syrah', 4.7, 'yes', '2023-09-02'),
  ('015', 'kidge', 2018, 'Red', 'Gamay, Chardonnay', 3, 'yes', '2023-09-30'),
  ('016', 'kidge', 2006, 'Red', 'Pinotage, Merlot, Malbec', 3, 'yes', '2021-05-09'),
  ('017', 'kidge', 2005, 'White Blend', 'Sémillon, Gamay, Cabernet Sauvignon, Merlot, Shiraz, Durif', 4.4, 'yes', '2020-11-11'),
  ('018', 'kidge', 2006, 'White Blend', 'Malbec, Chenin Blanc', 4.4, 'no', NULL),
  ('019', 'kidge', 2015, 'White Blend', 'Syrah', 4.3, 'yes', '2022-07-17'),
  ('020', 'kidge', 2001, 'White Blend', 'Mourvèdre, Tempranillo, Gamay', 3.2, 'no', NULL),
  ('021', 'kidge', 2004, 'Red Blend', 'Zinfandel, Cabernet Sauvignon, Merlot, Durif, Pinotage', 3.2, 'yes', '2021-05-10'),
  ('022', 'kidge', 2001, 'White Blend', 'Grenache, Zinfandel, Tempranillo', 3.5, 'yes', '2023-01-06'),
  ('023', 'Sine', 2008, 'Red Blend', 'Grenache, Chardonnay', 3, 'no', NULL),
  ('024', 'kidge', 2012, 'Red Blend', 'Cabernet Sauvignon, Merlot, Durif, Pinotage, Chenin Blanc', 4.4, 'no', NULL),
  ('025', 'Boden', 2005, 'Red Blend', 'Gewürztraminer, Pinotage, Barbera', 4.3, 'no', NULL),
  ('026', 'kidge', 2000, 'Red Blend', 'Pinot Noir', 3.2, 'no', NULL),
  ('027', 'kidge', 2004, 'White', 'Carménère', 4.9, 'no', NULL),
  ('028', 'kidge', 2001, 'White', 'Carignan, Gamay, Pinot Noir', 4.7, 'yes', '2020-01-04'),
  ('029', 'Boden', 2011, 'White Blend', 'Chardonnay, Verdelho, Merlot', 4.9, 'no', NULL),
  ('030', 'kidge', 2008, 'Red Blend', 'Muscat, Gamay', 2.9, 'yes', '2022-10-30'),
  ('031', 'kidge', 2019, 'White', 'Gamay, Syrah', 2.8, 'yes', '2021-12-15'),
  ('032', 'kidge', 2022, 'White Blend', 'Chenin Blanc, Cabernet Sauvignon', 3.9, 'yes', '2020-05-28'),
  ('033', 'Boden', 2006, 'Red Blend', 'Carignan, Malbec, Grenache', 2.7, 'yes', '2022-11-03'),
  ('034', 'kidge', 2020, 'Red Blend', 'Mourvèdre, Gewürztraminer', 4.7, 'no', NULL),
  ('035', 'kidge', 2012, 'Red Blend', 'Muscat, Malbec', 4.2, 'yes', '2022-02-10');
`;

    return NextResponse.json({ result }, { status: 200 });
   } catch (error:any) {
    console.error('Error inserting data:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
