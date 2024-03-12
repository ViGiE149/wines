import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

interface WineData {
  name: string;
  year: number;
  type: string;
  varietal: string;  // Add varietal to the interface
  rating: number;
  consumed: string;  // Add consumed to the interface
}

export async function POST(request: Request) {
  const { name, year, type, rating, varietal, consumed }: WineData = await request.json();

    // const { searchParams } = new URL(request.url);
    // const petName = searchParams.get('name');
    // const ownerName = searchParams.get('year');
    // console.log(petName);
    // if (!petName || !ownerName) {
    //   throw new Error('Pet and owner names are required');
    // }

  try {
   

    const result = await sql`
    INSERT INTO wine_data (id,name, year, type, varietal, rating, consumed, Date_consumed)
    VALUES (2018,${name}, ${year}, ${type}, ${varietal}, ${rating}, ${consumed}, CURRENT_DATE)
    RETURNING *;
  `;
  
  

    return NextResponse.json({ result }, { status: 200 });
  } catch (error:any) {
    console.error('Error inserting data:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

