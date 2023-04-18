import courses from './data.json'
import { NextResponse } from 'next/server'

export async function GET(request) {
    // return NextResponse(courses) // return string
    return NextResponse.json(courses)
}