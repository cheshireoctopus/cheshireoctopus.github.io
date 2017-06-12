export const formatDate = dateStr => {
	const date = new Date(dateStr)
	const year = date.getFullYear()
	const month = date.getMonth() + 1 <= 10 ? `0${date.getMonth() + 1}` : date.getMonth()
	const day = date.getDate() <= 10 ? `0${date.getDate()}` : date.getDate()
	return `@${year}-${month}-${day}`
}
