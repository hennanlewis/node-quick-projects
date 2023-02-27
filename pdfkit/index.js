import PDFDocument from "pdfkit"
import fs from "fs"

console.time("pdfCreator")
const doc = new PDFDocument()
doc.pipe(fs.createWriteStream("output.pdf"))

doc.registerFont("Signika", "./Signika-Bold.ttf")
doc.font("Signika")

doc.fontSize(20).text("Exemplo de texto com fonte personalizada! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus sapien, volutpat eu molestie ac, ullamcorper porttitor ex. Maecenas eget aliquam massa, non vehicula felis. Curabitur ullamcorper, nisi vel efficitur blandit, justo libero aliquet elit, non ullamcorper lacus velit at erat. Nullam dapibus non sem quis mattis. Nullam vitae leo tristique, hendrerit urna ac, vestibulum eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sit amet efficitur turpis. Quisque elementum ligula aliquam, maximus magna sed, viverra ligula. ", { indent: 50, align: "justify" })

doc
	.addPage()
	.fontSize(25)
	.text('Here is some vector graphics...', 0, 0)

doc
	.save()
	.moveTo(100, 150)
	.lineTo(100, 250)
	.lineTo(200, 250)
	.fill('#FF3300')

doc
	.addPage()
	.fillColor('blue')
	.text('Here is a link!', 100, 100)
	.underline(100, 100, 160, 27, { color: '#0000FF' })
	.link(100, 100, 160, 27, 'http://google.com/');

doc.end()

console.timeEnd("pdfCreator")