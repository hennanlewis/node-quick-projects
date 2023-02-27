function generateTable(startIndex, numRows, properties) {
	const table = []

	for (let i = startIndex; i < startIndex + numRows; i++) {
		const row = {}

		for (let j = 0; j < properties.length; j++) {
			const property = properties[j]
			if (property === "col") {
				row[property] = Math.floor(i + j / 10) * 10
			} else {
				row[property] = String.fromCharCode(10 * i + j)
			}
		}

		table.push(row)
	}

	return table
}

const properties = { col: "", u1: "", u2: "", u3: "", u4: "", u5: "", u6: "", u7: "", u8: "", u9: "", u10: "" }
const table = generateTable(1200, 100, Object.keys(properties))
console.table(table)
