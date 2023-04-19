import courses from './data.json'
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export async function GET(request) {
    // return NextResponse(courses) // return string
    return NextResponse.json(courses)
}

export async function POST(request) {
    const { title, description, link, level } = await request.json()
    const newCourse = {
        id: uuidv4(),
        title,
        description,
        level,
        link
    }
    courses.push(newCourse)
    return NextResponse.json(courses)
}