import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET(request: NextRequest) {
    try {
        // Read the PDF file from the public directory
        const pdfPath = join(process.cwd(), 'public', 'JoseDavidCV.pdf')
        const pdfBuffer = await readFile(pdfPath)

        // Create response with proper headers for download
        return new NextResponse(pdfBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="JoseDavidCV.pdf"',
                'Content-Length': pdfBuffer.length.toString(),
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        })
    } catch (error) {
        console.error('Error serving PDF:', error)
        return new NextResponse('PDF not found', { status: 404 })
    }
}
