// pages/api/deleteWine/[id].js

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';



export async function DELETE(request: Request) {
  const  id  = await request.json();
  try {   

    if (!validateId(id)) {
        return NextResponse.json({ error: 'Invalid wine ID' }, { status: 400 });
      }
    const result = await sql`DELETE FROM wine_data WHERE id = ${id};`;

    return NextResponse.json({ message: 'Wine deleted successfully' }, { status: 200 });
  } catch (error:any) {
    console.error('Error inserting data:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

function validateId(id: string): boolean {
    // Implement validation logic here (e.g., check if id is a valid numeric ID)
    return /^\d+$/.test(id); // Example: Check if id consists of only digits
  }