import dotenv from "dotenv"
dotenv.config()

import puppeteer from "puppeteer-core"
import fs from "fs"


(async () => {
	const browser = await puppeteer.launch({
		executablePath: process.env.CHROME_LOCATION,
		headless: true,
	})
	const page = await browser.newPage()

	await page.goto("https://hennanlewis.com", { waitUntil: "networkidle2" })

	const pdfOptions = {
		format: "A4",
		printBackground: true,
	}
	const pdfBuffer = await page.pdf(pdfOptions)
	await browser.close()

	fs.writeFileSync("example.pdf", pdfBuffer)
})()
