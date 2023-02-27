import PDFDocument from 'pdfkit'
import fs from 'fs'

console.time("pdffile")
const doc = new PDFDocument()
doc.pipe(fs.createWriteStream('output.pdf'))

const pages = []

function addPage(title) {
	const pageNumber = doc.bufferedPageRange().count
	pages.push({ title, pageNumber })
	doc.addPage()
	doc.text(title, { align: 'center' })
}

addPage('Título da Página 1')
doc.text('Conteúdo da Página 1')

addPage('Título da Página 2')
doc.text('Conteúdo da Página 2')

// Adicione quantas páginas desejar...

doc.addPage()
doc.text('Sumário', { align: 'center', size: 16 })

pages.forEach(({ title, pageNumber }) => {
	doc.moveDown()
	doc.text(`${title}.........................${pageNumber}`, { align: 'left' })
})

doc.end()
console.timeEnd("pdffile")