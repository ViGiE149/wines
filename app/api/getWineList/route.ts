// import { sql } from '@vercel/postgres';
// import { NextResponse } from 'next/server';
 
// export async function GET(request: Request) {
//   try {
//     const result = await sql`SELECT * FROM wine_data LIMIT 100;`;
  

//     return NextResponse.json({ result }, { status: 200 });
//   } catch (error:any) {
//     console.error(error.message);
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const limit = parseInt(url.searchParams.get('limit') || '15', 10);
    const offset = (page - 1) * limit;

    const result = await sql`
      SELECT * FROM wine_data
      ORDER BY id
      LIMIT ${limit}
      OFFSET ${offset};
    `;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error:any) {
    console.error(error.message);
    return NextResponse.json({ error }, { status: 500 });
  }
}

